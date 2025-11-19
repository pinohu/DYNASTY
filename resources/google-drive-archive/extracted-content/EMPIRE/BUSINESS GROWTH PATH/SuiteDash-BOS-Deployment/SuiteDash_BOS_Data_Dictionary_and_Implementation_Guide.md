# SuiteDash BOS — Data Dictionary & Implementation Guide
_Version_: 2025-09-06 23:30

This guide explains **every field/column in the BOS spreadsheets**, their meaning, business implications, how calculations are done, and exactly how to implement them inside SuiteDash (and where native limits exist, how to implement via n8n/Activepieces).

## How to Use This Guide
- Find the sheet name below that matches the Excel tab.
- Start with the **Columns Dictionary** (what each column means and how to implement it).
- For sheets that list **domain fields** (e.g., CRM_Custom_Fields, KPI_Tree), see the **Row-by-Row Field Reference** for definitions and usage.
- Use the **Implementation Notes** to wire it in SuiteDash.

## Table of Contents
- **Workflows Workbook**
  - [Lead_to_Client](#lead_to_client)
  - [Onboarding](#onboarding)
  - [Delivery_Monthly](#delivery_monthly)
  - [Support_Escalation](#support_escalation)
  - [Offboarding](#offboarding)
  - [Governance_QA](#governance_qa)
  - [QA_Testing](#qa_testing)
  - [Finance_SOPs](#finance_sops)
  - [Security_Roles](#security_roles)
  - [People_Training](#people_training)
  - [Continuity_Risk](#continuity_risk)
  - [Migration_Playbooks](#migration_playbooks)
  - [Industry_Healthcare_HIPAA](#industry_healthcare_hipaa)
  - [Industry_Fintech_PCI](#industry_fintech_pci)
  - [Sales_CLOSER_Automations](#sales_closer_automations)
- **Forms/Automations Workbook**
  - [Kickoff_Form_Schema](#kickoff_form_schema)
  - [Email_Templates](#email_templates)
  - [Proposal_Contracts](#proposal_contracts)
  - [Automation_Recipes](#automation_recipes)
  - [SLA_Matrix](#sla_matrix)
  - [Escalation_Matrix](#escalation_matrix)
  - [RACI_Master](#raci_master)
  - [KPI_Tree](#kpi_tree)
  - [Naming_Conventions](#naming_conventions)
  - [Retention_Policy](#retention_policy)
  - [Training_Curriculum](#training_curriculum)
  - [Dashboards_Spec](#dashboards_spec)
  - [Offer_Workbook](#offer_workbook)
  - [Visual_Workflows](#visual_workflows)
  - [Visual_SVG_Index](#visual_svg_index)
  - [CRM_Custom_Fields](#crm_custom_fields)
  - [Pipeline_CLOSER](#pipeline_closer)
  - [Automation_Templates_Detail](#automation_templates_detail)
  - [External_Automations](#external_automations)
  - [Maintenance_Checks](#maintenance_checks)

---

## Lead_to_Client
_Workflows Workbook_ — Operational steps to convert a lead into a paying client with RACI, SLAs, and automations.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## Onboarding
_Workflows Workbook_ — Client onboarding sequence from welcome to access provisioning.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## Delivery_Monthly
_Workflows Workbook_ — Recurring service delivery and reporting cadence.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## Support_Escalation
_Workflows Workbook_ — Ticket handling with SLA targets and escalation policy.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## Offboarding
_Workflows Workbook_ — Client termination, data export, and access revocation.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## Governance_QA
_Workflows Workbook_ — SOP versioning and KPI/SLA reviews for continuous improvement.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Seq # (Chrono) | Sequence number in strict chronological order. | Controls task order & dependencies. | Keep unique and gapless per phase. |
| Phase | The lifecycle stage (e.g., Lead→Client, Onboarding). | Used for reporting/filters. | Match to SuiteDash Projects/CRM segments. |
| Sub-Process | Nested process within the Phase. | Helps assign owners and SLAs. | Use as Task List name in SuiteDash. |
| Step Name | Actionable task title. | Appears in task lists and reports. | Use imperative verbs (e.g., 'Configure Form'). |
| Detailed Instructions (Novice) | Step-by-step directions for a new hire. | Reduces training time; ensures consistency. | Paste into task description/templates. |
| Responsible (R) | Role doing the work. | RACI role for accountability. | Map to SuiteDash assignee or Team. |
| Accountable (A) | Role ultimately answerable. | Break ties on quality/scope. | Use as approver in QA gates. |
| Consulted (C) | Roles to consult during execution. | Improves quality, avoids rework. | Mention/tag in task comments. |
| Informed (I) | Roles to inform after completion. | Stakeholder alignment. | Automate notifications in SuiteDash. |
| SLA Target (Response/Resolution/Due) | Time targets for response/completion. | Enforces service quality. | Implement timers via task due dates & ticket SLAs. |
| Inputs / Forms / Data | Prerequisites to begin the step. | Prevents false starts. | Attach forms/files to tasks. |
| Outputs / Artifacts | Deliverables the step must produce. | Proof of completion. | Store in Files; link in task comments. |
| SuiteDash Module / Feature | Where this happens in SuiteDash. | Training navigation path. | E.g., CRM, Forms, Projects, Tickets. |
| Automation Trigger (if any) | Event that starts automations. | Drives consistency & speed. | E.g., 'Form Submitted', 'Invoice Paid'. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Manual Actions | Human actions still required. | Avoids missed steps. | Keep checklists concise. |
| Dependencies (Predecessors) | What must be done first. | Avoids blocked tasks. | Link using Seq # or Task dependencies. |
| Definition of Done (Checklist) | Non-negotiable pass criteria. | Improves quality & reduces rework. | Add as task checklist items. |
| QA Gate / Approval | Formal review or sign-off. | Catches defects before client sees them. | Assign approver; require comment/approval. |
| Exception Handling | What to do when things go wrong. | Resilience during incidents. | Add playbooks & templates. |
| Escalation Path | Who to notify & when. | Maintains SLA under stress. | Use escalation matrix + automations. |
| Metrics / KPI | What this step affects. | Aligns work to outcomes. | Link to dashboards. |
| Evidence Log / Where | Where proof is stored. | Audit/compliance. | Reference Files, Notes, Logs. |
| Security / Data Class | Sensitivity of data handled. | Compliance & least privilege. | Apply role-based access. |
| Tools / Integrations | External systems used. | Integration/compatibility. | Document versions & owners. |
| Template ID / Link (placeholder) | ID/URL of template used. | Findability of artifacts. | Keep centralized template registry. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |


## QA_Testing
_Workflows Workbook_ — Testing artifacts: UAT scripts, regression, and migration checklists.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Artifact Type | Type of QA artifact. | Testing scope. | UAT/Regression/Migration. |
| ID | Unique ID for the artifact. | Traceability. | UAT-XXX, REG-XXX. |
| Process / Area | What is being tested. | Coverage. | Map to process & phase. |
| Preconditions | What must be true before test. | Repeatability. | Data/users/permissions ready. |
| Step-by-Step (Click Path) | Exact steps to reproduce. | Clarity for novices. | Keep atomic and numbered. |
| Expected Result | What should happen. | Pass/Fail definition. | Be explicit & observable. |
| Pass/Fail | (Describe) | (Implications) | (Implementation) |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Notes | Context/help for designers. | Smooth implementation. | Include thresholds, styles, etc. |


## Finance_SOPs
_Workflows Workbook_ — Financial operations: dunning, refunds/chargebacks, recognition, reconciliation.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Process | High-level workflow. | Context. | Tie to SOPs. |
| Trigger/Event | Operational event that kicks off SOP. | Automation alignment. | Use system events when possible. |
| Steps (Chronological) | Ordered execution steps. | Reduces ambiguity. | Keep numbered & concise. |
| SLA/Timing | Time constraints in this SOP. | Performance targets. | Monitor in dashboards. |
| Automation | Automation components involved. | Scalability. | Reference IDs & owners. |
| Escalation | Who and when to escalate. | SLA adherence. | Auto-notify. |
| Controls (QA/Approval) | Required checks & sign-offs. | Quality & compliance. | Attach to gates. |
| Evidence/Logs | Artifacts proving execution. | Auditability. | File paths/log names. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## Security_Roles
_Workflows Workbook_ — Role access matrix, data classes, DSAR & breach processes.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Element | Item within a framework (role/data/step). | Structure. | Rows nested under a domain. |
| Item/Role | (Describe) | (Implications) | (Implementation) |
| Definition / Scope | What the item means. | Avoids misinterpretation. | Provide examples. |
| Access Level / Permission | Allowed actions. | Least privilege. | Read/Write/Admin etc. |
| Data Class (Public/Internal/Confidential/PII/PHI) | Sensitivity classification. | Security & compliance. | Dictates role access. |
| SOP / Link | Where to find the SOP. | Enablement. | URL/ID placeholder. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## People_Training
_Workflows Workbook_ — Role-based training, certification, and refresh cadence.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Role | Job function. | Training track. | PM/CSM/Admin etc. |
| Training Module | (Describe) | (Implications) | (Implementation) |
| Learning Objectives | Outcomes learners must achieve. | Assessment alignment. | Use measurable verbs. |
| Format | Delivery type. | Engagement. | Video/SOP/Lab. |
| Duration | Time to complete. | Planning. | hh:mm or hours. |
| Assessment | Evaluation method. | Mastery. | Quiz/roleplay/lab. |
| Completion Criteria | What qualifies as complete. | Quality. | Score thresholds + demos. |
| Refresh Cadence | How often to retrain. | Skill maintenance. | Annual/quarterly. |
| Backup/Shadow | Secondary person for continuity. | Resilience. | Designate and train. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## Continuity_Risk
_Workflows Workbook_ — Business continuity, incident response, and risk register.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Category | Area of measurement (Funnel, Sales, etc.) | Structure. | Match dashboard tabs. |
| Scenario | Specific adverse event. | Planning specificity. | E.g., Stripe outage. |
| Trigger | What indicates the scenario. | Detection. | Status page/alarm. |
| Immediate Actions (T+0-2h) | First response steps. | Stabilization. | Minimize damage. |
| Stabilization (T+2-24h) | Next-phase efforts. | Sustain operations. | Manual workarounds. |
| Recovery (≥24h) | Return to normal operations. | Closure. | Backfill & RCA. |
| Client Comms Template | What to tell clients. | Trust. | Paste into Messages/Email. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Risk Level (L/M/H) | Likelihood × Impact. | Prioritization. | Review quarterly. |


## Migration_Playbooks
_Workflows Workbook_ — Sandbox → Production promotion checklist with rollback and smoke tests.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Stage | Pipeline stage or lifecycle level. | Context. | Clarify/Label/Overview… |
| Step # | (Describe) | (Implications) | (Implementation) |
| Action | What action to take. | Restores trajectory. | Automate where safe. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Tools/Links | (Describe) | (Implications) | (Implementation) |
| Pass/Fail | (Describe) | (Implications) | (Implementation) |
| Notes | Context/help for designers. | Smooth implementation. | Include thresholds, styles, etc. |


## Industry_Healthcare_HIPAA
_Workflows Workbook_ — Healthcare-specific compliance controls integrated with SuiteDash.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Domain | (Describe) | (Implications) | (Implementation) |
| Element | Item within a framework (role/data/step). | Structure. | Rows nested under a domain. |
| Policy/Procedure | (Describe) | (Implications) | (Implementation) |
| SuiteDash Implementation | (Describe) | (Implications) | (Implementation) |
| Evidence/Logs | Artifacts proving execution. | Auditability. | File paths/log names. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## Industry_Fintech_PCI
_Workflows Workbook_ — Fintech/GDPR/PCI specifics: payments, MFA, DPAs, retention.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Domain | (Describe) | (Implications) | (Implementation) |
| Element | Item within a framework (role/data/step). | Structure. | Rows nested under a domain. |
| Policy/Procedure | (Describe) | (Implications) | (Implementation) |
| SuiteDash Implementation | (Describe) | (Implications) | (Implementation) |
| Evidence/Logs | Artifacts proving execution. | Auditability. | File paths/log names. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## Sales_CLOSER_Automations
_Workflows Workbook_ — Per-stage operational automations, SLAs, and definitions of done.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Stage | Pipeline stage or lifecycle level. | Context. | Clarify/Label/Overview… |
| When Entering (Automations/Tasks) | What should start on entry. | Momentum. | Create tasks, send emails. |
| Required Fields (Block Exit If Missing) | (Describe) | (Implications) | (Implementation) |
| SLA / Timer | Time expectations for stage. | Reduces stall. | Set reminders/escalation. |
| Exit Check (Definition of Done) | What must be true to exit. | Quality gate. | Block exit if unmet. |
| Escalation | Who and when to escalate. | SLA adherence. | Auto-notify. |

### Row-by-Row Field Reference
| Stage | When Entering (Automations/Tasks) | Required Fields (Block Exit If Missing) | SLA / Timer | Exit Check (Definition of Done) | Escalation |
|---|---|---|---|---|---|
| EXPLANATION: Operational checklists for each CLOSER stage. Use this to wire 'Manage Automations' per stage and to define enforcement (required fields, tasks, emails) and SLAs. |  |  |  |  |  |
| Clarify | Assign SDR; start SOS sequence | Primary_Pain_Point | First touch ≤24h | Discovery booked OR clear disqualify | Sales Manager at +24h |
| Label | Create discovery task with script link | Problem_Label; Desired_Outcome | Discovery ≤3d | Discovery done (notes saved) | Sales Manager at +3d |
| Overview | Send demo prep email; calendar invite | Demo_Date; Stakeholders_Present | Demo ≤7d | Demo delivered | Sales Manager at +7d |
| Sell | Create proposal draft; internal pricing approval if needed | Objections_Raised; Responses_Given | Proposal ≤24h post-demo | Proposal sent | Ops for pricing exceptions |
| Explain | Schedule legal review; send FAQ/ROI one-pager | Decision_Factors | Follow-up every 48h | Verbal yes/contract redlines | Sales Manager if 0 activity 48h |
| Reinforce | Send social proof; confirm onboarding schedule | Close_Date | Close ≤14d | Signed + initial invoice paid | Escalate to AE Manager at +14d |


## Kickoff_Form_Schema
_Forms/Automations Workbook_ — All kickoff form fields with help text, validation, and CRM mappings.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Section | High-level grouping within a form. | Improves usability & completion. | Map to page/section headers. |
| Field Label | End-user label on the form. | Impacts clarity & conversion. | Keep user-facing and short. |
| Purpose / Help Text (Novice) | Help copy for non-experts. | Reduces support load. | Add as placeholder/help tooltip. |
| Field Type | Input control type. | Determines validation & UX. | Choose minimal complexity. |
| Required (Y/N) | If the field must be completed. | Controls data completeness. | Enforce in SuiteDash builder. |
| Validation Rules | Constraints on input. | Improves data quality. | Add regex/range/format where available. |
| Options / Allowed Values | Select options for choice fields. | Normalization & reporting. | Avoid duplicates/overlap. |
| Default / Placeholder | Initial text/value. | Improves speed & accuracy. | Use examples over blank. |
| Stored In (CRM Field / Object) | Persistence target for data. | Reporting & merge fields. | Use consistent naming. |
| Data Class | Sensitivity of the field. | Security/compliance posture. | PII/Confidential dictate access. |
| Portal Visibility (Y/N) | Visible in client portal? | Client experience. | Hide internal-only fields. |
| Visible To (Client/Staff/Both) | Audience controls. | Least privilege. | Split forms when needed. |
| Pre-fill Source | Where default values come from. | Speed & accuracy. | Pull from deal/contact when possible. |
| Error Message (If Invalid) | Copy displayed on validation failure. | Improves task success. | Be specific & human. |
| Follow-up Automation (Trigger → Action) | What should happen after submit. | Closes the loop. | Start flows, create tasks, update CRM. |
| Owner (Role) | Who maintains this field/section. | Governance. | Assign a role not a person. |
| Version / Last Updated | Version tag & timestamp. | Change control. | Update on every edit. |

### Row-by-Row Field Reference
| Section | Field Label | Purpose / Help Text (Novice) | Field Type | Required (Y/N) | Stored In (CRM Field / Object) | Follow-up Automation (Trigger → Action) |
|---|---|---|---|---|---|---|
| Company & Contact | Company Legal Name | Enter the full legal entity name exactly as on contracts. | Text | Y | Company.Name | Form Submitted → Update CRM Company |
| Company & Contact | DBA / Brand Name | If different from legal name, used in client-facing materials. | Text | N | Company.DBA | Form Submitted → Update CRM Company |
| Company & Contact | Primary Contact Name | Who will be our day-to-day contact? | Text | Y | Contact.Primary.Name | Form Submitted → Update CRM Contact |
| Company & Contact | Primary Contact Email | We will send portal access and updates here. | Email | Y | Contact.Email | Form Submitted → Send Portal Invite |
| Company & Contact | Phone (Direct) | Useful for urgent matters. | Phone | N | Contact.Phone | Form Submitted → Tag 'HasPhone' |
| Goals & Success | Primary Goal (Outcome) | What is the #1 outcome you want from this engagement? (e.g., 100 qualified leads in 90 days) | Long Text | Y | Engagement.Goal.Primary | Form Submitted → Create Success Metric in CRM |
| Goals & Success | Success Metrics (KPIs) | List up to 3 measurable KPIs (e.g., MQLs, CAC, Conversion Rate). | Long Text | Y | Engagement.KPIs.List | Form Submitted → Create KPI Tasks |
| Goals & Success | Timeline / Deadlines | Any hard deadlines or events we must meet? | Date or Text | N | Engagement.Timeline | Form Submitted → Add Milestones |
| Assets & Access | Brand Assets (Logo, Fonts, Colors) | Upload brand kit or provide link. | File / URL | N | Files.BrandKit | File Uploaded → Notify PM |
| Assets & Access | Website / CMS Access | Provide admin URL, username, and a temporary password (or request a secure credential link). | Grouped Fields | N | Credentials.Website | Credential Received → Verify Access |
| Assets & Access | Analytics / Ads Access | Grant access to GA4/Ads or share read-only credentials. | Long Text | N | Credentials.Analytics | Credential Received → Verify Access |
| Compliance & Privacy | Data Processing Consent | Consent for storing/processing data per Privacy Policy. | Checkbox | Y | Compliance.Consent | Checked → Proceed; Unchecked → Block submission |
| Compliance & Privacy | Regulatory Requirements | Any specific regulations (e.g., HIPAA, GDPR, PCI) we must follow? | Multi-Select | N | Compliance.Regs | Selection → Tag account for controls |
| Billing | Billing Contact & Email | Who receives invoices and receipts? | Text + Email | Y | Billing.Contact; Billing.Email | Form Submitted → Create Contact (Billing) |
| Billing | Payment Method | Choose preferred payment method (Card/ACH). | Select | Y | Billing.Method | Selection → Send payment setup link |
| Billing | Purchase Order / Tax Info | Add PO number or tax exemptions if applicable. | Text | N | Billing.PO_Tax | Form Submitted → Attach to first invoice |


## Email_Templates
_Forms/Automations Workbook_ — Standardized emails tied to events with merge fields and CTAs.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Template Name | Internal name of the template. | Library organization. | Use consistent prefixes. |
| Trigger (Event/Time) | Event/time that sends the email. | Timeliness. | Prefer event-driven over cron. |
| Subject Line | Email subject. | Open rates. | Value-first, no fluff. |
| Purpose / Outcome | Intended result. | Measures success. | Define KPI per email. |
| Audience | Recipients segment. | Personalization. | Use tags/circles/segments. |
| Sender (Role) | From identity. | Trust & deliverability. | Align with relationship owner. |
| Tone/Style | Voice guidelines. | Brand consistency. | Keep human and concise. |
| Key Variables (Merge Fields) | Merge fields used. | Personalization. | Maintain field map. |
| Primary CTA | Main call to action. | Conversion focus. | One CTA per email. |
| SuiteDash Area | Where managed. | Findability. | E.g., Email Campaigns, Messages. |
| Template ID | Internal reference ID. | Governance. | Index in template registry. |
| SLA to Send | Timing requirement. | Experience consistency. | Monitor in dashboards. |
| A/B Variant? | Has test variants? | Optimization. | Document variants & winners. |
| Notes / Links | References. | Context. | Link SOPs & assets. |


## Proposal_Contracts
_Forms/Automations Workbook_ — Proposal/contract templates with approvals and storage locations.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Template Name | Internal name of the template. | Library organization. | Use consistent prefixes. |
| Use Case | Why this automation exists. | Business value. | Tie to KPI. |
| Merge Fields Required | Fields needed for merge. | Prevent broken docs. | Validate before send. |
| Variables Captured on Sign | Data collected at signature. | Reduce back-and-forth. | Map to CRM. |
| Approval Needed (Y/N) | Extra approvals? | Risk control. | Automate approval routes. |
| eSign Method | Signature method. | Compliance & UX. | SuiteDash eSign preferred. |
| Storage Location | Where the signed doc lives. | Auditability. | Centralize archives. |
| Renewal Terms / Auto-Renew? | Contract renewal model. | Revenue predictability. | Make explicit in templates. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Template ID | Internal reference ID. | Governance. | Index in template registry. |


## Automation_Recipes
_Forms/Automations Workbook_ — Implementation-ready recipes with triggers, mappings, retries, rollback.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Automation ID | Unique identifier of the recipe. | Traceability. | Prefix by area (AUTO-, RUNBOOK-). |
| Use Case | Why this automation exists. | Business value. | Tie to KPI. |
| Trigger App/Event | What starts the flow. | Reliability. | Prefer event hooks. |
| Conditions / Filters | Guards to run only when needed. | Avoid noise/errors. | Check tags/status/fields. |
| Source Fields | Incoming data to use. | Mapping accuracy. | Document required vs optional. |
| Destination (App/Action) | Where actions happen. | Integration path. | APIs/endpoints listed. |
| Field Mapping | How source maps to destination. | Data integrity. | Include transforms. |
| Automated Actions | What the automation does. | Time savings. | List side-effects. |
| Retry / Backoff | Error handling strategy. | Reliability. | Exponential backoff recommended. |
| Error Handling | Retries & alerts. | Reliability. | DLQ & escalation. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Test Cases | How to test it. | Quality gates. | Simulated payloads. |
| Rollback Plan | How to undo changes. | Risk control. | Manual steps or reverse flow. |


## SLA_Matrix
_Forms/Automations Workbook_ — Standard SLAs by service/priority with measurement approach.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Service / Area | Operational domain covered by SLA. | Scope clarity. | Keep mutually exclusive. |
| Priority | Severity level. | Response triage. | Define P1/P2/P3 explicitly. |
| Response Time Target | Time to first response. | Customer trust. | Display in tickets. |
| Resolution / Due Target | Time to resolve/complete. | Outcome focus. | Monitor breach counts. |
| Hours of Operation | Support hours. | Expectation setting. | State timezone. |
| Exclusions | Out-of-scope exceptions. | Fairness. | Document holidays, client delays. |
| Measurement Method | How SLA is calculated. | Transparency. | Use system timestamps. |
| Reporting Cadence | How often it's reviewed. | Governance. | Weekly/monthly dashboards. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |

### Row-by-Row Field Reference
| Service / Area | Priority | Response Time Target | Resolution / Due Target | Measurement Method | Reporting Cadence | Owner |
|---|---|---|---|---|---|---|
| Support Tickets | P1 – Critical | ≤ 1 hour | ≤ 4 hours | Ticket timestamps vs SLA | Weekly dashboard | Support Lead |
| Support Tickets | P2 – High | ≤ 4 hours | ≤ 8 hours | Ticket timestamps vs SLA | Weekly dashboard | Support Lead |
| Onboarding |  | Welcome ≤ 2h | Kickoff ≤ 5 biz days | Email send time; Calendar logs | Monthly ops review | Ops Manager |
| Monthly Delivery |  |  | Update by Day 5; Report by Day 7 | Task due dates vs actual | Monthly ops review | PM |


## Escalation_Matrix
_Forms/Automations Workbook_ — Escalation conditions, thresholds, owners, and customer comms.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Condition / Breach | Trigger condition for escalation. | Breach detection. | Map to alerts. |
| T+ Threshold | Elapsed time before escalation. | Urgency control. | Use consistent units. |
| Action | What action to take. | Restores trajectory. | Automate where safe. |
| Escalation Owner | Who leads resolution. | Clear responsibility. | Named role + backup. |
| Notify (Channel) | Where alerts go. | Speed to awareness. | Email/SMS/Slack/etc. |
| Customer Communication | What to say to customers. | Retention & trust. | Use templates. |
| Severity | Impact category. | Prioritization. | Sev1/2/3 mapped to P1/2/3. |

### Row-by-Row Field Reference
| Condition / Breach | T+ Threshold | Action | Escalation Owner | Notify (Channel) | Customer Communication | Severity |
|---|---|---|---|---|---|---|
| P1 ticket open without response | T+1h | Auto-page L2; assign owner | Support Lead | Email/SMS | Immediate status update to client | Sev 1 |
| Kickoff form incomplete | T+48h | Send reminder; offer assistance | CSM | Email | Friendly reminder | Low |
| Overdue task (>24h) | T+24h | Auto-remind assignee | PM | Email |  | Low |
| Overdue task (>48h) | T+48h | Escalate to PM; reassign | Ops Manager | Email/Slack | Apologize & reset expectation if client-facing | Med |


## RACI_Master
_Forms/Automations Workbook_ — Responsibility assignments across key processes.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Process | High-level workflow. | Context. | Tie to SOPs. |
| Task | Specific action within the process. | Clarity. | Make atomic. |
| R (Responsible) | Doer role. | Execution clarity. | Avoid too many Rs. |
| A (Accountable) | Final owner. | Decision authority. | Only one A. |
| C (Consulted) | Advisors/SMEs. | Quality. | Keep short list. |
| I (Informed) | Stakeholders to notify. | Alignment. | Automate notifications. |
| Backup (If R unavailable) | Designated backup role. | Continuity. | Assign & train backups. |
| Notes | Context/help for designers. | Smooth implementation. | Include thresholds, styles, etc. |


## KPI_Tree
_Forms/Automations Workbook_ — KPI definitions, formulas, and ownership.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Category | Area of measurement (Funnel, Sales, etc.) | Structure. | Match dashboard tabs. |
| KPI | Metric name. | Focus. | Use industry-standard labels. |
| Definition / Formula | Exact computation. | Avoids ambiguity. | Show precise math. |
| Data Source(s) | Systems feeding the metric. | Traceability. | List primary & secondary. |
| Target | Desired threshold. | Goal-setting. | Make SMART. |
| Cadence | Update frequency. | Operational rhythm. | Daily/weekly/monthly. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Report Location | Where metric is shown. | Findability. | Link dashboards. |

### Row-by-Row Field Reference
| Category | KPI | Definition / Formula | Data Source(s) | Target | Cadence | Owner | Report Location |
|---|---|---|---|---|---|---|---|
| Funnel | Opt-in Rate | Leads / Landing Page Sessions | GA4; SuiteDash Forms | ≥ 25% | Weekly | Marketing Manager | Funnel Dashboard |
| Sales | Close Rate | Deals Won / SQLs | SuiteDash CRM | ≥ 30% | Monthly | Sales Manager | Sales Dashboard |
| Delivery | On-time Tasks % | Tasks completed by due date / total | SuiteDash Projects | ≥ 90% | Weekly | PM | Ops Dashboard |
| Support | SLA Met % | Tickets within SLA / total | SuiteDash Tickets | ≥ 95% | Weekly | Support Lead | Support Dashboard |
| Finance | Gross Margin | (Revenue - COGS) / Revenue | Stripe; Time Tracking | ≥ 60% | Monthly | Finance | Finance Dashboard |


## Naming_Conventions
_Forms/Automations Workbook_ — Canonical naming patterns for findability and governance.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Entity | Type of asset named. | Consistency. | Docs/Projects/Files. |
| Pattern | Naming pattern to follow. | Findability. | Use placeholders in braces. |
| Example | Concrete example. | Clarity. | Mirror in templates. |
| Applies To | Scope of the pattern. | Boundaries. | Where required. |
| Notes | Context/help for designers. | Smooth implementation. | Include thresholds, styles, etc. |


## Retention_Policy
_Forms/Automations Workbook_ — Data retention periods and legal bases with disposal methods.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Data Type | Kind of data. | Retention/legal impact. | PII/Financial/Files etc. |
| System | System where data lives. | Locator. | SuiteDash/Stripe/etc. |
| Retention Period | How long to keep. | Compliance & cost. | Use months/years. |
| Legal Basis | Why you keep it. | Compliance. | Contractual/Tax/Business necessity. |
| Deletion/Anonymization Method | How to dispose. | Security. | Secure delete/anonymize with audit. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |


## Training_Curriculum
_Forms/Automations Workbook_ — Role curricula, assessments, and reviewers.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Role | Job function. | Training track. | PM/CSM/Admin etc. |
| Module / SOP | Training module name. | Curriculum. | Tie to SOP IDs. |
| Content Summary | What the module covers. | Expectations. | Keep outcome-oriented. |
| Format | Delivery type. | Engagement. | Video/SOP/Lab. |
| Duration | Time to complete. | Planning. | hh:mm or hours. |
| Assessment | Evaluation method. | Mastery. | Quiz/roleplay/lab. |
| Completion Criteria | What qualifies as complete. | Quality. | Score thresholds + demos. |
| Reviewer | Approver of completion. | Quality assurance. | Manager/Lead. |


## Dashboards_Spec
_Forms/Automations Workbook_ — Dashboard widget lists, sources, and refresh cadence.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Dashboard Name | Name of dashboard. | Navigation. | Use business verbs. |
| Purpose | What decisions it supports. | Value. | Align with KPIs. |
| Widgets / Metrics | Displayed widgets. | Design. | List prioritized KPIs. |
| Data Source | Where data comes from. | Reliability. | Name connectors. |
| Filters | Available filters. | Self-serve slicing. | Time, owner, client, etc. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Update Frequency | Refresh cadence. | Expectations. | Real-time/daily/weekly. |
| Notes | Context/help for designers. | Smooth implementation. | Include thresholds, styles, etc. |


## Offer_Workbook
_Forms/Automations Workbook_ — Hormozi value equation, offer stack, and Brunson funnel scripts.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Section | High-level grouping within a form. | Improves usability & completion. | Map to page/section headers. |
| Element | Item within a framework (role/data/step). | Structure. | Rows nested under a domain. |
| Prompt / Instructions | (Describe) | (Implications) | (Implementation) |
| Example | Concrete example. | Clarity. | Mirror in templates. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Status | (Describe) | (Implications) | (Implementation) |


## Visual_Workflows
_Forms/Automations Workbook_ — Designer-ready blueprints for diagrams used in the playbook.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Diagram Type | (Describe) | (Implications) | (Implementation) |
| Process / Area | What is being tested. | Coverage. | Map to process & phase. |
| Swimlanes / Roles | (Describe) | (Implications) | (Implementation) |
| Key Steps / Nodes | (Describe) | (Implications) | (Implementation) |
| Decision Points | (Describe) | (Implications) | (Implementation) |
| Inputs/Outputs | (Describe) | (Implications) | (Implementation) |
| Notes for Designer | (Describe) | (Implications) | (Implementation) |


## Visual_SVG_Index
_Forms/Automations Workbook_ — Index pointing to exported SVG diagrams.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Diagram | (Describe) | (Implications) | (Implementation) |
| File (relative path) | (Describe) | (Implications) | (Implementation) |
| Description | (Describe) | (Implications) | (Implementation) |
| Last Updated | Timestamp for governance. | Change control. | Update on edit. |


## CRM_Custom_Fields
_Forms/Automations Workbook_ — CRM custom fields for Hormozi & CLOSER frameworks with prompts and validation.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Group | Logical grouping of CRM custom fields. | Organization. | Hormozi_Value/CLOSER etc. |
| Field Name | Exact CRM field API/name. | Integration stability. | Avoid spaces if used via API. |
| Data Type | Kind of data. | Retention/legal impact. | PII/Financial/Files etc. |
| Prompt / Description (Copy into SuiteDash) | User-facing instruction. | Data quality. | Paste into field help text. |
| Validation / Format | Allowed ranges/formats. | Prevents bad data. | E.g., 1–10 integer. |
| Required? | Must the field be completed? | Pipeline enforcement. | Set in forms & stages. |
| Default | Default value if any. | Speed & consistency. | Use only when harmless. |
| Maps To (Internal Notes) | How the field is used elsewhere. | Traceability. | Calculations, merges, segments. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Last Updated | Timestamp for governance. | Change control. | Update on edit. |

### Row-by-Row Field Reference
| Group | Field Name | Data Type | Prompt / Description (Copy into SuiteDash) | Validation / Format | Required? | Maps To (Internal Notes) |
|---|---|---|---|---|---|---|
| EXPLANATION: CRM custom fields to power Hormozi's value equation and the CLOSER framework. Use these EXACT names/types in SuiteDash (CRM → Settings → Custom Fields). Copy the Prompt/Description into each field so users know what to enter. |  |  |  |  |  |  |
| Hormozi_Value | Dream_Outcome_Score | Number | Rate the dream outcome (1–10). Higher = more desirable. | Integer 1–10 | Y | Used in Calculated_Value |
| Hormozi_Value | Likelihood_Score | Number | Rate how likely we can deliver (1–10). | Integer 1–10 | Y | Used in Calculated_Value |
| Hormozi_Value | Time_Delay_Days | Number | Estimated # of days until the client sees the first tangible result. | Integer ≥0 | Y | Used in Calculated_Value |
| Hormozi_Value | Effort_Score | Number | Client effort required (1–10). Lower is better for value. | Integer 1–10 | Y | Used in Calculated_Value |
| Hormozi_Value | Calculated_Value | Number (Calculated) | Auto-calculated score: (Dream_Outcome_Score × Likelihood_Score) ÷ (Time_Delay_Days × Effort_Score). | Read-only if possible | N | If SuiteDash can't calc natively, compute externally (n8n/Activepieces) and write back |
| CLOSER | Primary_Pain_Point | Multi-Line Text | Describe the primary pain in the customer’s own words. |  | Y | Discovery notes, informs messaging |
| CLOSER | Desired_Outcome | Multi-Line Text | What outcome would be a clear win for them? |  | Y | Aligns with Dream_Outcome_Score |
| CLOSER | Problem_Label | Single Line Text | Give the problem a short label your team can repeat. |  | N | Used in proposals/emails |
| CLOSER | Impact_Level | Single Line Text | Business impact (e.g., Revenue loss, Compliance risk). |  | N | For prioritization and ROI calc |
| CLOSER | Previous_Solutions_Tried | Multi-Line Text | What has been tried before? Why did it fail? |  | N | Objection handling & positioning |
| CLOSER | Failure_Reasons | Multi-Line Text | List likely reasons past solutions failed. |  | N | Create rebuttals and plan to avoid |
| CLOSER | Demo_Date | Date | Scheduled demo date. | YYYY-MM-DD | N | Used by pipeline stage automations |
| CLOSER | Stakeholders_Present | Multi-Line Text | Who attended the demo? Roles & influence. |  | N | For MEDDICC/consensus tracking |
| CLOSER | Objections_Raised | Multi-Line Text | List objections and context. |  | N | Feeds objection library |
| CLOSER | Responses_Given | Multi-Line Text | Your responses to the objections. |  | N | Improves scripts over time |
| CLOSER | Decision_Factors | Multi-Line Text | Top decision criteria (ranked). |  | N | Align with proposal and CTA timing |
| CLOSER | Close_Date | Date | Expected close date. | YYYY-MM-DD | N | Forecasting and SLA |


## Pipeline_CLOSER
_Forms/Automations Workbook_ — CLOSER pipeline stages with probabilities, criteria, and automations.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Stage | Pipeline stage or lifecycle level. | Context. | Clarify/Label/Overview… |
| Probability | Win probability for forecasting. | Pipeline health. | Tune from historical data. |
| Entry Criteria | Required condition to enter stage. | Prevents sloppy pipelines. | Automate enforcement. |
| Exit Criteria | Required condition to exit stage. | Defines progress. | Block exit if unmet. |
| Required Fields (Enforce) | Fields that must be set in stage. | Data completeness. | Use stage requirements. |
| Stage Automations (Suggested) | Actions to auto-run at stage entry. | Speed & consistency. | Manage Automations menu. |
| SLA / Timer | Time expectations for stage. | Reduces stall. | Set reminders/escalation. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |

### Row-by-Row Field Reference
| Stage | Probability | Entry Criteria | Exit Criteria | Required Fields (Enforce) | Stage Automations (Suggested) | SLA / Timer |
|---|---|---|---|---|---|---|
| EXPLANATION: Deal pipeline with stage probabilities, entry/exit criteria, required fields, and suggested automations. Configure in SuiteDash: CRM → Deals → Pipelines → Manage Stages. |  |  |  |  |  |  |
| Clarify | 10% | Lead captured; Primary_Pain_Point populated | Booked discovery or Qualified | Primary_Pain_Point | Auto-assign SDR; send SOS nurture | First touch ≤24h |
| Label | 20% | Problem_Label + Desired_Outcome set | Discovery completed | Problem_Label; Desired_Outcome | Create discovery task + script link | Discovery booked ≤3d |
| Overview | 35% | Demo scheduled; stakeholders identified | Demo delivered | Demo_Date; Stakeholders_Present | Send demo prep email; calendar invite | Demo ≤7d from booking |
| Sell | 50% | Objections documented; Responses drafted | Proposal sent | Objections_Raised; Responses_Given | Create proposal draft from template | Proposal ≤24h post-demo |
| Explain | 70% | Decision_Factors captured; terms discussed | Verbal yes / contract redlines | Decision_Factors | Schedule legal review; send FAQ/ROI 1-pager | Follow-up every 48h |
| Reinforce | 90% | Proposal sent; close date set | Signed & paid | Close_Date | Send social proof; confirm onboarding schedule | Close ≤14d from proposal |


## Automation_Templates_Detail
_Forms/Automations Workbook_ — Templates to automate onboarding and value calculations.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Template Name | Internal name of the template. | Library organization. | Use consistent prefixes. |
| Purpose | What decisions it supports. | Value. | Align with KPIs. |
| Proposed Trigger | Suggested event to run it. | Reliability. | Prefer event triggers. |
| Trigger Logic Notes | How to filter/guard trigger. | Prevent misfires. | Use tags and field-change filters. |
| Actions | What the template does. | Operational result. | Portal invites, emails, tasks. |
| Fallback/Workaround | What to do if native limits exist. | Resilience. | Webhooks & external flows. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |

### Row-by-Row Field Reference
| Template Name | Purpose | Proposed Trigger | Trigger Logic Notes | Actions | Fallback/Workaround | Owner |
|---|---|---|---|---|---|---|
| EXPLANATION: Templates to automate onboarding and value notifications. Set specific triggers in SuiteDash template settings. If native conditional math is limited, use webhooks + n8n/Activepieces for calculations and circle assignments. |  |  |  |  |  |  |
| New Client Onboarding – AI | Invite portal + welcome email personalization | Contact Created (Tag=Client or Deal Won) | Prefer Deal Won → Contact Created via auto-provision | Send portal invite; send Welcome email; start Onboarding FLOW | If invite fails, manual resend checklist | Ops Admin |
| Value Equation Calculator | Notify team with Calculated_Value & route contact | Contact Updated (Fields: Dream_Outcome_Score/Likelihood/Time/Effort) | Use webhook on update → external calc → write back Calculated_Value | Email internal summary; tag High-Value/Low-Value; assign SDR/AE | Activepieces/n8n to compute & call SuiteDash API | Sales Ops |


## External_Automations
_Forms/Automations Workbook_ — Webhook-first n8n/Activepieces designs for calculations & routing.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Flow Name | Integration flow name. | Operations. | Prefix by domain. |
| Trigger (SuiteDash) | SuiteDash event firing webhook. | Coupling. | Contact updated, deal moved, etc. |
| Incoming Payload (Keys) | JSON keys expected. | Mapping. | Document for tests. |
| Processing Logic | How to transform & compute. | Determinism. | Include guardrails. |
| SuiteDash API Calls | Endpoints called. | Implementation. | Method/URL placeholders. |
| Error Handling | Retries & alerts. | Reliability. | DLQ & escalation. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |

### Row-by-Row Field Reference
| Flow Name | Trigger (SuiteDash) | Incoming Payload (Keys) | Processing Logic | SuiteDash API Calls | Error Handling | Owner |
|---|---|---|---|---|---|---|
| EXPLANATION: Webhook-first integrations to compute Calculated_Value and assign circles. Build these in Activepieces or n8n; secure with secret tokens and IP allowlists. |  |  |  |  |  |  |
| Calc_Value_and_Route | Contact Updated (fields include scores & Time_Delay_Days) | contact_id, Dream_Outcome_Score, Likelihood_Score, Time_Delay_Days, Effort_Score | value = (Dream*Likelihood)/(max(1,Time_Delay_Days)*max(1,Effort)); threshold=≥2.5 → High-Value | PATCH /contacts/{id} (Calculated_Value); POST /circles/{High/Low}/members | Retry 3x; dead-letter queue; email Sales Ops | Sales Ops |
| Pipeline_Stage_Enforcer | Deal Moved Stage | deal_id, new_stage, contact_id | If entering 'Overview' ensure Demo_Date set; otherwise push reminder to AE | POST message to AE; create task; optionally revert stage if violation | Escalate to Sales Manager after 24h | Sales Ops |


## Maintenance_Checks
_Forms/Automations Workbook_ — Monthly audit checklist for health of fields, pipeline, and automations.

### Columns Dictionary
| Column | Meaning | Implications | Implementation |
|---|---|---|---|
| Area | Domain of the maintenance check. | Coverage. | Fields/Pipeline/Automations/etc. |
| Check | What to verify. | Audit repeatability. | Write pass criteria. |
| Method | How to check it. | Consistency. | Point-and-click path. |
| Pass/Fail | (Describe) | (Implications) | (Implementation) |
| Issues Found | Notes on deviations. | Remediation planning. | Link tasks. |
| Owner | Maintainer of the asset. | Accountability. | Role-level ownership. |
| Next Action / Due | Assigned fix and due date. | Follow-through. | Create governance tasks. |

### Row-by-Row Field Reference
| Area | Check | Method | Owner | Next Action / Due |
|---|---|---|---|---|
| EXPLANATION: Monthly checks to ensure fields, stages, and automations still reflect reality. Use this like an audit list and record outcomes. |  |  |  |  |
| Custom Fields | All required fields visible in forms & stage requirements | Open Manage Stages → verify Required Fields | Sales Ops |  |
| Pipeline | Stage probabilities reflect actuals | Compare last 90d conversion rates | Sales Manager |  |
| Automations | Triggers fire and logs are clean | Review automation logs & exceptions | Ops Admin |  |
| External | Webhooks reliable (no backlog) | Check n8n/Activepieces runs & DLQ | Sales Ops |  |
| Security | Circle assignment correct for high-value segment | Sample 10 high-value contacts | Ops Manager |  |

## Calculations & Examples
### Calculated_Value (Hormozi)
**Formula:** `Calculated_Value = (Dream_Outcome_Score × Likelihood_Score) ÷ (max(1, Time_Delay_Days) × max(1, Effort_Score))`

**Example:** Dream=9, Likelihood=7, Time_Delay=14 days, Effort=3 →  (9×7)/(14×3) = 63/42 = **1.5**

**Implementation:** SuiteDash does not natively compute across multiple fields reliably; use a webhook on Contact Updated to n8n/Activepieces, compute the value, then write it back and route to circles.

### KPI Formulas
- **Opt-in Rate** = Leads / Landing Page Sessions
- **Close Rate** = Deals Won / SQLs
- **On-time Tasks %** = Tasks completed by due date / total tasks
- **SLA Met %** = Tickets within SLA / total tickets
- **Gross Margin** = (Revenue – COGS) / Revenue

## Implementation Guides
### Creating Custom Fields in SuiteDash
1) Navigate: **CRM → Settings → Custom Fields**
2) Create fields exactly as listed in **CRM_Custom_Fields** (use the prompts/validation).
3) Add critical fields to forms and pipeline stage requirements to enforce data quality.

### Building the CLOSER Pipeline
1) Go to **CRM → Deals → Pipelines** and create 'CLOSER Sales Process'.
2) Under **Manage Stages**, add each stage & probability.
3) For each stage, configure **Required Fields** and **Manage Automations** per `Pipeline_CLOSER` and `Sales_CLOSER_Automations` sheets.

### Automations
- **New Client Onboarding – AI**: Trigger on **Deal Won** or **Contact Created (Tag=Client)** → Actions: send portal invite, welcome email, start FLOW.
- **Value Equation Calculator**: Trigger **Contact Updated** (watch target fields) → Webhook to **n8n/Activepieces** → compute `Calculated_Value` → PATCH contact → assign circle.

### External Automation (n8n/Activepieces) Pseudocode
```
OnWebhook(ContactUpdated):
  read fields: Dream, Likelihood, TimeDelay, Effort
  value = (Dream*Likelihood)/(max(1, TimeDelay)*max(1, Effort))
  suiteDash.PATCH('/contacts/{id}', {Calculated_Value: value})
  if value >= THRESHOLD:
     suiteDash.POST('/circles/high/members', {contact_id})
  else:
     suiteDash.POST('/circles/low/members', {contact_id})
```

### SLA Measurement in Practice
- Use system timestamps for **first response** and **resolution** events.
- Exclude documented **Exclusions** (holidays, client delays) in reporting.
- Surface breach counts and trends on the **Support Dashboard**.

## Governance & Maintenance
- Update **Version / Last Updated** in sheets when making changes.
- Run the **Maintenance_Checks** monthly; create tasks for any gaps found.
- Audit role access in **Security_Roles** quarterly; verify least privilege remains true.

## Glossary
- **Circle**: SuiteDash grouping of contacts for permissions/segments.
- **FLOW**: Guided sequence of steps/forms inside SuiteDash.
- **RACI**: Responsibility model — Responsible, Accountable, Consulted, Informed.
- **DLQ**: Dead-letter queue for failed automation events.
- **DSAR**: Data Subject Access Request under privacy regulations.
