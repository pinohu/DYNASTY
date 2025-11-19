# Activepieces Self-Hosting Setup Guide

## Overview
Activepieces serves as the backup automation platform for the Ohu-PNR Dynasty Empire. Self-hosting ensures data sovereignty, cost control, and reliability.

## Prerequisites
- **Server**: VPS (DigitalOcean, AWS, etc.) with 2+ vCPUs, 4GB+ RAM.
- **OS**: Ubuntu 20.04+ or Debian 11+.
- **Domain**: Subdomain pointed to server IP (e.g., `automation.pnrholdings.com`).

## Installation Steps

### 1. Server Preparation
SSH into your server and update the system:
```bash
ssh root@your-server-ip
apt update && apt upgrade -y
```

Install Docker and Docker Compose:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y
```

### 2. Activepieces Deployment
Create the directory structure:
```bash
mkdir -p /opt/activepieces
cd /opt/activepieces
```

Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: activepieces
      POSTGRES_USER: activepieces
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  activepieces:
    image: activepieces/activepieces:latest
    ports:
      - "80:80"
    environment:
      AP_POSTGRES_HOST: postgres
      AP_POSTGRES_PORT: 5432
      AP_POSTGRES_USERNAME: activepieces
      AP_POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      AP_POSTGRES_DATABASE: activepieces
      AP_FRONTEND_URL: https://automation.pnrholdings.com
      AP_WEBHOOK_URL: https://automation.pnrholdings.com
    depends_on:
      - postgres
    restart: unless-stopped

volumes:
  postgres_data:
```

### 3. Configuration
Create a `.env` file to store secrets:
```bash
POSTGRES_PASSWORD=your_secure_password_here
```

### 4. Start Services
Launch the stack:
```bash
docker-compose up -d
```

### 5. Verification
- Navigate to `http://your-server-ip` (or domain if configured with reverse proxy).
- Create an admin account.
- Verify webhook endpoints are accessible.

## Maintenance
- **Backup**: Regularly backup the `postgres_data` volume.
- **Updates**: Run `docker-compose pull && docker-compose up -d` to update.

