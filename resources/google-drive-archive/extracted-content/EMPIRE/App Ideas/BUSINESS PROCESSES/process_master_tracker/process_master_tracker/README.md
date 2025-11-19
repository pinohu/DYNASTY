# Master Process Tracker (Notion / Airtable Import)
Generated: 2025-08-13T01:26:24.677294 UTC

## What’s Inside
- CSV tables for **Business Units**, **Processes**, **Process–Business Mappings** (with RACI & maturity), **SOPs**, **Steps**, **Metrics**, **Automations**, **Templates**, **Risks**, **Audits**, **Training**, **Compliance**
- A reusable **SOP Template** and generic **email/checklist templates**
- Placeholder SOP markdown files for every process

## Recommended Setup
1) **Create a Notion database** (or Airtable Base) per CSV or import all CSVs and **relate** by keys:
   - `Business_Units` ←→ `Process_Mappings.BusinessID`
   - `Processes` ←→ `Process_Mappings.ProcessID`
   - `Processes` ←→ (`SOPs`, `Metrics`, `Automations`, `Templates`, `Risks`, `Audits`, `Training`, `Compliance`) via `ProcessID`
2) Configure **relations** and **rollups** in Notion/Airtable to see:
   - For a Business Unit: related Processes (via Mappings), counts by Priority, average Maturity
   - For a Process: linked SOP(s), Steps, Metrics, Risks, Automations, etc.
3) Use the **SOP Template** for each process and fill RACI, KPIs, and real links.
4) Assign **owners**: Each Process should have a named Process Owner; each SOP has an Owner and Review date
5) Establish a **Quarterly Audit** routine and track completion in `Audits.csv`

## Suggested Views
- **By Business Unit**: High-priority processes with Maturity ≤ 2 (to focus enablement)
- **By Category**: All processes grouped by `Process_Category`
- **Compliance**: Processes with privacy/regulatory requirements
- **Automation Backlog**: Steps marked `Automation_Candidate = Candidate`

## How to Import
- **Notion**: New page → Table → `…` → *Merge with CSV* (or *Create new*). Repeat for each CSV. Then add relation properties.
- **Airtable**: New Base → *Import a spreadsheet* (CSV). Create linked record fields using ProcessID/BusinessID keys.

## Next Steps
- Customize Business Units (names/domains) and refine Lifecycle Stage
- For each Business Unit, filter Mappings to **Priority = High**; finalize RACI to real people
- For top 3 Processes per Business Unit, **complete SOPs** and run a pilot
- Add real metrics & automate dashboards

—
This pack is tool-agnostic and designed for rapid deployment.