
---

## 6. PlantUML Alternatives (Advanced Visualization)

For users preferring Graphviz/PlantUML layout control, here are the source codes for the primary diagrams.

### 6.1 Master Entity Map (Component Diagram)

```plantuml
@startuml
!theme spacelab
skinparam componentStyle rectangle

package "Sovereignty Layer (The Fortress)" {
    [Dynasty Trust\n(South Dakota)] as DT #Navy
    [Principals\n(Managers)] as PR
    [Origin Eyes\n(501c3 Charity)] as OE #Green
}

package "Treasury Layer (The Bank)" {
    [PNR Holdings LLC\n(Wyoming Treasury)] as PNR #Black
    [Captive Insurance\n(831b Risk Mgmt)] as CAP #Green
}

package "Asset Layer (The Vault)" {
    [Obuke LLC\n(Real Estate HoldCo)] as OBU #Green
    [ToriMedia LLC\n(IP HoldCo)] as TORI #Green
}

package "Operating Layer (The Engines)" {
    [CXI LLC\n(Management S-Corp)] as CXI #Blue
    [Kwode LLC\n(Hybrid OpCo/HoldCo)] as KW #Red
    [Neat Circle LLC\n(Automation BPA)] as NEAT #Red
    [Lodging Connections\n(Hospitality OpCo)] as LODGE #Red
}

' Relationships
PR --> DT : Grantors
DT --> PNR : Owns 100%
DT --> OE : Beneficiary

PNR --> CAP : Owns 100%
PNR --> OBU : Owns 100%
PNR --> TORI : Owns 100%
PNR --> CXI : Owns 100%
PNR --> KW : Owns 100%
PNR --> NEAT : Owns 100%
PNR --> LODGE : Owns 100%

' Operational Flows
TORI ..> KW : Licenses IP
TORI ..> NEAT : Licenses IP
NEAT ..> KW : Automates
CXI --> KW : Manages
CXI --> NEAT : Manages

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
