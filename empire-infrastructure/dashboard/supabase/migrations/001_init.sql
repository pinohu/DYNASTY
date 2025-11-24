-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CLIENTS TABLE (Leads & Active Clients)
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  primary_interest TEXT NOT NULL CHECK (primary_interest IN ('tax', 'wealth', 'real_estate', 'notary')),
  has_wealth_plan BOOLEAN DEFAULT FALSE,
  investable_assets TEXT,
  interested_in_real_estate BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'lead' CHECK (status IN ('lead', 'contacted', 'client', 'churned')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. BUSINESS PROFILES (Hormozi Framework Data)
CREATE TABLE IF NOT EXISTS business_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  industry TEXT,
  current_offer TEXT,
  data JSONB DEFAULT '{}'::jsonb, -- Stores the entire Hormozi Store state JSON
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. RLS POLICIES (Row Level Security)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts for the Intake Form
CREATE POLICY "Allow anonymous intake submission" ON clients
  FOR INSERT WITH CHECK (true);

-- Policy: Allow read access only to authenticated admin users (service_role or authenticated)
-- Note: For MVP, we are allowing public insert but restricting read. 
-- In production, you would bind this to a specific user role.
CREATE POLICY "Allow read access to admins" ON clients
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy: Business Profiles are private to the user
CREATE POLICY "Users can view own profile" ON business_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON business_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON business_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

