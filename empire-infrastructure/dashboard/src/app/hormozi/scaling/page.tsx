"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Settings, Users, DollarSign, Plus, X } from "lucide-react";
import Link from "next/link";

export default function ScalingPage() {
  const { scalingPath, setScalingPath } = useHormoziStore();

  const addSOP = () => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        sopList: [...scalingPath.systems.sopList, ""],
      },
    });
  };

  const updateSOP = (index: number, value: string) => {
    const newSOPs = [...scalingPath.systems.sopList];
    newSOPs[index] = value;
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        sopList: newSOPs,
      },
    });
  };

  const removeSOP = (index: number) => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        sopList: scalingPath.systems.sopList.filter((_, i) => i !== index),
      },
    });
  };

  const addAutomation = () => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        automation: [...scalingPath.systems.automation, ""],
      },
    });
  };

  const updateAutomation = (index: number, value: string) => {
    const newAutomations = [...scalingPath.systems.automation];
    newAutomations[index] = value;
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        automation: newAutomations,
      },
    });
  };

  const removeAutomation = (index: number) => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        automation: scalingPath.systems.automation.filter((_, i) => i !== index),
      },
    });
  };

  const addDelegation = () => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        delegation: [...scalingPath.systems.delegation, ""],
      },
    });
  };

  const updateDelegation = (index: number, value: string) => {
    const newDelegations = [...scalingPath.systems.delegation];
    newDelegations[index] = value;
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        delegation: newDelegations,
      },
    });
  };

  const removeDelegation = (index: number) => {
    setScalingPath({
      systems: {
        ...scalingPath.systems,
        delegation: scalingPath.systems.delegation.filter((_, i) => i !== index),
      },
    });
  };

  const addRole = () => {
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: [
          ...scalingPath.hiring.roles,
          { role: "", priority: scalingPath.hiring.roles.length + 1, responsibilities: [] },
        ],
      },
    });
  };

  const updateRole = (index: number, field: "role" | "priority", value: string | number) => {
    const newRoles = [...scalingPath.hiring.roles];
    newRoles[index] = { ...newRoles[index], [field]: value };
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: newRoles,
      },
    });
  };

  const addResponsibility = (roleIndex: number) => {
    const newRoles = [...scalingPath.hiring.roles];
    newRoles[roleIndex] = {
      ...newRoles[roleIndex],
      responsibilities: [...newRoles[roleIndex].responsibilities, ""],
    };
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: newRoles,
      },
    });
  };

  const updateResponsibility = (roleIndex: number, respIndex: number, value: string) => {
    const newRoles = [...scalingPath.hiring.roles];
    newRoles[roleIndex].responsibilities[respIndex] = value;
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: newRoles,
      },
    });
  };

  const removeResponsibility = (roleIndex: number, respIndex: number) => {
    const newRoles = [...scalingPath.hiring.roles];
    newRoles[roleIndex].responsibilities = newRoles[roleIndex].responsibilities.filter(
      (_, i) => i !== respIndex
    );
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: newRoles,
      },
    });
  };

  const removeRole = (index: number) => {
    setScalingPath({
      hiring: {
        ...scalingPath.hiring,
        roles: scalingPath.hiring.roles.filter((_, i) => i !== index),
      },
    });
  };

  const getScalingPathDescription = (path: string | null) => {
    switch (path) {
      case "systems":
        return "Scale through systems, automation, and processes. Best for: Service businesses, agencies, consultancies.";
      case "people":
        return "Scale through hiring and building a team. Best for: Growing companies ready to delegate, businesses with repeatable processes.";
      case "capital":
        return "Scale through investment and capital. Best for: Capital-intensive businesses, tech startups, expansion opportunities.";
      default:
        return "Choose your primary scaling path based on your business model and current stage.";
    }
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
            Scaling Mechanism
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Choose your scaling path and build the systems to support growth
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Choose Your Scaling Path
            </CardTitle>
            <CardDescription>
              Select the primary path that aligns with your business model
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup
              value={scalingPath.selectedPath || ""}
              onValueChange={(value) =>
                setScalingPath({ selectedPath: value as "systems" | "people" | "capital" | null })
              }
            >
              <div className="flex items-start space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="systems" id="systems" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="systems" className="flex items-center gap-2 text-lg font-semibold">
                    <Settings className="h-5 w-5" />
                    Systems Path
                  </Label>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Scale through systems, automation, and processes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="people" id="people" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="people" className="flex items-center gap-2 text-lg font-semibold">
                    <Users className="h-5 w-5" />
                    People Path
                  </Label>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Scale through hiring and building a team
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="capital" id="capital" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="capital" className="flex items-center gap-2 text-lg font-semibold">
                    <DollarSign className="h-5 w-5" />
                    Capital Path
                  </Label>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Scale through investment and capital
                  </p>
                </div>
              </div>
            </RadioGroup>
            {scalingPath.selectedPath && (
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  {getScalingPathDescription(scalingPath.selectedPath)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {scalingPath.selectedPath === "systems" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SOPs (Standard Operating Procedures)</CardTitle>
                <CardDescription>
                  Document every repeatable process in your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {scalingPath.systems.sopList.map((sop, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`SOP ${index + 1}: e.g., Customer onboarding process, Sales call script...`}
                      value={sop}
                      onChange={(e) => updateSOP(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeSOP(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addSOP}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add SOP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automation Opportunities</CardTitle>
                <CardDescription>
                  Identify tasks that can be automated
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {scalingPath.systems.automation.map((automation, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Automation ${index + 1}: e.g., Email sequences, lead scoring, reporting...`}
                      value={automation}
                      onChange={(e) => updateAutomation(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeAutomation(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addAutomation}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Automation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delegation Opportunities</CardTitle>
                <CardDescription>
                  Tasks you can delegate to free up your time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {scalingPath.systems.delegation.map((delegation, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Delegation ${index + 1}: e.g., Social media, customer support, data entry...`}
                      value={delegation}
                      onChange={(e) => updateDelegation(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeDelegation(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addDelegation}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Delegation
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {scalingPath.selectedPath === "people" && (
          <Card>
            <CardHeader>
              <CardTitle>Hiring Roadmap</CardTitle>
              <CardDescription>
                Plan your team expansion with clear roles and responsibilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {scalingPath.hiring.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <Input
                        placeholder="Role name: e.g., Sales Manager, Operations Coordinator..."
                        value={role.role}
                        onChange={(e) => updateRole(roleIndex, "role", e.target.value)}
                        className="font-semibold"
                      />
                      <div className="flex items-center gap-2">
                        <Label>Priority:</Label>
                        <Input
                          type="number"
                          min="1"
                          value={role.priority}
                          onChange={(e) => updateRole(roleIndex, "priority", parseInt(e.target.value) || 1)}
                          className="w-20"
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeRole(roleIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Responsibilities</Label>
                    {role.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex gap-2">
                        <Input
                          placeholder={`Responsibility ${respIndex + 1}...`}
                          value={resp}
                          onChange={(e) => updateResponsibility(roleIndex, respIndex, e.target.value)}
                        />
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => removeResponsibility(roleIndex, respIndex)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addResponsibility(roleIndex)}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Responsibility
                    </Button>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addRole}>
                <Plus className="mr-2 h-4 w-4" />
                Add Role
              </Button>
            </CardContent>
          </Card>
        )}

        {scalingPath.selectedPath === "capital" && (
          <Card>
            <CardHeader>
              <CardTitle>Capital Investment Plan</CardTitle>
              <CardDescription>
                Plan how you'll use capital to scale
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                <h3 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
                  Capital Scaling Areas:
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>Technology & Infrastructure</li>
                  <li>Marketing & Customer Acquisition</li>
                  <li>Inventory & Supply Chain</li>
                  <li>Facilities & Equipment</li>
                  <li>Strategic Acquisitions</li>
                  <li>Research & Development</li>
                </ul>
              </div>
              <Textarea
                placeholder="Document your capital investment strategy: What will you invest in? How much? What's the expected ROI? Timeline?"
                rows={8}
              />
            </CardContent>
          </Card>
        )}

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/retention">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/hormozi/ice-prioritization">
            <Button>Next: ICE Prioritization →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

