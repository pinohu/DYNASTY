# MCP Server Configuration Guide

I have successfully installed the following MCP servers:
1.  **PostgreSQL** (for database access)
2.  **GitHub** (for repository management)
3.  **Brave Search** (for web searching)
4.  **Google Drive** (for accessing documents)

## Next Steps: Configuration

To enable these, you need to add them to your Cursor MCP settings.

1.  Open **Cursor Settings** (Ctrl+Shift+J or Gear Icon > Settings).
2.  Go to **Features** > **MCP**.
3.  Click **"Add new MCP server"** for each of the following:

### 1. PostgreSQL
*   **Name:** `postgres`
*   **Type:** `command`
*   **Command:** `node C:/Users/polyc/AppData/Roaming/npm/node_modules/@modelcontextprotocol/server-postgres/dist/index.js postgresql://USER:PASSWORD@HOST:PORT/DATABASE`
    *   *Replace the URL with your actual Supabase connection string.*

### 2. GitHub
*   **Name:** `github`
*   **Type:** `command`
*   **Command:** `node`
*   **Args:**
    *   `C:/Users/polyc/AppData/Roaming/npm/node_modules/@modelcontextprotocol/server-github/dist/index.js`
*   **Environment Variables:**
    *   `GITHUB_PERSONAL_ACCESS_TOKEN`: `your_token_here`
    *   *(Get a token from https://github.com/settings/tokens with `repo` permissions)*

### 3. Brave Search
*   **Name:** `brave-search`
*   **Type:** `command`
*   **Command:** `node`
*   **Args:**
    *   `C:/Users/polyc/AppData/Roaming/npm/node_modules/@modelcontextprotocol/server-brave-search/dist/index.js`
*   **Environment Variables:**
    *   `BRAVE_API_KEY`: `your_key_here`
    *   *(Get a free key from https://api.search.brave.com/app/keys)*

### 4. Google Drive
*   **Name:** `gdrive`
*   **Type:** `command`
*   **Command:** `node`
*   **Args:**
    *   `C:/Users/polyc/AppData/Roaming/npm/node_modules/@modelcontextprotocol/server-gdrive/dist/index.js`
*   *Note: On first use, this may ask for authentication in the logs.*

---

## Verification
After adding them, the status indicator next to each server in settings should turn green. If it stays red, check the "Output" tab in Cursor (select "MCP" from the dropdown) to see error messages.

