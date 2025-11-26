export interface ServiceFeature {
  name: string;
}

export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  time: string;
  automation: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  items: ServiceItem[];
}

export const serviceCatalog: ServiceCategory[] = [
  {
    id: "tax",
    label: "Tax Authority (EA)",
    items: [
      {
        title: "Complex Tax Compliance",
        price: "$800 - $2,500+",
        description: "Audit-proof filing and missed opportunity review for Individuals and Businesses.",
        features: ["1040 / 1065 / 1120S", "Missed Savings Review", "Digital Delivery"],
        time: "30 mins (You)",
        automation: "OCR + AI Review",
      },
      {
        title: "The Tax Blueprint",
        price: "$1,500 - $5,000",
        description: "Forward-looking strategy: Entity selection, Augusta Rule, Cost Segregation.",
        features: ["Strategic Roadmap", "Entity Optimization", "Deduction Planning"],
        time: "1 hr",
        automation: "Template Engine",
        highlight: true,
      },
      {
        title: "Monthly Bookkeeping",
        price: "$300 - $1,000/mo",
        description: "Real-time financial clarity and audit-proofing for business owners.",
        features: ["Bank Feeds", "Monthly Reports", "AI Categorization"],
        time: "15 mins/mo",
        automation: "Bank Rules + AI",
      },
      {
        title: "IRS Representation",
        price: "$2,500 Retainer + Hourly",
        description: "Audit defense and protection. We shield you from the IRS.",
        features: ["Audit Defense", "Correspondence", "Peace of Mind"],
        time: "High Touch",
        automation: "Portal + Updates",
      },
      {
        title: "Offer in Compromise",
        price: "$3,000 - $5,000",
        description: "Settling tax debt for pennies on the dollar.",
        features: ["Debt Settlement", "Legal Negotiation", "Financial Analysis"],
        time: "4 hrs",
        automation: "Auto-Forms",
      },
    ],
  },
  {
    id: "wealth",
    label: "Wealth Architecture (CFP)",
    items: [
      {
        title: "The Financial Physical",
        price: "$500 - $1,000",
        description: "A quick gap analysis of your Tax, Insurance, and Investments.",
        features: ["Gap Analysis", "Risk Check", "Quick Wins"],
        time: "30 mins",
        automation: "Algo Scan",
      },
      {
        title: "Comprehensive Wealth Plan",
        price: "$2,500 - $5,000",
        description: "The Engineering Roadmap for multi-generational wealth.",
        features: ["Retirement", "Estate Coord", "Tax Strategy"],
        time: "3 hrs",
        automation: "Planning Software",
        highlight: true,
      },
      {
        title: "Assets Under Management",
        price: "1.00% AUM",
        description: "Sleep-at-night management. We handle the decisions.",
        features: ["Rebalancing", "Tax Loss Harvesting", "Reporting"],
        time: "Passive",
        automation: "Robo-Hybrid",
      },
      {
        title: "Self-Directed IRA Setup",
        price: "$2,500",
        description: "Unlock your retirement funds for Real Estate & Crypto.",
        features: ["LLC Formation", "Custodian Transfer", "Operating Agreement"],
        time: "2 hrs",
        automation: "Legal Templates",
        highlight: true,
      },
      {
        title: "Mega Backdoor Roth",
        price: "$1,500",
        description: "Structure your Solo 401k to stuff $69k/year into Roth.",
        features: ["Plan Design", "Conversion Forms", "Contribution Math"],
        time: "1 hr",
        automation: "Calc Engine",
      },
      {
        title: "Cost Segregation Study",
        price: "$3,000 - $7,000",
        description: "Accelerate depreciation to wipe out tax on Real Estate income.",
        features: ["Engineering Report", "Form 3115", "Audit Defense"],
        time: "Coordination",
        automation: "Partner API",
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate (Agent/MLO)",
    items: [
      {
        title: "Investor Representation",
        price: "2.5% - 3.0% Comm",
        description: "Access to off-market deals and ROI analysis.",
        features: ["Off-Market Deals", "ROI Analysis", "Tax Integration"],
        time: "Med (Delegated)",
        automation: "Scraping + CRM",
      },
      {
        title: "Mortgage Origination",
        price: "1.0% - 2.75% Comm",
        description: "Structuring complex debt (DSCR, Non-QM) for investors.",
        features: ["DSCR Loans", "Creative Finance", "Fast Closing"],
        time: "2 hrs",
        automation: "Digital App",
        highlight: true,
      },
      {
        title: "Transaction Coordination",
        price: "$350 - $500",
        description: "Paperwork Air Traffic Control. Preventing legal disasters.",
        features: ["Compliance", "Timeline Mgmt", "Doc Review"],
        time: "1 hr",
        automation: "SuiteDash Workflow",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation (Neat Circle)",
    items: [
      {
        title: "Business Systems Design",
        price: "$5k - $15k",
        description: "Designing the 'Operating System' for your business (SuiteDash + Make).",
        features: ["Process Opt", "Tech Stack", "SOP Documentation"],
        time: "Project Based",
        automation: "Consulting",
        highlight: true,
      },
      {
        title: "Automation Retainer",
        price: "$2,000/mo",
        description: "Ongoing maintenance and optimization of your workflow stack.",
        features: ["API Updates", "Error Handling", "New Feature Rollout"],
        time: "Recurring",
        automation: "Managed Service",
      },
      {
        title: "AI Workforce Deployment",
        price: "$5,000+",
        description: "Deploying custom AI agents to handle specific business tasks.",
        features: ["Custom Prompts", "Knowledge Base", "Integration"],
        time: "2 Weeks",
        automation: "AI Agents",
      },
    ],
  },
  {
    id: "trust",
    label: "Digital Trust (Notary)",
    items: [
      {
        title: "RON Loan Signing",
        price: "$75 - $150",
        description: "Convenient online notarization for real estate closings.",
        features: ["Remote Online", "Secure", "15 Mins"],
        time: "15 mins",
        automation: "BlueNotary",
      },
      {
        title: "Trust Delivery",
        price: "$150 - $250",
        description: "Finalizing Estate Plans with proper notarization.",
        features: ["Estate Docs", "Wills/Trusts", "Witnessing"],
        time: "30 mins",
        automation: "Tagged Templates",
      },
      {
        title: "Apostille Services",
        price: "$150 - $300",
        description: "Authenticating documents for international use.",
        features: ["Secretary of State", "Courier", "Expedited"],
        time: "Logistics",
        automation: "FedEx API",
      },
    ],
  },
];



