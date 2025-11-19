"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Plus, X } from "lucide-react";
import Link from "next/link";

export default function SalesProcessPage() {
  const { salesProcess, setSalesProcess } = useHormoziStore();

  const addItem = (field: "clarifyingQuestions" | "painLabels" | "reinforcement") => {
    setSalesProcess({
      [field]: [...salesProcess[field], ""],
    });
  };

  const updateItem = (
    field: "clarifyingQuestions" | "painLabels" | "reinforcement",
    index: number,
    value: string
  ) => {
    const newItems = [...salesProcess[field]];
    newItems[index] = value;
    setSalesProcess({
      [field]: newItems,
    });
  };

  const removeItem = (
    field: "clarifyingQuestions" | "painLabels" | "reinforcement",
    index: number
  ) => {
    setSalesProcess({
      [field]: salesProcess[field].filter((_, i) => i !== index),
    });
  };

  const addObjection = () => {
    setSalesProcess({
      objections: [...salesProcess.objections, { objection: "", response: "" }],
    });
  };

  const updateObjection = (index: number, field: "objection" | "response", value: string) => {
    const newObjections = [...salesProcess.objections];
    newObjections[index] = { ...newObjections[index], [field]: value };
    setSalesProcess({ objections: newObjections });
  };

  const removeObjection = (index: number) => {
    setSalesProcess({
      objections: salesProcess.objections.filter((_, i) => i !== index),
    });
  };

  const generateCLOSERScript = () => {
    return `C.L.O.S.E.R SALES SCRIPT FOR EMPIRE DYNASTY

C - CLARIFY (Understanding)
${salesProcess.clarifyingQuestions
  .map((q, i) => `${i + 1}. ${q || "[Add clarifying question]"}`)
  .join("\n")}

L - LABEL (Pain Points)
${salesProcess.painLabels
  .map((p, i) => `${i + 1}. ${p || "[Add pain label]"}`)
  .join("\n")}

O - OUTCOME (Dream State)
"What would it look like if [their dream outcome]? How would that change your [specific area]?"

S - SOLUTION (Your Offer)
"Based on what you've told me, here's exactly how we can help you [achieve outcome]..."

E - EVIDENCE (Proof)
- Case studies with specific numbers
- Testimonials with names and results
- Guarantees and risk-reversals

R - REINFORCEMENT (Close)
${salesProcess.reinforcement
  .map((r, i) => `${i + 1}. ${r || "[Add reinforcement statement]"}`)
  .join("\n")}

OBJECTION HANDLING:
${salesProcess.objections
  .map(
    (o, i) => `
Objection ${i + 1}: "${o.objection || "[Add objection]"}"
Response: "${o.response || "[Add response]"}"
`
  )
  .join("\n")}

FULL SCRIPT:
${salesProcess.closerScript || "[Write your complete C.L.O.S.E.R script here]"}
`;
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
            C.L.O.S.E.R Sales Process
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Build your complete sales script with questions, pain labels, and objection handling
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                C - Clarify: Understanding Questions
              </CardTitle>
              <CardDescription>
                Questions to understand their situation, goals, and challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {salesProcess.clarifyingQuestions.map((question, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Question ${index + 1}: e.g., "What's your biggest challenge right now?"`}
                    value={question}
                    onChange={(e) => updateItem("clarifyingQuestions", index, e.target.value)}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem("clarifyingQuestions", index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addItem("clarifyingQuestions")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>L - Label: Pain Points</CardTitle>
              <CardDescription>
                Statements that label and validate their pain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {salesProcess.painLabels.map((label, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Pain Label ${index + 1}: e.g., "It sounds like you're frustrated with..."`}
                    value={label}
                    onChange={(e) => updateItem("painLabels", index, e.target.value)}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem("painLabels", index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addItem("painLabels")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Pain Label
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O - Outcome: Dream State</CardTitle>
              <CardDescription>
                Questions that paint the picture of their ideal outcome
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Example Questions:</strong>
                  <br />
                  "What would it look like if you [achieved their goal]?"
                  <br />
                  "How would that change your [specific area of life/business]?"
                  <br />
                  "What would be different if this problem was solved?"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>S - Solution: Your Offer</CardTitle>
              <CardDescription>
                How you present your solution based on what you learned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Template:</strong>
                  <br />
                  "Based on what you've told me, here's exactly how we can help you [achieve
                  outcome]. We'll [specific action] so you can [specific result]. This includes
                  [3-5 deliverables] and [support/guarantee]."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E - Evidence: Proof</CardTitle>
              <CardDescription>
                Social proof, case studies, testimonials, guarantees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Case Studies</Badge>
                <Badge variant="outline">Testimonials</Badge>
                <Badge variant="outline">Guarantees</Badge>
                <Badge variant="outline">Results/Stats</Badge>
                <Badge variant="outline">Credentials</Badge>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                List your best proof points here. Include specific numbers, names, and results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>R - Reinforcement: Closing Statements</CardTitle>
              <CardDescription>
                Statements that reinforce the decision and move toward closing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {salesProcess.reinforcement.map((statement, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Reinforcement ${index + 1}: e.g., "This is exactly what you need to..."`}
                    value={statement}
                    onChange={(e) => updateItem("reinforcement", index, e.target.value)}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem("reinforcement", index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addItem("reinforcement")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Reinforcement
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objection Handling</CardTitle>
              <CardDescription>
                Prepare responses for common objections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {salesProcess.objections.map((obj, index) => (
                <div key={index} className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <Label>Objection {index + 1}</Label>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeObjection(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <Input
                    placeholder="e.g., 'It's too expensive'"
                    value={obj.objection}
                    onChange={(e) => updateObjection(index, "objection", e.target.value)}
                  />
                  <Textarea
                    placeholder="Your response to this objection..."
                    value={obj.response}
                    onChange={(e) => updateObjection(index, "response", e.target.value)}
                    rows={3}
                  />
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addObjection}>
                <Plus className="mr-2 h-4 w-4" />
                Add Objection
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complete C.L.O.S.E.R Script</CardTitle>
              <CardDescription>
                Write your full sales script incorporating all elements above
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your complete sales script here, incorporating all C.L.O.S.E.R elements..."
                value={salesProcess.closerScript}
                onChange={(e) => setSalesProcess({ closerScript: e.target.value })}
                rows={12}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generated C.L.O.S.E.R Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap rounded-lg bg-slate-100 p-4 text-sm dark:bg-slate-800">
                {generateCLOSERScript()}
              </pre>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/lead-generation">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/hormozi/retention">
            <Button>Next: 4Rs Retention →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

