import { create } from "zustand";
import { supabase } from "@/lib/supabase";

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
  // Data
  businessData: BusinessData;
  grandSlamOffer: GrandSlamOffer;
  leadGeneration: LeadGeneration;
  salesProcess: SalesProcess;
  retentionSystem: RetentionSystem;
  scalingPath: ScalingPath;
  iceProjects: ICEProject[];
  roadmap: Roadmap;
  
  // Cloud Sync State
  isSyncing: boolean;
  lastSynced: Date | null;
  error: string | null;
  profileId: string | null;

  // Setters
  setBusinessData: (data: Partial<BusinessData>) => void;
  setGrandSlamOffer: (data: Partial<GrandSlamOffer>) => void;
  setLeadGeneration: (data: Partial<LeadGeneration>) => void;
  setSalesProcess: (data: Partial<SalesProcess>) => void;
  setRetentionSystem: (data: Partial<RetentionSystem>) => void;
  setScalingPath: (data: Partial<ScalingPath>) => void;
  setICEProjects: (projects: ICEProject[]) => void;
  setRoadmap: (data: Partial<Roadmap>) => void;

  // Cloud Actions
  saveToCloud: () => Promise<void>;
  loadFromCloud: (profileId: string) => Promise<void>;
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
  try {
    const stored = localStorage.getItem("hormozi-framework-storage");
    const profileId = localStorage.getItem("empire-profile-id");
    if (!stored) return { profileId: profileId || null };
    const parsed = JSON.parse(stored);
    return { ...parsed, profileId: profileId || null };
  } catch (error) {
    console.error("Failed to parse stored data, resetting to defaults:", error);
    localStorage.removeItem("hormozi-framework-storage");
    return {};
  }
};

const saveToStorage = (state: HormoziStore) => {
  if (typeof window === "undefined") return;
  // Filter out functions and sync state before saving
  const { isSyncing, lastSynced, error, profileId, ...dataToSave } = state;
  localStorage.setItem("hormozi-framework-storage", JSON.stringify(dataToSave));
  if (state.profileId) {
      localStorage.setItem("empire-profile-id", state.profileId);
  }
};

export const useHormoziStore = create<HormoziStore>()((set, get) => {
  const initialState = loadFromStorage();
  
  return {
      // Initial State
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
      
      // Cloud State
      isSyncing: false,
      lastSynced: null,
      error: null,
      profileId: initialState.profileId || null,

      // Setters
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

      // Cloud Actions
      saveToCloud: async () => {
          const state = get();
          set({ isSyncing: true, error: null });

          try {
            // Extract data to save
            const { isSyncing, lastSynced, error, profileId, ...dataToSave } = state;
            const payload = {
                company_name: state.businessData.companyName,
                industry: state.businessData.industry,
                current_offer: state.businessData.currentOffer,
                data: dataToSave
            };

            let result;
            
            if (state.profileId) {
                // Update existing
                result = await supabase
                    .from('business_profiles')
                    .update(payload)
                    .eq('id', state.profileId)
                    .select()
                    .single();
            } else {
                // Insert new
                result = await supabase
                    .from('business_profiles')
                    .insert([payload])
                    .select()
                    .single();
            }

            if (result.error) throw result.error;

            set({ 
                isSyncing: false, 
                lastSynced: new Date(),
                profileId: result.data.id 
            });
            
            // Persist the new ID
            saveToStorage({ ...state, profileId: result.data.id });

          } catch (err: any) {
              console.error("Cloud sync error:", err);
              set({ isSyncing: false, error: err.message });
          }
      },

      loadFromCloud: async (profileId: string) => {
          set({ isSyncing: true, error: null });
          try {
              const { data, error } = await supabase
                  .from('business_profiles')
                  .select('*')
                  .eq('id', profileId)
                  .single();
              
              if (error) throw error;

              // Merge cloud data with store
              const cloudState = data.data as Partial<HormoziStore>;
              set({ 
                  ...cloudState, 
                  profileId: data.id,
                  isSyncing: false,
                  lastSynced: new Date(data.updated_at)
              });
              
              // Update local storage
              saveToStorage({ ...get(), ...cloudState, profileId: data.id });

          } catch (err: any) {
              console.error("Cloud load error:", err);
              set({ isSyncing: false, error: err.message });
          }
      }
    };
  }
);
