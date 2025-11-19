"use client";

import { useState } from "react";
import { useHormoziStore } from "@/lib/hormozi-store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle2, Star, Users, Repeat, Plus, X } from "lucide-react";
import Link from "next/link";

export default function RetentionPage() {
  const { retentionSystem, setRetentionSystem } = useHormoziStore();
  const [activeTab, setActiveTab] = useState("retention");

  const addItem = (
    category: "retention" | "reviews" | "referrals" | "resells",
    subField: string,
    value: string
  ) => {
    if (category === "retention") {
      const field = subField as keyof typeof retentionSystem.retention;
      setRetentionSystem({
        retention: {
          ...retentionSystem.retention,
          [field]: [...retentionSystem.retention[field], value],
        },
      });
    } else if (category === "reviews") {
      const field = subField as keyof typeof retentionSystem.reviews;
      if (field === "strategy") {
        setRetentionSystem({
          reviews: { ...retentionSystem.reviews, strategy: value },
        });
      } else {
        const arrField = field as "timing" | "incentives";
        setRetentionSystem({
          reviews: {
            ...retentionSystem.reviews,
            [arrField]: [...retentionSystem.reviews[arrField], value],
          },
        });
      }
    } else if (category === "referrals") {
      const field = subField as keyof typeof retentionSystem.referrals;
      if (field === "strategy") {
        setRetentionSystem({
          referrals: { ...retentionSystem.referrals, strategy: value },
        });
      } else {
        const arrField = field as "incentives" | "process";
        setRetentionSystem({
          referrals: {
            ...retentionSystem.referrals,
            [arrField]: [...retentionSystem.referrals[arrField], value],
          },
        });
      }
    } else if (category === "resells") {
      const field = subField as keyof typeof retentionSystem.resells;
      const arrField = field as "upsells" | "crossSells" | "timing";
      setRetentionSystem({
        resells: {
          ...retentionSystem.resells,
          [arrField]: [...retentionSystem.resells[arrField], value],
        },
      });
    }
  };

  const updateItem = (
    category: "retention" | "reviews" | "referrals" | "resells",
    subField: string,
    index: number,
    value: string
  ) => {
    if (category === "retention") {
      const field = subField as keyof typeof retentionSystem.retention;
      const newItems = [...retentionSystem.retention[field]];
      newItems[index] = value;
      setRetentionSystem({
        retention: {
          ...retentionSystem.retention,
          [field]: newItems,
        },
      });
    } else if (category === "reviews") {
      const arrField = subField as "timing" | "incentives";
      const newItems = [...retentionSystem.reviews[arrField]];
      newItems[index] = value;
      setRetentionSystem({
        reviews: {
          ...retentionSystem.reviews,
          [arrField]: newItems,
        },
      });
    } else if (category === "referrals") {
      const arrField = subField as "incentives" | "process";
      const newItems = [...retentionSystem.referrals[arrField]];
      newItems[index] = value;
      setRetentionSystem({
        referrals: {
          ...retentionSystem.referrals,
          [arrField]: newItems,
        },
      });
    } else if (category === "resells") {
      const arrField = subField as "upsells" | "crossSells" | "timing";
      const newItems = [...retentionSystem.resells[arrField]];
      newItems[index] = value;
      setRetentionSystem({
        resells: {
          ...retentionSystem.resells,
          [arrField]: newItems,
        },
      });
    }
  };

  const removeItem = (
    category: "retention" | "reviews" | "referrals" | "resells",
    subField: string,
    index: number
  ) => {
    if (category === "retention") {
      const field = subField as keyof typeof retentionSystem.retention;
      setRetentionSystem({
        retention: {
          ...retentionSystem.retention,
          [field]: retentionSystem.retention[field].filter((_, i) => i !== index),
        },
      });
    } else if (category === "reviews") {
      const arrField = subField as "timing" | "incentives";
      setRetentionSystem({
        reviews: {
          ...retentionSystem.reviews,
          [arrField]: retentionSystem.reviews[arrField].filter((_, i) => i !== index),
        },
      });
    } else if (category === "referrals") {
      const arrField = subField as "incentives" | "process";
      setRetentionSystem({
        referrals: {
          ...retentionSystem.referrals,
          [arrField]: retentionSystem.referrals[arrField].filter((_, i) => i !== index),
        },
      });
    } else if (category === "resells") {
      const arrField = subField as "upsells" | "crossSells" | "timing";
      setRetentionSystem({
        resells: {
          ...retentionSystem.resells,
          [arrField]: retentionSystem.resells[arrField].filter((_, i) => i !== index),
        },
      });
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
            4Rs Retention System
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Retention, Reviews, Referrals, and Resells framework
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="retention">Retention</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
            <TabsTrigger value="resells">Resells</TabsTrigger>
          </TabsList>

          <TabsContent value="retention" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Retention: Keep Customers
                </CardTitle>
                <CardDescription>
                  Systems to keep customers engaged and satisfied
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Onboarding Steps</Label>
                  {retentionSystem.retention.onboarding.map((step, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Step ${index + 1}: e.g., Welcome email, setup call, first deliverable...`}
                        value={step}
                        onChange={(e) => updateItem("retention", "onboarding", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("retention", "onboarding", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("retention", "onboarding", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Onboarding Step
                  </Button>
                </div>

                <div className="space-y-4">
                  <Label>Check-In Schedule</Label>
                  {retentionSystem.retention.checkIns.map((checkIn, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Check-in ${index + 1}: e.g., Day 7, Day 30, Day 90...`}
                        value={checkIn}
                        onChange={(e) => updateItem("retention", "checkIns", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("retention", "checkIns", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("retention", "checkIns", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Check-In
                  </Button>
                </div>

                <div className="space-y-4">
                  <Label>Value Delivery Points</Label>
                  {retentionSystem.retention.valueDelivery.map((value, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Value ${index + 1}: e.g., Monthly report, bonus content, exclusive access...`}
                        value={value}
                        onChange={(e) => updateItem("retention", "valueDelivery", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("retention", "valueDelivery", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("retention", "valueDelivery", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Value Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Reviews: Get Testimonials
                </CardTitle>
                <CardDescription>
                  System to collect and leverage customer reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Review Collection Strategy</Label>
                  <Textarea
                    placeholder="How will you ask for reviews? When? What platform?"
                    value={retentionSystem.reviews.strategy}
                    onChange={(e) =>
                      setRetentionSystem({
                        reviews: { ...retentionSystem.reviews, strategy: e.target.value },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-4">
                  <Label>Timing (When to Ask)</Label>
                  {retentionSystem.reviews.timing.map((time, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Timing ${index + 1}: e.g., Immediately after success, Day 30, etc.`}
                        value={time}
                        onChange={(e) => updateItem("reviews", "timing", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("reviews", "timing", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("reviews", "timing", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Timing
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label>Incentives</Label>
                  {retentionSystem.reviews.incentives.map((incentive, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Incentive ${index + 1}: e.g., Discount, bonus, entry into contest...`}
                        value={incentive}
                        onChange={(e) => updateItem("reviews", "incentives", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("reviews", "incentives", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("reviews", "incentives", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Incentive
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Referrals: Get New Customers
                </CardTitle>
                <CardDescription>
                  System to turn customers into advocates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Referral Strategy</Label>
                  <Textarea
                    placeholder="How will you encourage referrals? What's the process?"
                    value={retentionSystem.referrals.strategy}
                    onChange={(e) =>
                      setRetentionSystem({
                        referrals: { ...retentionSystem.referrals, strategy: e.target.value },
                      })
                    }
                    rows={4}
                  />
                </div>
                <div className="space-y-4">
                  <Label>Referral Incentives</Label>
                  {retentionSystem.referrals.incentives.map((incentive, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Incentive ${index + 1}: e.g., $100 credit, 20% off, free month...`}
                        value={incentive}
                        onChange={(e) => updateItem("referrals", "incentives", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("referrals", "incentives", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("referrals", "incentives", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Incentive
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label>Referral Process Steps</Label>
                  {retentionSystem.referrals.process.map((step, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Step ${index + 1}: e.g., Ask at Day 30, provide referral link, track referrals...`}
                        value={step}
                        onChange={(e) => updateItem("referrals", "process", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("referrals", "process", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("referrals", "process", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Process Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resells" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Repeat className="h-5 w-5" />
                  Resells: Increase Customer Value
                </CardTitle>
                <CardDescription>
                  Upsells, cross-sells, and additional purchases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Label>Upsell Opportunities</Label>
                  {retentionSystem.resells.upsells.map((upsell, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Upsell ${index + 1}: e.g., Premium tier, add-on service, extended support...`}
                        value={upsell}
                        onChange={(e) => updateItem("resells", "upsells", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("resells", "upsells", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("resells", "upsells", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Upsell
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label>Cross-Sell Opportunities</Label>
                  {retentionSystem.resells.crossSells.map((crossSell, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Cross-sell ${index + 1}: e.g., Related product, complementary service...`}
                        value={crossSell}
                        onChange={(e) => updateItem("resells", "crossSells", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("resells", "crossSells", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("resells", "crossSells", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Cross-Sell
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label>Timing for Resells</Label>
                  {retentionSystem.resells.timing.map((time, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Timing ${index + 1}: e.g., After first success, Day 60, renewal time...`}
                        value={time}
                        onChange={(e) => updateItem("resells", "timing", index, e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem("resells", "timing", index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addItem("resells", "timing", "")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Timing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between">
          <Link href="/hormozi/sales-process">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/hormozi/scaling">
            <Button>Next: Scaling →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

