export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          first_name: string
          email: string
          primary_interest: 'tax' | 'wealth' | 'real_estate' | 'notary'
          has_wealth_plan: boolean
          investable_assets: string | null
          interested_in_real_estate: boolean
          status: 'lead' | 'contacted' | 'client' | 'churned'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          email: string
          primary_interest: 'tax' | 'wealth' | 'real_estate' | 'notary'
          has_wealth_plan?: boolean
          investable_assets?: string | null
          interested_in_real_estate?: boolean
          status?: 'lead' | 'contacted' | 'client' | 'churned'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          email?: string
          primary_interest?: 'tax' | 'wealth' | 'real_estate' | 'notary'
          has_wealth_plan?: boolean
          investable_assets?: string | null
          interested_in_real_estate?: boolean
          status?: 'lead' | 'contacted' | 'client' | 'churned'
          created_at?: string
          updated_at?: string
        }
      }
      business_profiles: {
        Row: {
          id: string
          company_name: string
          industry: string | null
          current_offer: string | null
          data: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_name: string
          industry?: string | null
          current_offer?: string | null
          data?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_name?: string
          industry?: string | null
          current_offer?: string | null
          data?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

