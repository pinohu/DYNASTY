"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Mail, FileText, Megaphone, Plus, X } from "lucide-react";
import Link from "next/link";

export default function LeadGenerationPage() {
  const { businessData, leadGeneration, setLeadGeneration } = useHormoziStore();
  const [activeTab, setActiveTab] = useState("warm-outbound");

  const addScript = (channel: keyof typeof leadGeneration, type: "scripts" | "assets" | "contentPieces" | "adCopy") => {
    const current = leadGeneration[channel];
    if (type === "scripts" && "scripts" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          scripts: [...current.scripts, ""],
        },
      });
    } else if (type === "assets" && "assets" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          assets: [...current.assets, ""],
        },
      });
    } else if (type === "contentPieces" && "contentPieces" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          contentPieces: [...current.contentPieces, ""],
        },
      });
    } else if (type === "adCopy" && "adCopy" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          adCopy: [...current.adCopy, ""],
        },
      });
    }
  };

  const updateScript = (
    channel: keyof typeof leadGeneration,
    type: "scripts" | "assets" | "contentPieces" | "adCopy",
    index: number,
    value: string
  ) => {
    const current = leadGeneration[channel];
    if (type === "scripts" && "scripts" in current) {
      const newScripts = [...current.scripts];
      newScripts[index] = value;
      setLeadGeneration({
        [channel]: {
          ...current,
          scripts: newScripts,
        },
      });
    } else if (type === "assets" && "assets" in current) {
      const newAssets = [...current.assets];
      newAssets[index] = value;
      setLeadGeneration({
        [channel]: {
          ...current,
          assets: newAssets,
        },
      });
    } else if (type === "contentPieces" && "contentPieces" in current) {
      const newPieces = [...current.contentPieces];
      newPieces[index] = value;
      setLeadGeneration({
        [channel]: {
          ...current,
          contentPieces: newPieces,
        },
      });
    } else if (type === "adCopy" && "adCopy" in current) {
      const newCopy = [...current.adCopy];
      newCopy[index] = value;
      setLeadGeneration({
        [channel]: {
          ...current,
          adCopy: newCopy,
        },
      });
    }
  };

  const removeItem = (
    channel: keyof typeof leadGeneration,
    type: "scripts" | "assets" | "contentPieces" | "adCopy",
    index: number
  ) => {
    const current = leadGeneration[channel];
    if (type === "scripts" && "scripts" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          scripts: current.scripts.filter((_, i) => i !== index),
        },
      });
    } else if (type === "assets" && "assets" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          assets: current.assets.filter((_, i) => i !== index),
        },
      });
    } else if (type === "contentPieces" && "contentPieces" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          contentPieces: current.contentPieces.filter((_, i) => i !== index),
        },
      });
    } else if (type === "adCopy" && "adCopy" in current) {
      setLeadGeneration({
        [channel]: {
          ...current,
          adCopy: current.adCopy.filter((_, i) => i !== index),
        },
      });
    }
  };

  const generate30DayPlan = () => {
    return `30-DAY LEAD SURGE PLAN FOR ${businessData.companyName || "YOUR COMPANY"}

WEEK 1: Foundation & Warm Outreach
- Day 1-2: Set up CRM and tracking systems
- Day 3-4: Create 5 warm outbound scripts
- Day 5-7: Send 50 warm outreach messages
- Target: 10 responses, 3 meetings booked

WEEK 2: Content & Cold Outreach
- Day 8-10: Publish 3 pieces of warm content
- Day 11-12: Create cold outbound sequence
- Day 13-14: Send 100 cold messages
- Target: 15 responses, 5 meetings booked

WEEK 3: Paid Ads & Optimization
- Day 15-17: Launch cold paid ads campaign
- Day 18-19: A/B test ad copy (3 variations)
- Day 20-21: Optimize based on data
- Target: 20 leads, 8 meetings booked

WEEK 4: Scale & Systematize
- Day 22-24: Double winning channels
- Day 25-26: Create SOPs for top performers
- Day 27-28: Hire/assign dedicated person
- Day 29-30: Review, optimize, plan next month
- Target: 30 leads, 12 meetings booked

MONTHLY TARGETS:
- Total Leads: 75+
- Meetings Booked: 28+
- Conversion Rate: 5%+
- Cost Per Lead: Track and optimize`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-slate-50">
            Core Four Lead Generation
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Build your complete lead generation system across all four channels
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="warm-outbound">Warm Outbound</TabsTrigger>
            <TabsTrigger value="cold-outbound">Cold Outbound</TabsTrigger>
            <TabsTrigger value="warm-content">Warm Content</TabsTrigger>
            <TabsTrigger value="cold-paid">Cold Paid Ads</TabsTrigger>
          </TabsList>

          <TabsContent value="warm-outbound" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Warm Outbound Strategy
                </CardTitle>
                <CardDescription>
                  Reach out to people who already know you or have shown interest
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Strategy Overview</Label>
                  <Textarea
                    placeholder="Who are your warm leads? (past customers, email list, social media followers, referrals, etc.)"
                    value={leadGeneration.warmOutbound.strategy}
                    onChange={(e) =>
                      setLeadGeneration({
                        warmOutbound: {
                          ...leadGeneration.warmOutbound,
                          strategy: e.target.value,
                        },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Outreach Scripts</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("warmOutbound", "scripts")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Script
                    </Button>
                  </div>
                  {leadGeneration.warmOutbound.scripts.map((script, index) => (
                    <div key={index} className="flex gap-2">
                      <Textarea
                        placeholder={`Script ${index + 1}: Email/LinkedIn/DM template...`}
                        value={script}
                        onChange={(e) => updateScript("warmOutbound", "scripts", index, e.target.value)}
                        rows={4}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("warmOutbound", "scripts", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Free Value Assets</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("warmOutbound", "assets")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Asset
                    </Button>
                  </div>
                  {leadGeneration.warmOutbound.assets.map((asset, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Asset ${index + 1}: e.g., Free audit, checklist, guide...`}
                        value={asset}
                        onChange={(e) => updateScript("warmOutbound", "assets", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("warmOutbound", "assets", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cold-outbound" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Cold Outbound Strategy
                </CardTitle>
                <CardDescription>
                  Reach out to people who don't know you yet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Strategy Overview</Label>
                  <Textarea
                    placeholder="How will you find and contact cold prospects? (LinkedIn, email lists, industry directories, etc.)"
                    value={leadGeneration.coldOutbound.strategy}
                    onChange={(e) =>
                      setLeadGeneration({
                        coldOutbound: {
                          ...leadGeneration.coldOutbound,
                          strategy: e.target.value,
                        },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Cold Outreach Scripts</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("coldOutbound", "scripts")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Script
                    </Button>
                  </div>
                  {leadGeneration.coldOutbound.scripts.map((script, index) => (
                    <div key={index} className="flex gap-2">
                      <Textarea
                        placeholder={`Script ${index + 1}: Cold email/LinkedIn template...`}
                        value={script}
                        onChange={(e) => updateScript("coldOutbound", "scripts", index, e.target.value)}
                        rows={4}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("coldOutbound", "scripts", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Free Value Assets</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("coldOutbound", "assets")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Asset
                    </Button>
                  </div>
                  {leadGeneration.coldOutbound.assets.map((asset, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Asset ${index + 1}: e.g., Free resource, case study...`}
                        value={asset}
                        onChange={(e) => updateScript("coldOutbound", "assets", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("coldOutbound", "assets", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="warm-content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Warm Content Strategy
                </CardTitle>
                <CardDescription>
                  Create content that attracts people who are already looking for solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Strategy Overview</Label>
                  <Textarea
                    placeholder="Where will you publish? (Blog, LinkedIn, YouTube, Podcast, etc.) What topics will you cover?"
                    value={leadGeneration.warmContent.strategy}
                    onChange={(e) =>
                      setLeadGeneration({
                        warmContent: {
                          ...leadGeneration.warmContent,
                          strategy: e.target.value,
                        },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Content Pieces</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("warmContent", "contentPieces")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Content
                    </Button>
                  </div>
                  {leadGeneration.warmContent.contentPieces.map((piece, index) => (
                    <div key={index} className="flex gap-2">
                      <Textarea
                        placeholder={`Content ${index + 1}: Title, topic, key points...`}
                        value={piece}
                        onChange={(e) => updateScript("warmContent", "contentPieces", index, e.target.value)}
                        rows={3}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("warmContent", "contentPieces", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Free Value Assets</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("warmContent", "assets")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Asset
                    </Button>
                  </div>
                  {leadGeneration.warmContent.assets.map((asset, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Asset ${index + 1}: Downloadable resource, lead magnet...`}
                        value={asset}
                        onChange={(e) => updateScript("warmContent", "assets", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("warmContent", "assets", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cold-paid" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5" />
                  Cold Paid Ads Strategy
                </CardTitle>
                <CardDescription>
                  Pay to reach new audiences who don't know you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Strategy Overview</Label>
                  <Textarea
                    placeholder="Which platforms? (Google Ads, Facebook, LinkedIn, etc.) What's your budget? Target audience?"
                    value={leadGeneration.coldPaidAds.strategy}
                    onChange={(e) =>
                      setLeadGeneration({
                        coldPaidAds: {
                          ...leadGeneration.coldPaidAds,
                          strategy: e.target.value,
                        },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Ad Copy Variations</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("coldPaidAds", "adCopy")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Ad Copy
                    </Button>
                  </div>
                  {leadGeneration.coldPaidAds.adCopy.map((copy, index) => (
                    <div key={index} className="flex gap-2">
                      <Textarea
                        placeholder={`Ad Copy ${index + 1}: Headline, description, CTA...`}
                        value={copy}
                        onChange={(e) => updateScript("coldPaidAds", "adCopy", index, e.target.value)}
                        rows={4}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("coldPaidAds", "adCopy", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Free Value Assets</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => addScript("coldPaidAds", "assets")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Asset
                    </Button>
                  </div>
                  {leadGeneration.coldPaidAds.assets.map((asset, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Asset ${index + 1}: Landing page offer, free trial...`}
                        value={asset}
                        onChange={(e) => updateScript("coldPaidAds", "assets", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("coldPaidAds", "assets", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>30-Day Lead Surge Plan</CardTitle>
            <CardDescription>Your customized action plan for the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap rounded-lg bg-slate-100 p-4 text-sm dark:bg-slate-800">
              {generate30DayPlan()}
            </pre>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/grand-slam-offer">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/hormozi/sales-process">
            <Button>Next: Sales Process →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

