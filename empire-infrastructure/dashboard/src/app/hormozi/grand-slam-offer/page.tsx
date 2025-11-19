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
import { ArrowLeft, Target, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GrandSlamOfferPage() {
  const { businessData, grandSlamOffer, setBusinessData, setGrandSlamOffer } = useHormoziStore();
  const [activeTab, setActiveTab] = useState("diagnose");

  const generateValueEquation = () => {
    const { dreamOutcome, perceivedLikelihood, timeDelay, effortSacrifice } =
      grandSlamOffer.valueEquation;

    if (!dreamOutcome || !perceivedLikelihood || !timeDelay || !effortSacrifice) {
      return "Complete all Value Equation fields to generate analysis";
    }

    return `Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)

Your Current Offer Analysis:
- Dream Outcome: ${dreamOutcome}
- Perceived Likelihood: ${perceivedLikelihood}
- Time Delay: ${timeDelay}
- Effort & Sacrifice: ${effortSacrifice}

To increase value, you must:
1. INCREASE Dream Outcome: Make the outcome more desirable
2. INCREASE Perceived Likelihood: Add proof, guarantees, testimonials
3. DECREASE Time Delay: Deliver faster results
4. DECREASE Effort & Sacrifice: Make it easier, remove friction`;
  };

  const generateSuperiorOffer = () => {
    if (!grandSlamOffer.currentOffer) {
      return "Enter your current offer first";
    }

    return `SUPERIOR OFFER FRAMEWORK:

1. INCREASE DREAM OUTCOME:
   - Add specific, measurable results
   - Include emotional transformation
   - Show the "after" state clearly
   - Add social proof of outcomes

2. INCREASE PERCEIVED LIKELIHOOD:
   - Add guarantee (money-back, results, or risk-reversal)
   - Include case studies with specific numbers
   - Show testimonials with names and photos
   - Add certifications or credentials
   - Include "done-for-you" elements

3. DECREASE TIME DELAY:
   - Offer immediate value (bonus, quick win)
   - Show fast-track option
   - Provide instant access to resources
   - Set clear timeline expectations

4. DECREASE EFFORT & SACRIFICE:
   - Remove all friction points
   - Offer payment plans
   - Include support and hand-holding
   - Make it "done-for-you" where possible
   - Bundle everything needed

SUPERIOR OFFER EXAMPLE:
"${grandSlamOffer.currentOffer}" becomes:

"[Dream Outcome] in [Timeframe] - Guaranteed. 
We'll [specific action] so you can [specific result]. 
Includes [3-5 specific deliverables] + [bonus] + [support].
If you don't [specific outcome] within [timeframe], 
we'll [guarantee action]. 
Get started for just [price] with [payment plan option]."`;
  };

  const generateMAGICName = () => {
    const { dreamOutcome } = grandSlamOffer.valueEquation;
    if (!dreamOutcome) {
      return "Enter Dream Outcome to generate MAGIC name";
    }

    const magicElements = {
      M: "Measurable - Include numbers, percentages, or specific metrics",
      A: "Aspirational - Connect to the dream outcome",
      G: "Guaranteed - Include risk-reversal language",
      I: "Immediate - Show speed or instant value",
      C: "Clear - Easy to understand in 5 seconds",
    };

    const outcomeKeywords = dreamOutcome
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 4)
      .slice(0, 3);

    const nameSuggestions = [
      `The ${outcomeKeywords[0] || "Results"} Accelerator`,
      `${outcomeKeywords[0] || "Success"} Guarantee Program`,
      `Fast-Track to ${outcomeKeywords[0] || "Results"}`,
      `The ${outcomeKeywords[0] || "Complete"} System`,
    ];

    return `MAGIC FORMULA BREAKDOWN:

${Object.entries(magicElements)
  .map(([letter, meaning]) => `${letter} = ${meaning}`)
  .join("\n")}

NAME SUGGESTIONS:
${nameSuggestions.map((name, i) => `${i + 1}. ${name}`).join("\n")}

Choose a name that:
- Can be understood in 5 seconds
- Includes the outcome or benefit
- Feels aspirational
- Implies speed or guarantee`;
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
            Grand Slam Offer Audit
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Diagnose and rewrite your offer using the Value Equation and MAGIC Formula
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="diagnose">Diagnose</TabsTrigger>
            <TabsTrigger value="value">Value Equation</TabsTrigger>
            <TabsTrigger value="superior">Superior Offer</TabsTrigger>
            <TabsTrigger value="magic">MAGIC Name</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnose" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Step 1: Diagnose Your Current Offer
                </CardTitle>
                <CardDescription>
                  Start by documenting your current offer exactly as it exists today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-offer">Current Offer (Write it exactly as you present it)</Label>
                  <Textarea
                    id="current-offer"
                    placeholder="Example: 'We offer business consulting services to help you grow your revenue...'"
                    value={grandSlamOffer.currentOffer}
                    onChange={(e) =>
                      setGrandSlamOffer({ currentOffer: e.target.value })
                    }
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., SaaS, E-commerce, Consulting"
                    value={businessData.industry}
                    onChange={(e) =>
                      setBusinessData({ industry: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-market">Target Market</Label>
                  <Input
                    id="target-market"
                    placeholder="e.g., Small business owners, $500K-$2M revenue"
                    value={businessData.targetMarket}
                    onChange={(e) =>
                      setBusinessData({ targetMarket: e.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="value" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Step 2: Value Equation Analysis
                </CardTitle>
                <CardDescription>
                  Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dream-outcome">
                    Dream Outcome (What is the ideal result your customer wants?)
                  </Label>
                  <Textarea
                    id="dream-outcome"
                    placeholder="e.g., 'Double revenue in 90 days while working less'"
                    value={grandSlamOffer.valueEquation.dreamOutcome}
                    onChange={(e) =>
                      setGrandSlamOffer({
                        valueEquation: {
                          ...grandSlamOffer.valueEquation,
                          dreamOutcome: e.target.value,
                        },
                      })
                    }
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="perceived-likelihood">
                    Perceived Likelihood (How likely do they think it is to happen?)
                  </Label>
                  <Textarea
                    id="perceived-likelihood"
                    placeholder="e.g., '50% - they're skeptical because they've tried before'"
                    value={grandSlamOffer.valueEquation.perceivedLikelihood}
                    onChange={(e) =>
                      setGrandSlamOffer({
                        valueEquation: {
                          ...grandSlamOffer.valueEquation,
                          perceivedLikelihood: e.target.value,
                        },
                      })
                    }
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-delay">
                    Time Delay (How long until they see results?)
                  </Label>
                  <Textarea
                    id="time-delay"
                    placeholder="e.g., '6-12 months - too long, they want faster'"
                    value={grandSlamOffer.valueEquation.timeDelay}
                    onChange={(e) =>
                      setGrandSlamOffer({
                        valueEquation: {
                          ...grandSlamOffer.valueEquation,
                          timeDelay: e.target.value,
                        },
                      })
                    }
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="effort-sacrifice">
                    Effort & Sacrifice (What do they have to give up or do?)
                  </Label>
                  <Textarea
                    id="effort-sacrifice"
                    placeholder="e.g., 'High - requires 20 hours/week, learning new systems'"
                    value={grandSlamOffer.valueEquation.effortSacrifice}
                    onChange={(e) =>
                      setGrandSlamOffer({
                        valueEquation: {
                          ...grandSlamOffer.valueEquation,
                          effortSacrifice: e.target.value,
                        },
                      })
                    }
                    rows={3}
                  />
                </div>
                <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                  <h3 className="mb-2 font-semibold">Value Equation Analysis:</h3>
                  <pre className="whitespace-pre-wrap text-sm">
                    {generateValueEquation()}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="superior" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Step 3: Build Your Superior Offer
                </CardTitle>
                <CardDescription>
                  Rewrite your offer using the Value Equation principles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                    Superior Offer Framework:
                  </h3>
                  <pre className="whitespace-pre-wrap text-sm text-blue-800 dark:text-blue-200">
                    {generateSuperiorOffer()}
                  </pre>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="superior-offer">Your Superior Offer (Write it here)</Label>
                  <Textarea
                    id="superior-offer"
                    placeholder="Write your rewritten offer using the framework above..."
                    value={grandSlamOffer.superiorOffer}
                    onChange={(e) =>
                      setGrandSlamOffer({ superiorOffer: e.target.value })
                    }
                    rows={8}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="magic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Step 4: Create MAGIC Name
                </CardTitle>
                <CardDescription>
                  M = Measurable | A = Aspirational | G = Guaranteed | I = Immediate | C = Clear
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                  <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
                    MAGIC Name Generator:
                  </h3>
                  <pre className="whitespace-pre-wrap text-sm text-purple-800 dark:text-purple-200">
                    {generateMAGICName()}
                  </pre>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="magic-name">Your MAGIC Offer Name</Label>
                  <Input
                    id="magic-name"
                    placeholder="e.g., 'The Revenue Doubling Guarantee System'"
                    value={grandSlamOffer.magicName}
                    onChange={(e) =>
                      setGrandSlamOffer({ magicName: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                  <Badge variant="outline">M</Badge>
                  <span className="text-sm">Measurable - Has numbers or specific metrics</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                  <Badge variant="outline">A</Badge>
                  <span className="text-sm">Aspirational - Connects to dream outcome</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                  <Badge variant="outline">G</Badge>
                  <span className="text-sm">Guaranteed - Includes risk-reversal</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                  <Badge variant="outline">I</Badge>
                  <span className="text-sm">Immediate - Shows speed or instant value</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                  <Badge variant="outline">C</Badge>
                  <span className="text-sm">Clear - Understood in 5 seconds</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/lead-generation">
            <Button>Next: Lead Generation →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

