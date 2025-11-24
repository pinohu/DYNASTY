"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Schema definition
const intakeSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Invalid email address"),
  primaryInterest: z.enum(["tax", "wealth", "real_estate", "notary"]),
  // Upsell fields
  hasWealthPlan: z.enum(["yes", "no"]).optional(),
  investableAssets: z.string().optional(),
  interestedInRealEstate: z.enum(["yes", "no"]).optional(),
});

type IntakeData = z.infer<typeof intakeSchema>;

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [upsellPath, setUpsellPath] = useState<"none" | "wealth" | "real_estate">("none");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IntakeData>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      primaryInterest: "tax"
    }
  });

  const primaryInterest = watch("primaryInterest");

  const onSubmit = async (data: IntakeData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('clients')
        .insert([
          { 
            first_name: data.firstName,
            email: data.email,
            primary_interest: data.primaryInterest,
            has_wealth_plan: data.hasWealthPlan === 'yes',
            investable_assets: data.investableAssets,
            interested_in_real_estate: data.interestedInRealEstate === 'yes',
            // Flag as lead initially
            status: 'lead',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      // Trigger notification webhook
      await fetch('/api/webhooks/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      setStep(4); // Success
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("There was a problem submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
        // Logic to determine upsell path based on primary interest
        if (primaryInterest === "tax") setUpsellPath("wealth");
        else if (primaryInterest === "wealth") setUpsellPath("real_estate");
        else setUpsellPath("wealth"); // Default fallback
    }
    setStep(s => s + 1);
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Client Intake</h1>
        <p className="text-muted-foreground">Let's build your wealth architecture.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Basic Info & Interest */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 1: The Basics</CardTitle>
              <CardDescription>Tell us a bit about yourself and what you need help with today.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...register("firstName")} placeholder="Jane" />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} placeholder="jane@example.com" />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>What is your primary need today?</Label>
                <RadioGroup 
                    defaultValue="tax" 
                    onValueChange={(val) => setValue("primaryInterest", val as any)}
                    className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="tax" id="tax" className="peer sr-only" />
                    <Label htmlFor="tax" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <span className="font-semibold">Tax Prep / Strategy</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="wealth" id="wealth" className="peer sr-only" />
                    <Label htmlFor="wealth" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <span className="font-semibold">Financial Planning</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="real_estate" id="real_estate" className="peer sr-only" />
                    <Label htmlFor="real_estate" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <span className="font-semibold">Real Estate / Loans</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="notary" id="notary" className="peer sr-only" />
                    <Label htmlFor="notary" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <span className="font-semibold">Notary / RON</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={nextStep} className="w-full">Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: The Wealth Upsell (Contextual) */}
        {step === 2 && upsellPath === "wealth" && (
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Financial Health</CardTitle>
              <CardDescription>
                 Since you're interested in Tax, we often find that tax strategy is useless without a financial plan.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Do you currently have a comprehensive written financial plan?</Label>
                 <Select onValueChange={(val) => setValue("hasWealthPlan", val as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, and I love it</SelectItem>
                    <SelectItem value="no">No, I just wing it</SelectItem>
                    <SelectItem value="maybe">I have an advisor, but no real plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                 <Label>Roughly, what are your investable assets?</Label>
                 <Select onValueChange={(val) => setValue("investableAssets", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50k">$0 - $50k</SelectItem>
                    <SelectItem value="50k-250k">$50k - $250k</SelectItem>
                    <SelectItem value="250k-1m">$250k - $1M</SelectItem>
                    <SelectItem value="1m+">$1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button type="button" onClick={nextStep} className="w-full">Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: The Real Estate Upsell (Contextual) */}
        {step === 2 && upsellPath === "real_estate" && (
           <Card>
            <CardHeader>
              <CardTitle>Step 2: Asset Strategy</CardTitle>
              <CardDescription>
                 Real Estate is often the best vehicle for tax-advantaged wealth.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Are you interested in using Real Estate to reduce your taxes?</Label>
                 <RadioGroup onValueChange={(val) => setValue("interestedInRealEstate", val as any)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="re-yes" />
                    <Label htmlFor="re-yes">Yes, tell me more about REPS/Cost Seg</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="re-no" />
                    <Label htmlFor="re-no">No, just standard planning</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button type="button" onClick={nextStep} className="w-full">Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Final Review / Call to Action */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Confirmation</CardTitle>
              <CardDescription>You're all set. Ready to submit?</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Summary:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Name: {watch("firstName")}</li>
                    <li>Interest: {watch("primaryInterest").toUpperCase()}</li>
                    {watch("hasWealthPlan") === "no" && (
                        <li className="text-green-600 font-medium">+ Flagged for Wealth Plan Consultation</li>
                    )}
                  </ul>
               </div>
               {submitError && (
                 <div className="mt-4 p-4 text-sm text-red-500 bg-red-50 rounded-md">
                   {submitError}
                 </div>
               )}
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button type="button" variant="ghost" onClick={() => setStep(2)} disabled={isSubmitting}>Back</Button>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
            <div className="text-center py-10">
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Application Received</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    We have received your intake form. Based on your answers, we have recommended the <strong>{watch("hasWealthPlan") === "no" ? "Comprehensive Wealth Plan" : "Standard Tax Review"}</strong>.
                </p>
                <Button onClick={() => window.location.href = "/"}>Return Home</Button>
            </div>
        )}
      </form>
    </div>
  );
}
