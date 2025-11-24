"use client";

import { useEffect, useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Zap,
  BarChart3,
  Calendar,
  ArrowRight,
  Download,
  Cloud,
  Loader2,
  Save,
  LogOut
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HormoziDashboard() {
  const {
    businessData,
    grandSlamOffer,
    leadGeneration,
    salesProcess,
    retentionSystem,
    scalingPath,
    iceProjects,
    roadmap,
    saveToCloud,
    loadFromCloud,
    isSyncing,
    lastSynced,
    profileId
  } = useHormoziStore();

  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check auth status
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        // If we have a user, try to load their profile if we don't have one loaded
        // In a real app, we'd query the 'business_profiles' table for a record owned by this user
        // For now, we rely on the store's profileId or creating a new one
      }
    });
  }, []);

  const handleSave = async () => {
    if (!user) {
      router.push("/auth/login");
      return;
    }
    await saveToCloud();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };

  const exportData = () => {
    const data = {
      businessData,
      grandSlamOffer,
      leadGeneration,
      salesProcess,
      retentionSystem,
      scalingPath,
      iceProjects,
      roadmap,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hormozi-framework-${businessData.companyName || "empire-dynasty"}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getCompletionStatus = () => {
    const sections = {
      "Grand Slam Offer": !!grandSlamOffer.magicName,
      "Lead Generation": !!leadGeneration.warmOutbound.strategy,
      "Sales Process": !!salesProcess.closerScript,
      "Retention System": !!retentionSystem.retention.onboarding.length,
      "Scaling Path": !!scalingPath.selectedPath,
      "ICE Projects": iceProjects.length > 0,
      "Roadmap": roadmap.month1.weeks.length > 0,
    };
    const completed = Object.values(sections).filter(Boolean).length;
    const total = Object.keys(sections).length;
    return { completed, total, sections };
  };

  const status = getCompletionStatus();
  const top3Projects = [...iceProjects].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header & Cloud Sync Bar */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-slate-50">
              Hormozi Framework Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Complete overview of your business optimization plan
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {user ? (
                <>
                    <div className="text-xs text-right mr-2 hidden md:block">
                        <div className="font-medium text-slate-900">{user.email}</div>
                        <div className="text-slate-500">
                            {lastSynced ? `Synced: ${lastSynced.toLocaleTimeString()}` : 'Not synced'}
                        </div>
                    </div>
                    <Button onClick={handleSave} disabled={isSyncing}>
                        {isSyncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                        {isSyncing ? 'Saving...' : 'Save to Cloud'}
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleLogout} title="Logout">
                        <LogOut className="h-4 w-4" />
                    </Button>
                </>
            ) : (
                <Button onClick={() => router.push("/auth/login")} variant="secondary">
                    <Cloud className="mr-2 h-4 w-4" />
                    Login to Sync
                </Button>
            )}
            <Button variant="ghost" size="icon" onClick={exportData} title="Export JSON">
                <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Framework Completion</CardTitle>
            <CardDescription>
              Track your progress through all Hormozi frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                  {status.completed} of {status.total} sections completed
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {Math.round((status.completed / status.total) * 100)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${(status.completed / status.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(status.sections).map(([name, completed]) => (
                <div key={name} className="flex items-center gap-2">
                  {completed ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-slate-300" />
                  )}
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Grand Slam Offer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {grandSlamOffer.magicName ? (
                <>
                  <p className="text-sm font-semibold">{grandSlamOffer.magicName}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {grandSlamOffer.superiorOffer || grandSlamOffer.currentOffer}
                  </p>
                </>
              ) : (
                <p className="text-sm text-slate-500">Not started</p>
              )}
              <Link href="/hormozi/grand-slam-offer">
                <Button variant="outline" size="sm" className="w-full">
                  {grandSlamOffer.magicName ? "Edit" : "Start"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Lead Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <Badge variant={leadGeneration.warmOutbound.strategy ? "default" : "outline"}>
                  Warm Outbound
                </Badge>
                <Badge variant={leadGeneration.coldOutbound.strategy ? "default" : "outline"}>
                  Cold Outbound
                </Badge>
                <Badge variant={leadGeneration.warmContent.strategy ? "default" : "outline"}>
                  Warm Content
                </Badge>
                <Badge variant={leadGeneration.coldPaidAds.strategy ? "default" : "outline"}>
                  Paid Ads
                </Badge>
              </div>
              <Link href="/hormozi/lead-generation">
                <Button variant="outline" size="sm" className="w-full">
                  Configure <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Sales Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {salesProcess.closerScript ? (
                <>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {salesProcess.clarifyingQuestions.length} questions,{" "}
                    {salesProcess.objections.length} objections handled
                  </p>
                </>
              ) : (
                <p className="text-sm text-slate-500">Not started</p>
              )}
              <Link href="/hormozi/sales-process">
                <Button variant="outline" size="sm" className="w-full">
                  {salesProcess.closerScript ? "Edit" : "Start"}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                4Rs Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <Badge
                  variant={retentionSystem.retention.onboarding.length > 0 ? "default" : "outline"}
                >
                  Retention
                </Badge>
                <Badge variant={retentionSystem.reviews.strategy ? "default" : "outline"}>
                  Reviews
                </Badge>
                <Badge variant={retentionSystem.referrals.strategy ? "default" : "outline"}>
                  Referrals
                </Badge>
                <Badge variant={retentionSystem.resells.upsells.length > 0 ? "default" : "outline"}>
                  Resells
                </Badge>
              </div>
              <Link href="/hormozi/retention">
                <Button variant="outline" size="sm" className="w-full">
                  Configure <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Scaling Path
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {scalingPath.selectedPath ? (
                <Badge className="capitalize">{scalingPath.selectedPath} Path</Badge>
              ) : (
                <p className="text-sm text-slate-500">Not selected</p>
              )}
              <Link href="/hormozi/scaling">
                <Button variant="outline" size="sm" className="w-full">
                  {scalingPath.selectedPath ? "Edit" : "Choose"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                ICE Prioritization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {top3Projects.length > 0 ? (
                <div className="space-y-1">
                  {top3Projects.map((project, i) => (
                    <div key={project.id} className="flex items-center justify-between text-xs">
                      <span className="truncate">{project.name}</span>
                      <Badge variant="outline">{project.score.toFixed(1)}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No projects added</p>
              )}
              <Link href="/hormozi/ice-prioritization">
                <Button variant="outline" size="sm" className="w-full">
                  {iceProjects.length > 0 ? "Edit" : "Start"}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                90-Day Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold">Month 1</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {roadmap.month1.weeks.length} weeks planned
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Month 2</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {roadmap.month2.weeks.length} weeks planned
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Month 3</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {roadmap.month3.weeks.length} weeks planned
                  </p>
                </div>
              </div>
              <Link href="/hormozi/roadmap" className="mt-4 block">
                <Button variant="outline" size="sm" className="w-full">
                  {roadmap.month1.weeks.length > 0 ? "Edit" : "Start"} Roadmap{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
