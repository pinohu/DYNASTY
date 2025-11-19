import { create } from "zustand";

interface BusinessData {
  companyName: string;
  industry: string;
  currentOffer: string;
  targetMarket: string;
  currentRevenue: string;
  teamSize: string;
}

interface GrandSlamOffer {
  currentOffer: string;
  valueEquation: {
    dreamOutcome: string;
    perceivedLikelihood: string;
    timeDelay: string;
    effortSacrifice: string;
  };
  superiorOffer: string;
  magicName: string;
}

interface LeadGeneration {
  warmOutbound: {
    strategy: string;
    scripts: string[];
    assets: string[];
  };
  coldOutbound: {
    strategy: string;
    scripts: string[];
    assets: string[];
  };
  warmContent: {
    strategy: string;
    contentPieces: string[];
    assets: string[];
  };
  coldPaidAds: {
    strategy: string;
    adCopy: string[];
    assets: string[];
  };
}

interface SalesProcess {
  closerScript: string;
  clarifyingQuestions: string[];
  painLabels: string[];
  objections: Array<{
    objection: string;
    response: string;
  }>;
  reinforcement: string[];
}

interface RetentionSystem {
  retention: {
    onboarding: string[];
    checkIns: string[];
    valueDelivery: string[];
  };
  reviews: {
    strategy: string;
    timing: string[];
    incentives: string[];
  };
  referrals: {
    strategy: string;
    incentives: string[];
    process: string[];
  };
  resells: {
    upsells: string[];
    crossSells: string[];
    timing: string[];
  };
}

interface ScalingPath {
  selectedPath: "systems" | "people" | "capital" | null;
  systems: {
    sopList: string[];
    automation: string[];
    delegation: string[];
  };
  hiring: {
    roles: Array<{
      role: string;
      priority: number;
      responsibilities: string[];
    }>;
  };
}

export interface ICEProject {
  id: string;
  name: string;
  impact: number;
  confidence: number;
  ease: number;
  score: number;
}

interface Roadmap {
  month1: {
    weeks: Array<{
      week: number;
      goals: string[];
      kpis: string[];
      tasks: string[];
    }>;
    reflection: string[];
  };
  month2: {
    weeks: Array<{
      week: number;
      goals: string[];
      kpis: string[];
      tasks: string[];
    }>;
    reflection: string[];
  };
  month3: {
    weeks: Array<{
      week: number;
      goals: string[];
      kpis: string[];
      tasks: string[];
    }>;
    reflection: string[];
  };
}

interface HormoziStore {
  businessData: BusinessData;
  grandSlamOffer: GrandSlamOffer;
  leadGeneration: LeadGeneration;
  salesProcess: SalesProcess;
  retentionSystem: RetentionSystem;
  scalingPath: ScalingPath;
  iceProjects: ICEProject[];
  roadmap: Roadmap;
  setBusinessData: (data: Partial<BusinessData>) => void;
  setGrandSlamOffer: (data: Partial<GrandSlamOffer>) => void;
  setLeadGeneration: (data: Partial<LeadGeneration>) => void;
  setSalesProcess: (data: Partial<SalesProcess>) => void;
  setRetentionSystem: (data: Partial<RetentionSystem>) => void;
  setScalingPath: (data: Partial<ScalingPath>) => void;
  setICEProjects: (projects: ICEProject[]) => void;
  setRoadmap: (data: Partial<Roadmap>) => void;
}

const defaultBusinessData: BusinessData = {
  companyName: "EMPIRE DYNASTY",
  industry: "",
  currentOffer: "",
  targetMarket: "",
  currentRevenue: "",
  teamSize: "",
};

const loadFromStorage = (): Partial<HormoziStore> => {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem("hormozi-framework-storage");
  return stored ? JSON.parse(stored) : {};
};

const saveToStorage = (state: HormoziStore) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("hormozi-framework-storage", JSON.stringify(state));
};

export const useHormoziStore = create<HormoziStore>()((set) => {
  const initialState = loadFromStorage();
  
  return {
      businessData: initialState.businessData || defaultBusinessData,
      grandSlamOffer: initialState.grandSlamOffer || {
        currentOffer: "",
        valueEquation: {
          dreamOutcome: "",
          perceivedLikelihood: "",
          timeDelay: "",
          effortSacrifice: "",
        },
        superiorOffer: "",
        magicName: "",
      },
      leadGeneration: initialState.leadGeneration || {
        warmOutbound: { strategy: "", scripts: [], assets: [] },
        coldOutbound: { strategy: "", scripts: [], assets: [] },
        warmContent: { strategy: "", contentPieces: [], assets: [] },
        coldPaidAds: { strategy: "", adCopy: [], assets: [] },
      },
      salesProcess: initialState.salesProcess || {
        closerScript: "",
        clarifyingQuestions: [],
        painLabels: [],
        objections: [],
        reinforcement: [],
      },
      retentionSystem: initialState.retentionSystem || {
        retention: { onboarding: [], checkIns: [], valueDelivery: [] },
        reviews: { strategy: "", timing: [], incentives: [] },
        referrals: { strategy: "", incentives: [], process: [] },
        resells: { upsells: [], crossSells: [], timing: [] },
      },
      scalingPath: initialState.scalingPath || {
        selectedPath: null,
        systems: { sopList: [], automation: [], delegation: [] },
        hiring: { roles: [] },
      },
      iceProjects: initialState.iceProjects || [],
      roadmap: initialState.roadmap || {
        month1: { weeks: [], reflection: [] },
        month2: { weeks: [], reflection: [] },
        month3: { weeks: [], reflection: [] },
      },
      setBusinessData: (data) =>
        set((state) => {
          const newState = {
            ...state,
            businessData: { ...state.businessData, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setGrandSlamOffer: (data) =>
        set((state) => {
          const newState = {
            ...state,
            grandSlamOffer: { ...state.grandSlamOffer, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setLeadGeneration: (data) =>
        set((state) => {
          const newState = {
            ...state,
            leadGeneration: { ...state.leadGeneration, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setSalesProcess: (data) =>
        set((state) => {
          const newState = {
            ...state,
            salesProcess: { ...state.salesProcess, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setRetentionSystem: (data) =>
        set((state) => {
          const newState = {
            ...state,
            retentionSystem: { ...state.retentionSystem, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setScalingPath: (data) =>
        set((state) => {
          const newState = {
            ...state,
            scalingPath: { ...state.scalingPath, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
      setICEProjects: (projects) =>
        set((state) => {
          const newState = { ...state, iceProjects: projects };
          saveToStorage(newState);
          return newState;
        }),
      setRoadmap: (data) =>
        set((state) => {
          const newState = {
            ...state,
            roadmap: { ...state.roadmap, ...data },
          };
          saveToStorage(newState);
          return newState;
        }),
    };
  }
);

