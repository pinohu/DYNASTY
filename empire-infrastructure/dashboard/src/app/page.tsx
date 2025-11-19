"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, Zap, CheckCircle2, Calendar, BarChart3 } from "lucide-react";

export default function Home() {
  const frameworks = [
    {
      title: "Grand Slam Offer Audit",
      description: "Diagnose and rewrite your offer using the Value Equation and MAGIC Formula",
      icon: Target,
      href: "/hormozi/grand-slam-offer",
      color: "text-blue-600",
    },
    {
      title: "Core Four Lead Generation",
      description: "Build warm/cold outbound, content, and paid ads systems",
      icon: Users,
      href: "/hormozi/lead-generation",
      color: "text-green-600",
    },
    {
      title: "C.L.O.S.E.R Sales Process",
      description: "Complete sales script with questions, pain labels, and objection handling",
      icon: TrendingUp,
      href: "/hormozi/sales-process",
      color: "text-purple-600",
    },
    {
      title: "4Rs Retention System",
      description: "Retention, Reviews, Referrals, and Resells framework",
      icon: CheckCircle2,
      href: "/hormozi/retention",
      color: "text-orange-600",
    },
    {
      title: "Scaling Mechanism",
      description: "Choose your scaling path: Systems, People, or Capital",
      icon: Zap,
      href: "/hormozi/scaling",
      color: "text-red-600",
    },
    {
      title: "ICE Prioritization",
      description: "Score projects by Impact, Confidence, and Ease",
      icon: BarChart3,
      href: "/hormozi/ice-prioritization",
      color: "text-indigo-600",
    },
    {
      title: "90-Day Action Roadmap",
      description: "Month-by-month execution plan with KPIs and tracking",
      icon: Calendar,
      href: "/hormozi/roadmap",
      color: "text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            EMPIRE DYNASTY
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            Hormozi Business Optimization Framework
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500 dark:text-slate-500">
            Complete step-by-step framework for business growth using proven Hormozi principles.
            No fluff. Only execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((framework) => {
            const Icon = framework.icon;
            return (
              <Card key={framework.href} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${framework.color}`} />
                    <CardTitle className="text-xl">{framework.title}</CardTitle>
                  </div>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={framework.href}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg bg-slate-900 p-8 text-center text-slate-50 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-6 text-slate-300">
            Complete all frameworks to build your comprehensive growth plan
          </p>
          <Link href="/hormozi/dashboard">
            <Button size="lg" variant="secondary">
              View Complete Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
