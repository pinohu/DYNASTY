"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; // Need to check if this exists
import { CheckCircle2, AlertTriangle, FileText, BrainCircuit } from "lucide-react";

export function MockAnalysis({ triggerLabel = "Run AI Scan" }: { triggerLabel?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<'idle' | 'scanning' | 'analyzing' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state === 'scanning') {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setState('analyzing');
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }

    if (state === 'analyzing') {
        const timeout = setTimeout(() => {
            setState('complete');
        }, 1500);
        return () => clearTimeout(timeout);
    }
  }, [state]);

  const startScan = () => {
    setState('scanning');
    setProgress(0);
  };

  const reset = () => {
      setIsOpen(false);
      setTimeout(() => setState('idle'), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="w-full mt-2 gap-2">
            <BrainCircuit className="h-4 w-4" />
            {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Empire AI Tax Analyzer</DialogTitle>
          <DialogDescription>
            Scanning uploaded documents for missed deductions and compliance risks.
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
            {state === 'idle' && (
                <div className="text-center space-y-4">
                    <div className="border-2 border-dashed rounded-lg p-8 bg-muted/50">
                        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Upload 1040 / P&L / Bank Statements</p>
                    </div>
                    <Button onClick={startScan} className="w-full">Simulate Upload & Scan</Button>
                </div>
            )}

            {(state === 'scanning' || state === 'analyzing') && (
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                            <span>{state === 'scanning' ? 'Extracting Data (OCR)...' : 'Analyzing Strategies...'}</span>
                            <span>{progress}%</span>
                        </div>
                        {/* Fallback for Progress component if not exists: using simple div */}
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary transition-all duration-100" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                        {progress > 20 && <div>[OCR] Form 1040 found...</div>}
                        {progress > 45 && <div>[OCR] Schedule C detected...</div>}
                        {progress > 70 && <div>[AI] Cross-referencing Augusta Rule...</div>}
                        {progress > 90 && <div>[AI] Calculating potential savings...</div>}
                    </div>
                </div>
            )}

            {state === 'complete' && (
                <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-green-900">Scan Complete</h4>
                            <p className="text-sm text-green-700">No compliance flags found.</p>
                        </div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-amber-900">Opportunity Detected</h4>
                            <p className="text-sm text-amber-700 mb-2">Potential savings identified: <strong>$4,200 - $7,500</strong></p>
                            <ul className="list-disc list-inside text-xs text-amber-800 space-y-1">
                                <li>Home Office Deduction missed</li>
                                <li>Entity Classification (S-Corp)</li>
                            </ul>
                        </div>
                    </div>

                    <Button className="w-full" onClick={reset}>Unlock Full Report</Button>
                </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}



