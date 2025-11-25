# The Legacy Codex - Master System Architecture V6

**The "Grand Unified Theory" of the Ohu Dynasty.**
A high-fidelity visualization of the Legal, Financial, and Technical infrastructure, mapping **all registered entities** to their strategic roles.

---

## 1. The Dynasty Entity Relationship Model (ERD)

This diagram defines strict **Ownership**, **Management**, and **Asset Protection** barriers using your specific legal entities.

```mermaid
classDiagram
    %% --- Sovereignty Layer ---
    class DynastyTrust {
        +Asset: $100M+ Target
        +Situs: South Dakota
        +Term: 365 Years
        +Role: Ultimate Owner
        -Liability: Protected (Charging Order)
    }
    
    class Principals {
        +Role: Grantors / Managers
        +Authority: 100% Control
    }
    
    class ILIT_Trust {
        +Role: Liquidity Provider
        +Asset: Life Insurance
    }

    class CRT_Trust {
        +Role: Exit Valve
        +Asset: Pre-Sale Assets
    }

    %% --- Treasury Layer ---
    class PNR_Holdings {
        +Type: Wyoming LLC
        +Role: Master Treasury
        +Function: Capital Allocation
    }
    
    class Origin_Eyes {
        +Type: 501(c)(3) Public Charity
        +Role: Philanthropy
        +Mission: Vision & Legacy
    }

    class Captive_Insurance {
        +Type: Utah LLC (831b)
        +Role: Risk Management
        +Status: *To Be Formed*
    }

    %% --- IP Holding Layer ---
    class ToriMedia {
        +Type: IP Holding LLC
        +Asset: Domains, Trademarks, Code
        +Role: Licensing (Royalties)
    }

    %% --- Operating Layer ---
    class CXI_LLC {
        +Type: S-Corp
        +Role: Management Co
        +Function: Payroll / HR
    }

    class Kwode_LLC {
        +Type: Operating LLC
        +Role: Tech & Services OpCo
        +Brands: Notroom, TaxEar, Directories
    }

    class Lodging_Connections {
        +Type: Operating LLC
        +Role: Hospitality / STR Management
        +Function: Corporate Housing
    }

    class Neat_Circle_LLC {
        +Type: Operating LLC
        +Role: Niche Services / Community
        +Asset: neatcircle.com
    }

    class Obuke_LLC_Master {
        +Type: Series LLC Master
        +Role: Real Estate Holdings
        +Asset: Portfolio Aggregator
    }

    class Obuke_Series_1_10 {
        +Type: Series Cells (1-10)
        +Role: Individual Asset Isolation
        +Asset: Specific Properties
    }

    %% --- Wealth Layer ---
    class Solo_401k {
        +Role: Mega Backdoor Roth
        +Limit: $69k/yr
    }

    class SDIRA_LLC {
        +Role: Checkbook Control
        +Asset: Alternative Inv.
    }

    %% Relationships
    Principals "1" --* "1" DynastyTrust : Grantor
    DynastyTrust "1" *-- "1" PNR_Holdings : Owns 100%
    DynastyTrust "1" *-- "1" Origin_Eyes : Beneficiary
    DynastyTrust "1" *-- "1" ILIT_Trust : Beneficiary
    
    PNR_Holdings "1" *-- "1" CXI_LLC : Owns 100%
    PNR_Holdings "1" *-- "1" Captive_Insurance : Owns 100%
    PNR_Holdings "1" *-- "1" ToriMedia : Owns 100%
    PNR_Holdings "1" *-- "1" Obuke_LLC_Master : Owns 100%
    PNR_Holdings "1" *-- "1" Kwode_LLC : Owns 100%
    PNR_Holdings "1" *-- "1" Lodging_Connections : Owns 100%
    PNR_Holdings "1" *-- "1" Neat_Circle_LLC : Owns 100%
    
    ToriMedia ..> Kwode_LLC : Licenses IP
    ToriMedia ..> Neat_Circle_LLC : Licenses IP
    
    Obuke_LLC_Master "1" *-- "10" Obuke_Series_1_10 : Segregates
    
    CXI_LLC "1" --> "1" Kwode_LLC : Manages
    CXI_LLC "1" --> "1" Lodging_Connections : Manages
    CXI_LLC "1" --> "1" Obuke_LLC_Master : Manages
    CXI_LLC "1" --> "1" Neat_Circle_LLC : Manages
    
    CXI_LLC ..> Solo_401k : Sponsors
    Principals ..> SDIRA_LLC : Manages
    Obuke_Series_1_10 ..> CRT_Trust : Liquidity Event
```

---

## 2. The "Perfect Dollar" Cashflow Sequence

This sequence diagram illustrates the **velocity of money** through the registered entities.

