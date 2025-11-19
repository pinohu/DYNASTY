"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import type { ICEProject } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, Plus, X, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ICEPrioritizationPage() {
  const { iceProjects, setICEProjects } = useHormoziStore();
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (!newProject.trim()) return;
    const project: ICEProject = {
      id: Date.now().toString(),
      name: newProject,
      impact: 5,
      confidence: 5,
      ease: 5,
      score: 0,
    };
    project.score = calculateScore(project);
    setICEProjects([...iceProjects, project]);
    setNewProject("");
  };

  const calculateScore = (project: ICEProject) => {
    return (project.impact + project.confidence + project.ease) / 3;
  };

  const updateProject = (id: string, field: "impact" | "confidence" | "ease", value: number) => {
    const updated = iceProjects.map((p) => {
      if (p.id === id) {
        const updatedProject = { ...p, [field]: value };
        updatedProject.score = calculateScore(updatedProject);
        return updatedProject;
      }
      return p;
    });
    setICEProjects(updated);
  };

  const removeProject = (id: string) => {
    setICEProjects(iceProjects.filter((p) => p.id !== id));
  };

  const sortedProjects = [...iceProjects].sort((a, b) => b.score - a.score);
  const top3 = sortedProjects.slice(0, 3);

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
            ICE Prioritization
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Score projects by Impact, Confidence, and Ease to find your top priorities
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              ICE Scoring System
            </CardTitle>
            <CardDescription>
              Rate each project from 1-10 on three dimensions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                    I
                  </Badge>
                  <Label className="font-semibold">Impact</Label>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  How much will this move the needle? (1 = Low, 10 = Game-changing)
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    C
                  </Badge>
                  <Label className="font-semibold">Confidence</Label>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  How sure are you it will work? (1 = Uncertain, 10 = Very confident)
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    E
                  </Badge>
                  <Label className="font-semibold">Ease</Label>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  How easy is it to execute? (1 = Very hard, 10 = Very easy)
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
              <p className="text-sm">
                <strong>ICE Score = (Impact + Confidence + Ease) / 3</strong>
                <br />
                Higher scores = Higher priority. Focus on projects with scores above 7.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Project</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Project name: e.g., Launch new product line, Implement CRM system..."
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addProject();
                  }
                }}
              />
              <Button onClick={addProject}>
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {iceProjects.length > 0 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Top 3 Priorities
                </CardTitle>
                <CardDescription>
                  These are your highest-scoring projects - focus here first
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {top3.map((project, index) => (
                  <div
                    key={project.id}
                    className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-600">#{index + 1}</Badge>
                        <span className="font-semibold">{project.name}</span>
                      </div>
                      <Badge variant="outline" className="text-lg font-bold">
                        {project.score.toFixed(1)}
                      </Badge>
                    </div>
                    <div className="grid gap-2 text-sm md:grid-cols-3">
                      <div>
                        Impact: <strong>{project.impact}/10</strong>
                      </div>
                      <div>
                        Confidence: <strong>{project.confidence}/10</strong>
                      </div>
                      <div>
                        Ease: <strong>{project.ease}/10</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Projects</CardTitle>
                <CardDescription>
                  All projects sorted by ICE score (highest first)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedProjects.map((project) => (
                  <div key={project.id} className="space-y-3 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{project.name}</span>
                        {top3.includes(project) && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                            Top 3
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-lg font-bold">
                          {project.score.toFixed(1)}
                        </Badge>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => removeProject(project.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Impact: {project.impact}/10</Label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={project.impact}
                          onChange={(e) =>
                            updateProject(project.id, "impact", parseInt(e.target.value))
                          }
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Confidence: {project.confidence}/10</Label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={project.confidence}
                          onChange={(e) =>
                            updateProject(project.id, "confidence", parseInt(e.target.value))
                          }
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Ease: {project.ease}/10</Label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={project.ease}
                          onChange={(e) =>
                            updateProject(project.id, "ease", parseInt(e.target.value))
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {iceProjects.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Add projects above to start prioritizing
              </p>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/scaling">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/hormozi/roadmap">
            <Button>Next: 90-Day Roadmap →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

