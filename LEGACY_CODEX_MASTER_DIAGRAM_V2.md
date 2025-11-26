
---

## 6. PlantUML Alternatives (Advanced Visualization)

For users preferring Graphviz/PlantUML layout control, here are the source codes for the primary diagrams.

### 6.1 Master Entity Map (Component Diagram)

```plantuml
@startuml
!theme spacelab
skinparam componentStyle rectangle
skinparam linetype ortho
skinparam nodesep 50
skinparam ranksep 50

' --- LEVEL 0: BENEFIT LAYER (Personal Tax Shelters) ---
package "Benefit Layer (Tax Free/Deferred)" {
    [Solo 401k Trust\n<size:10>Tax: Exempt (5500-EZ)</size>] as 401K #Green
    [HSA Account\n<size:10>Tax: Exempt (Form 8889)</size>] as HSA #Green
    [SDIRA LLC\n<size:10>Tax: Disregarded (IRA)</size>] as SDIRA #Green
}

' --- LEVEL 1: SOVEREIGNTY ---
package "Sovereignty Layer" {
    [Principals\n(Managers)\n<size:10>Tax: Form 1040</size>] as PR
    [Dynasty Trust\n(South Dakota)\n<size:10>Tax: Form 1041</size>] as DT #Navy
    [Origin Eyes\n(501c3 Charity)\n<size:10>Tax: Form 990</size>] as OE #Green
    
    ' Sub-Trusts Branch
    [Gen 2 Sub-Trusts\n(Beneficiaries)\n<size:10>Tax: Form 1041</size>] as SUBT #Navy
}

' --- LEVEL 2: TREASURY ---
package "Treasury Layer" {
    [PNR Holdings LLC\n(Wyoming Treasury)\n<size:10>Tax: Partnership (1065)</size>] as PNR #Black
    [Captive Insurance\n(831b Risk Mgmt)\n<size:10>Tax: Form 1120-PC</size>] as CAP #Green
}

' --- LEVEL 3: PASSIVE ASSETS ---
package "Passive Zone (Schedule E)" {
    [Obuke LLC\n(Real Estate)\n<size:10>Tax: Partnership (1065)</size>] as OBU #Green
    [ToriMedia LLC\n(IP HoldCo)\n<size:10>Tax: Partnership (1065)</size>] as TORI #Green
}

' --- LEVEL 4: ACTIVE OPERATIONS ---
package "Active Zone (Ordinary Income)" {
    [CXI LLC\n(Management)\n<size:10>Tax: S-Corp (1120-S)</size>] as CXI #Blue
    [Kwode LLC\n(Hybrid OpCo)\n<size:10>Tax: Disregarded</size>] as KW #Red
    [Neat Circle LLC\n(Automation)\n<size:10>Tax: Disregarded</size>] as NEAT #Red
    [Lodging Connections\n(Hospitality)\n<size:10>Tax: Disregarded</size>] as LODGE #Red
    [Ulor LLC\n(Acquisition)\n<size:10>Tax: Disregarded</size>] as ULOR #Red
}

' --- ALIGNMENT (Hidden) ---
PR -[hidden]down- DT
DT -[hidden]down- PNR
PNR -[hidden]down- CXI

' Benefits Alignment
401K -[hidden]down- HSA
HSA -[hidden]down- SDIRA
PR -[hidden]left- 401K

' Sub-Trust Alignment
DT -[hidden]right- SUBT

' Zone Alignment
OE -[hidden]right- DT
PNR -[hidden]right- CAP
OBU -[hidden]right- CXI

' --- RELATIONSHIPS ---

' Benefits Flow
PR --> 401K : Participant
PR --> HSA : Owner
CXI --> 401K : Employer Match
401K --> SDIRA : Funds (Rollover)

' Sovereignty Flow
PR --> DT : Grantors
DT --> PNR : Owns 100%
DT ..> OE : Beneficiary
DT ..> SUBT : Distributes

' Treasury Flow
PNR --> CAP
PNR --> OBU
PNR --> TORI
PNR --> CXI
PNR --> KW
PNR --> NEAT
PNR --> LODGE
PNR --> ULOR

' Operational Flow
CXI ..> KW : Manages
CXI ..> NEAT : Manages
CXI ..> LODGE : Manages
CXI ..> ULOR : Manages

TORI ..> KW : Licenses IP
TORI ..> NEAT : Licenses IP
TORI ..> LODGE : Licenses IP

NEAT ..> KW : Automates
NEAT ..> LODGE : Automates

ULOR .up.> OBU : Assigns Contract

@enduml
```

### 6.2 The Perfect Dollar Sequence

```plantuml
@startuml
!theme spacelab
autonumber

actor Client
participant "Neat Circle\n(Automation OpCo)" as OP #Red
participant "ToriMedia\n(IP HoldCo)" as IP #Green
participant "CXI LLC\n(Management)" as MGMT #Blue
participant "PNR Holdings\n(Treasury)" as HOLD #Black
participant "Obuke LLC\n(Assets)" as ASSET #Green

== Revenue Phase ==
Client -> OP: Pay for Service ($10,000)
note right: Gross Revenue

== Expense Phase (The Shield) ==
OP -> IP: Pay IP Royalty (5%)
OP -> MGMT: Pay Mgmt Fee (20%)
OP -> OP: Pay Direct Expenses

== Harvest Phase ==
OP -> HOLD: Sweep Excess Profit (Cash Sweep)
note right: Liability Firewall

== Investment Phase ==
HOLD -> ASSET: Capital Contribution
ASSET -> ASSET: Buy Real Estate
@enduml
```

### 6.3 The Tax Iron Dome (Mindmap)

```plantuml
@startmindmap
!theme spacelab
* Tax Iron Dome
** Deferral Engines
*** Qualified Opportunity Zones (2026)
*** 1031 Exchanges (Real Estate)
*** Lodging Connections (STR Loophole)
** Elimination Vehicles
*** Roth Strategies
**** Mega Backdoor 401k
**** 529-to-Roth
*** Health Savings Account (HSA)
*** Augusta Rule (14 Days Rent)
** Wealth Transfer
*** Dynasty Trust (No Estate Tax)
*** Life Insurance (PPLI)
*** Origin Eyes (Charitable Deduction)
** Business Deductions
*** Captive Insurance (831b)
*** ToriMedia Royalties (IP)
*** Children's Salary (Marketing)
@endmindmap
```