```mermaid
sequenceDiagram
    autonumber
    participant Client
    participant OpCo as Kwode / Neat Circle
    participant Tori as ToriMedia (IP)
    participant CXI as CXI LLC (Mgmt)
    participant Captive as Captive Ins (To Be Formed)
    participant Principal as Family (W2)
    participant Children as Heirs (Marketing)
    participant 401k as Solo 401k (Roth)
    participant PNR as PNR Holdings (Treasury)

    Note over Client,OpCo: REVENUE GENERATION
    Client->>OpCo: Pay for Service ($10,000)
    
    Note over OpCo,CXI: EXPENSE LAYERING
    OpCo->>OpCo: Deduct Direct Expenses
    OpCo->>Principal: Pay Augusta Rent ($1,000)
    OpCo->>Tori: Pay IP Royalty ($500)
    Note right of Tori: Passive Income
    OpCo->>CXI: Pay Management Fee ($5,000)
    
    Note over CXI,Captive: RISK TRANSFER
    CXI->>Captive: Pay Insurance Premium ($2,000)
    Note right of Captive: Tax-Free Growth Bucket
    
    Note over CXI,Children: COMPENSATION
    CXI->>Principal: Pay W-2 Salary ($1,000)
    CXI->>Children: Pay Marketing Salary ($1,000)
    Note right of Children: Tax-Free (Std Deduction)
    
    Note over CXI,401k: RETIREMENT
    CXI->>401k: Employer Match ($250)
    Principal->>401k: Employee Deferral ($250)
    Note right of 401k: Tax-Free Retirement Bucket
    
    Note over CXI,PNR: PROFIT SWEEP
    CXI->>PNR: Distribute Net Profit ($500)
    Tori->>PNR: Distribute Royalties ($500)
    Note right of PNR: Capital for Reinvestment
```

---

## 3. The Tax Iron Dome (Mindmap)

Integrating **Origin Eyes**, **ToriMedia**, and **Lodging Connections** into the tax strategy.

```mermaid
mindmap
  root((Tax Iron Dome))
    ((Deferral Engines))
      Qualified Opportunity Zones
        ::icon(fa fa-building)
        Defer Gains to 2026
      1031 Exchange
        ::icon(fa fa-exchange)
        Obuke Series Swaps
      Lodging Connections
        ::icon(fa fa-bed)
        Short-Term Rental Loophole
        Cost Segregation
        Offset Active Income
    ((Elimination Vehicles))
      Roth Strategies
        Mega Backdoor 401k
        ::icon(fa fa-rocket)
        Backdoor Roth IRA
        529-to-Roth Rollover
      Health Savings Account
        ::icon(fa fa-medkit)
        Triple Tax Advantage
      Augusta Rule
        ::icon(fa fa-home)
        14 Days Tax-Free Rent
    ((Wealth Transfer))
      Dynasty Trust
        ::icon(fa fa-crown)
        Zero Estate Tax
      Life Insurance
        ::icon(fa fa-shield)
        PPLI (Private Placement)
      Origin Eyes 501c3
        ::icon(fa fa-heart)
        Charitable Deductions
        Legacy Impact
    ((Business Deductions))
      Captive Insurance
        ::icon(fa fa-umbrella)
        Section 831(b)
      ToriMedia Royalties
        ::icon(fa fa-copyright)
        IP Licensing
        Passive Income Shift
      Children's Salary
        ::icon(fa fa-child)
        Marketing Model
```

---

## 4. The Empire Technology Stack (C4 Model)

The technical architecture powering **Kwode**, **ToriMedia**, and **Lodging Connections**.

```mermaid
graph TB
    subgraph "User Layer"
        Principal[Principal User]
        Client[Client / Lead]
        Team[Global Team]
    end

    subgraph "Application Layer"
        UI[Empire Dashboard UI<br/>(Management)]
        SuiteDash[SuiteDash CRM<br/>(Client Portal)]
        Forms[Intake Forms]
    end

    subgraph "Logic Layer (Serverless)"
        Hormozi[Hormozi Engine<br/>(Business Logic)]
        TaxCalc[Tax Calculator<br/>(Financial Logic)]
        Auto[Automation Webhooks]
    end

    subgraph "Data Layer (Supabase)"
        DB[(PostgreSQL Database)]
        Storage[File Storage]
        Vector[Vector Store<br/>(AI Memory)]
    end

    Principal -->|Manages| UI
    Client -->|Logs In| SuiteDash
    Client -->|Submits| Forms
    Team -->|Processes| SuiteDash
    Team -->|Updates| UI

    UI --> Auth[Supabase Auth]
    UI --> Hormozi
    Forms --> Auto
    SuiteDash --> Auto

    Hormozi --> DB
    Auto --> DB
    TaxCalc --> DB

    DB --> Vector
    
    style UI fill:#1a237e,color:#fff,stroke:#fff
    style SuiteDash fill:#0d47a1,color:#fff,stroke:#fff
    style Hormozi fill:#e65100,color:#fff,stroke:#fff
    style DB fill:#2e7d32,color:#fff,stroke:#fff
```

---

## 5. The Implementation Timeline (Gantt)

The roadmap to activate **All Entities**.

```mermaid
gantt
    title The Dynasty Implementation Roadmap
    dateFormat  YYYY-MM-DD
    section Foundation
    Trust Formation       :crit, done, 2025-01-01, 14d
    Entity Setup (Done)   :crit, done, 2025-01-01, 1d
    Banking & Treasury    :active, 2025-02-01, 14d
    section Engines
    Activate Kwode LLC    :active, 2025-02-01, 30d
    Activate Neat Circle  :2025-02-15, 30d
    Activate Lodging Conn :2025-03-01, 30d
    Fund Obuke Series 1   :2025-03-15, 45d
    Captive Insurance     :2025-04-01, 60d
    section Wealth
    SDIRA & Solo 401k     :2025-03-01, 21d
    Origin Eyes Strategy  :2025-04-01, 30d
    section Scale
    Hire Core Team        :2025-04-01, 30d
    Scale to $100k/mo     :2025-06-01, 180d
```
