import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Zap } from "lucide-react";
import { serviceCatalog, ServiceItem } from "@/config/services";
import { MockAnalysis } from "@/components/mock-analysis";

export default function ServicesMenu() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">The Polymath Service Catalog</h1>
        <p className="text-xl text-muted-foreground">Wealth Engineering for the Modern Sovereign</p>
      </div>

      <Tabs defaultValue={serviceCatalog[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {serviceCatalog.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceCatalog.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <ServiceCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ServiceCard({ title, price, description, features, time, automation, highlight = false }: ServiceItem) {
  return (
    <Card className={`flex flex-col ${highlight ? 'border-primary shadow-lg relative' : ''}`}>
      {highlight && <Badge className="absolute -top-3 right-4">Recommended</Badge>}
      <CardHeader>
        <CardTitle className="flex justify-between items-start gap-2">
            <span>{title}</span>
        </CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">{price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm">
             <Clock className="h-4 w-4 text-muted-foreground" />
             <span className="text-muted-foreground">Your Time: <span className="font-medium text-foreground">{time}</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm">
             <Zap className="h-4 w-4 text-muted-foreground" />
             <span className="text-muted-foreground">Automation: <span className="font-medium text-foreground">{automation}</span></span>
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t">
            {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>
        
        <Button className={`w-full mt-4 ${highlight ? '' : 'variant-outline'}`}>Get Started</Button>
        
        {/* Mock Analysis Trigger for Tax/Wealth items */}
        {automation.includes("AI") || automation.includes("Algo") ? (
             <MockAnalysis triggerLabel={`Demo ${automation}`} />
        ) : null}
      </CardContent>
    </Card>
  );
}
