# Chapter 20 Implementation Guide: Automation Architecture

**Objective**: Build a robust, redundant automation infrastructure using KonnectzIT, Activepieces, and Make.com.
**Timeline**: 4 Weeks (Phase 1-4)
**Prerequisites**: SuiteDash Account, KonnectzIT Account, Server for Activepieces (optional but recommended)

---

## Phase 1: KonnectzIT Setup & Core Workflows (Week 1)

### 1.1 Platform Configuration
- [ ] **Account Setup**: Configure company info, timezone, currency.
- [ ] **API Keys**: Generate keys for SuiteDash and Directories.
- [ ] **Webhooks**: Create endpoints for:
  - `contact-created`
  - `payment-received`
  - `form-submission`

### 1.2 Implement Core Workflows
Refer to `workflow-definitions.md` for detailed steps.
- [ ] **New Lead Automation**: Connect SuiteDash webhook → Enrichment → Routing → Email.
- [ ] **Invoice Payment**: Connect Stripe webhook → SuiteDash update → Accounting sync.
- [ ] **Directory Lead Capture**: Connect Form webhook → Contact creation → Deal creation.

---

## Phase 2: Activepieces Self-Hosting (Week 2)

### 2.1 Server Setup
- [ ] **Provision Server**: Ubuntu 20.04+, 2 vCPU, 4GB RAM.
- [ ] **Install Docker**: Run installation scripts.
- [ ] **Deploy Activepieces**:
  - Copy `activepieces-docker-compose.yml` to server.
  - Configure `.env` with secure password.
  - Run `docker-compose up -d`.

### 2.2 Configuration
- [ ] **Nginx Proxy**:
  - Copy `activepieces-nginx.conf` to `/etc/nginx/sites-available/`.
  - Enable site and install SSL with Certbot.
- [ ] **Initial Setup**: Create admin account and configure SMTP.

### 2.3 Custom Functions
- [ ] **Implement Code Pieces**:
  - Use `custom-functions.js` for Lead Scoring logic.
  - Implement Data Validation scripts.

---

## Phase 3: Make.com Advanced Scenarios (Week 3)

### 3.1 Complex Data Processing
- [ ] **Directory Lead Conversion**:
  - Implement multi-step enrichment and scoring.
  - Set up error handling routers.
- [ ] **Data Transformation**:
  - Create scenarios for normalizing contact data.
  - Implement deal value calculation logic.

### 3.2 Reporting Automation
- [ ] **Aggregate Metrics**:
  - Connect SuiteDash, Stripe, and Email APIs.
  - Create daily summary report scenario.

---

## Phase 4: Integration & Monitoring (Week 4)

### 4.1 System Integration
Refer to `integration-map.md`.
- [ ] **Verify Connections**: Ensure all systems are communicating.
- [ ] **Test Data Flow**: Run end-to-end tests for Leads, Payments, and Invoices.

### 4.2 Monitoring & Alerts
- [ ] **Dashboard**: Set up monitoring for workflow execution rates.
- [ ] **Alerts**: Configure email/Slack alerts for:
  - Workflow failures > 10%.
  - API authentication errors.
  - Payment processing failures.

---

## Resources
- `activepieces-docker-compose.yml`: Deployment configuration.
- `custom-functions.js`: JavaScript logic for automation pieces.
- `workflow-definitions.md`: Detailed logic for all workflows.
- `integration-map.md`: Visual guide to system connections.
