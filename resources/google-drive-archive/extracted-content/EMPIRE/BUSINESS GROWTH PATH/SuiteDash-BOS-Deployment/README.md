# SuiteDash BOS Deployment Bundle (Home Improvement Services)

This bundle contains ready-to-customize assets to run ALL service businesses on **SuiteDash** as your BOS,
integrated with **Boost.space (Make)**, **n8n**, **ActivePieces**, **ActiveCampaign**, **Acumbamail**, **SalesNexus**,
**TruConversion**, **SalesPanel**, **AITable**, **Blue**, **Publy**, **GraphQL**, and **NoCode-X**.

## Quick Start
1. Duplicate this bundle and replace placeholders in `env/.env.example` with your credentials.
2. Import **CRM pipeline CSV** into SuiteDash (`suiteDash-templates/crm_pipeline.csv`).
3. Import **email HTML** into ActiveCampaign, Acumbamail, and/or SalesNexus.
4. Import **automation JSONs** into n8n, ActivePieces, and Make (Boost.space) and set environment variables.
5. (Optional) Deploy **GraphQL** queries behind your gateway and wire **NoCode-X** specs to your UI.
6. Use the Mermaid diagrams in `diagrams/` to brief your team (render in Markdown tools that support Mermaid).

## Notes
- JSON workflows are **importable skeletons** with realistic node structures; fill endpoint URLs, credentials, tags, and IDs.
- All templates are **brand-agnostic**; rebrand per business.
- AITable CSV schemas define the minimum viable columns for unified reporting.
