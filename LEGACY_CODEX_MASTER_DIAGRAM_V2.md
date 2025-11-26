
---

## 6. PlantUML Alternatives (Advanced Visualization)

For users preferring Graphviz/PlantUML layout control, here are the source codes for the primary diagrams.

### 6.1 Master Entity Map (Component Diagram)

```plantuml
@startuml
!theme spacelab
skinparam componentStyle rectangle
skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 60

' --- LEVEL 1: SOVEREIGNTY ---
package "Sovereignty Layer (The Fortress)" {
    [Principals\n(Managers)] as PR
    [Dynasty Trust\n(South Dakota)] as DT #Navy
    [Origin Eyes\n(501c3 Charity)] as OE #Green
}

' --- LEVEL 2: TREASURY ---
package "Treasury Layer (The Bank)" {
    [PNR Holdings LLC\n(Wyoming Treasury)] as PNR #Black
    [Captive Insurance\n(831b Risk Mgmt)] as CAP #Green
}

' --- LEVEL 3: ASSETS (HoldCos) ---
package "Asset Layer (The Vault)" {
    [Obuke LLC\n(Parent of Series 1-10)] as OBU #Green
    [ToriMedia LLC\n(IP HoldCo)] as TORI #Green
}

' --- LEVEL 4: OPERATIONS (Engines) ---
package "Operating Layer (The Engines)" {
    [CXI LLC\n(Management S-Corp)] as CXI #Blue
    [Kwode LLC\n(Hybrid OpCo/HoldCo)] as KW #Red
    [Neat Circle LLC\n(Automation BPA)] as NEAT #Red
    [Lodging Connections\n(Hospitality OpCo)] as LODGE #Red
}

' --- ALIGNMENT & LAYOUT (Hidden Links) ---
' Vertical Backbone
PR -[hidden]down-> DT
DT -[hidden]down-> PNR
PNR -[hidden]down-> CXI

' Side Alignment
OE -[hidden]right- DT
PNR -[hidden]right- CAP

' Layer Separation
OBU -[hidden]right- TORI
CXI -[hidden]right- KW
KW -[hidden]right- NEAT
NEAT -[hidden]right- LODGE

' --- RELATIONSHIPS (Solid = Ownership) ---
PR --> DT : Grantors
DT --> PNR : Owns 100%
DT .left.> OE : Beneficiary

PNR --> CAP
PNR --> OBU
PNR --> TORI
PNR --> CXI
PNR --> KW
PNR --> NEAT
PNR --> LODGE

' --- OPERATIONAL FLOWS (Dotted = Service) ---
CXI ..> KW : Manages
CXI ..> NEAT : Manages
CXI ..> LODGE : Manages

TORI ..> KW : Licenses IP
TORI ..> NEAT : Licenses IP
TORI ..> LODGE : Licenses IP

NEAT ..> KW : Automates
NEAT ..> LODGE : Automates

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
