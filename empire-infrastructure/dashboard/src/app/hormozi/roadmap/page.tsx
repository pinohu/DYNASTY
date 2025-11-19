"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Plus, X, Target, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function RoadmapPage() {
  const { roadmap, setRoadmap, businessData } = useHormoziStore();
  const [activeTab, setActiveTab] = useState("month1");

  const addWeek = (month: "month1" | "month2" | "month3") => {
    const currentWeeks = roadmap[month].weeks;
    const newWeek = {
      week: currentWeeks.length + 1,
      goals: [],
      kpis: [],
      tasks: [],
    };
    setRoadmap({
      [month]: {
        ...roadmap[month],
        weeks: [...currentWeeks, newWeek],
      },
    });
  };

  const updateWeek = (
    month: "month1" | "month2" | "month3",
    weekIndex: number,
    field: "goals" | "kpis" | "tasks",
    value: string[]
  ) => {
    const newWeeks = [...roadmap[month].weeks];
    newWeeks[weekIndex] = { ...newWeeks[weekIndex], [field]: value };
    setRoadmap({
      [month]: {
        ...roadmap[month],
        weeks: newWeeks,
      },
    });
  };

  const addItem = (
    month: "month1" | "month2" | "month3",
    weekIndex: number,
    field: "goals" | "kpis" | "tasks"
  ) => {
    const newWeeks = [...roadmap[month].weeks];
    newWeeks[weekIndex][field] = [...newWeeks[weekIndex][field], ""];
    setRoadmap({
      [month]: {
        ...roadmap[month],
        weeks: newWeeks,
      },
    });
  };

  const updateItem = (
    month: "month1" | "month2" | "month3",
    weekIndex: number,
    field: "goals" | "kpis" | "tasks",
    itemIndex: number,
    value: string
  ) => {
    const newWeeks = [...roadmap[month].weeks];
    newWeeks[weekIndex][field][itemIndex] = value;
    setRoadmap({
      [month]: {
        ...roadmap[month],
        weeks: newWeeks,
      },
    });
  };

  const removeItem = (
    month: "month1" | "month2" | "month3",
    weekIndex: number,
    field: "goals" | "kpis" | "tasks",
    itemIndex: number
  ) => {
    const newWeeks = [...roadmap[month].weeks];
    newWeeks[weekIndex][field] = newWeeks[weekIndex][field].filter((_, i) => i !== itemIndex);
    setRoadmap({
      [month]: {
        ...roadmap[month],
        weeks: newWeeks,
      },
    });
  };

  const addReflection = (month: "month1" | "month2" | "month3") => {
    setRoadmap({
      [month]: {
        ...roadmap[month],
        reflection: [...roadmap[month].reflection, ""],
      },
    });
  };

  const updateReflection = (month: "month1" | "month2" | "month3", index: number, value: string) => {
    const newReflections = [...roadmap[month].reflection];
    newReflections[index] = value;
    setRoadmap({
      [month]: {
        ...roadmap[month],
        reflection: newReflections,
      },
    });
  };

  const removeReflection = (month: "month1" | "month2" | "month3", index: number) => {
    setRoadmap({
      [month]: {
        ...roadmap[month],
        reflection: roadmap[month].reflection.filter((_, i) => i !== index),
      },
    });
  };

  const generateRoadmapSummary = () => {
    return `90-DAY ACTION ROADMAP FOR ${businessData.companyName || "EMPIRE DYNASTY"}

MONTH 1 FOCUS: Foundation & Quick Wins
- Total Weeks: ${roadmap.month1.weeks.length}
- Primary Goals: ${roadmap.month1.weeks
  .flatMap((w) => w.goals)
  .filter((g) => g)
  .slice(0, 3)
  .join(", ") || "Set your goals above"}

MONTH 2 FOCUS: Scale & Optimize
- Total Weeks: ${roadmap.month2.weeks.length}
- Primary Goals: ${roadmap.month2.weeks
  .flatMap((w) => w.goals)
  .filter((g) => g)
  .slice(0, 3)
  .join(", ") || "Set your goals above"}

MONTH 3 FOCUS: Accelerate & Systematize
- Total Weeks: ${roadmap.month3.weeks.length}
- Primary Goals: ${roadmap.month3.weeks
  .flatMap((w) => w.goals)
  .filter((g) => g)
  .slice(0, 3)
  .join(", ") || "Set your goals above"}

KEY SUCCESS METRICS:
- Track weekly KPIs in each month
- Review and adjust based on reflection questions
- Focus on high-ICE score projects from prioritization`;
  };

  const renderMonth = (month: "month1" | "month2" | "month3", title: string) => {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="outline" onClick={() => addWeek(month)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Week
          </Button>
        </div>

        {roadmap[month].weeks.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Click "Add Week" to start planning
              </p>
            </CardContent>
          </Card>
        )}

        {roadmap[month].weeks.map((week, weekIndex) => (
          <Card key={weekIndex}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Week {week.week}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Goals
                  </Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => addItem(month, weekIndex, "goals")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Goal
                  </Button>
                </div>
                {week.goals.map((goal, goalIndex) => (
                  <div key={goalIndex} className="flex gap-2">
                    <Input
                      placeholder={`Goal ${goalIndex + 1}...`}
                      value={goal}
                      onChange={(e) =>
                        updateItem(month, weekIndex, "goals", goalIndex, e.target.value)
                      }
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeItem(month, weekIndex, "goals", goalIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    KPIs (Key Performance Indicators)
                  </Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => addItem(month, weekIndex, "kpis")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add KPI
                  </Button>
                </div>
                {week.kpis.map((kpi, kpiIndex) => (
                  <div key={kpiIndex} className="flex gap-2">
                    <Input
                      placeholder={`KPI ${kpiIndex + 1}: e.g., 10 new leads, $5K revenue, 5 meetings...`}
                      value={kpi}
                      onChange={(e) =>
                        updateItem(month, weekIndex, "kpis", kpiIndex, e.target.value)
                      }
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeItem(month, weekIndex, "kpis", kpiIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Tasks
                  </Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => addItem(month, weekIndex, "tasks")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                  </Button>
                </div>
                {week.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex gap-2">
                    <Input
                      placeholder={`Task ${taskIndex + 1}...`}
                      value={task}
                      onChange={(e) =>
                        updateItem(month, weekIndex, "tasks", taskIndex, e.target.value)
                      }
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeItem(month, weekIndex, "tasks", taskIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Monthly Reflection Questions</CardTitle>
            <CardDescription>
              Answer these at the end of each month to optimize your approach
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {roadmap[month].reflection.map((question, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  placeholder={`Reflection Question ${index + 1}: e.g., What worked well? What didn't? What will you change?`}
                  value={question}
                  onChange={(e) => updateReflection(month, index, e.target.value)}
                  rows={2}
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() => removeReflection(month, index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => addReflection(month)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Reflection Question
            </Button>
          </CardContent>
        </Card>
      </div>
    );
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
            90-Day Action Roadmap
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Break down your growth plan month by month with KPIs, targets, and tracking
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Roadmap Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap rounded-lg bg-slate-100 p-4 text-sm dark:bg-slate-800">
              {generateRoadmapSummary()}
            </pre>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="month1">Month 1</TabsTrigger>
            <TabsTrigger value="month2">Month 2</TabsTrigger>
            <TabsTrigger value="month3">Month 3</TabsTrigger>
          </TabsList>

          <TabsContent value="month1">{renderMonth("month1", "Month 1: Foundation & Quick Wins")}</TabsContent>
          <TabsContent value="month2">{renderMonth("month2", "Month 2: Scale & Optimize")}</TabsContent>
          <TabsContent value="month3">{renderMonth("month3", "Month 3: Accelerate & Systematize")}</TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/ice-prioritization">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/">
            <Button>Complete Framework →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

