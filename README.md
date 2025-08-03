# a5c Seed Template

> Transform your repository into an intelligent development environment with AI agents

This template sets up an a5c-powered repository where AI agents become part of your development team. Instead of coding alone, you'll work with intelligent agents that handle tasks, review code, fix builds, and implement features.

## 🚀 Quick Setup (5 minutes)

### Prerequisites
- GitHub account
- API key from one of these providers:
  - [OpenAI](https://platform.openai.com/api-keys) - Reliable, good documentation
  - [Anthropic Claude](https://console.anthropic.com/account/keys) - Advanced reasoning
  - [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service) - Enterprise-ready, integrated billing
  - [Google Gemini](https://aistudio.google.com/app/apikey) - Fast and affordable

### Setup Steps

1. **Use this template** 
   - Click "Use this template" to create your repository
   - Name your repository and make it private if needed
   - **Quick check**: Go to Settings → General → Features and ensure both "Issues" and "Actions" are enabled ✅

2. **Configure GitHub Permissions**
   
   **⚠️ CRITICAL: Without these permissions, agents cannot create PRs or make changes!**
   
   - **Set Permissions**: Settings → Actions → General
     - Select **"Read and write permissions"**
     - Check **"Allow GitHub Actions to create and approve pull requests"**
   
   - **Organization Visibility** (if using GitHub organization):
     - If your repository is in an organization, make yourself a public member
     - Go to: `https://github.com/orgs/your-org-name/people`
     - Settings → Member privileges → Make yourself visible
     - Example: `https://github.com/orgs/roccarnd/people`

3. **Configure your AI provider**
   - Go to Settings → Secrets and variables → Actions
   - Add your API key as a **Secret**:
     - **OpenAI**: `OPENAI_API_KEY`
     - **Claude**: `ANTHROPIC_API_KEY`  
     - **Azure OpenAI**: `AZURE_OPENAI_API_KEY`
     - **Gemini**: `GEMINI_API_KEY`
   - Add provider selection as a **Variable**:
     - Name: `A5C_CLI_TOOL`
     - Value: `codex` (OpenAI) | `claude` (Anthropic) | `azure_codex` (Azure) | `gemini` (Google)
   - **For Azure OpenAI only**: Also add variable `AZURE_OPENAI_PROJECT_NAME` with your Azure project name

4. **Initialize Your Team**
   - Define the project requirements (prompt) in the GitHub repo description field
   - Create these 2 initial issues to activate your agents:

   **Issue #1: Seed the Project**
   ```
   @project-seeder-agent start, the initial description is in the project description.
   ```

   **Issue #2: Install Team**
   ```
   @team-installer-agent Install all the relevant missing agent from the registry.
   ```

> 💡 **Pro tip**: Paid GitHub users can set API keys and variables at the organization level for all repositories

## 👥 Your AI Development Team

After setup, you'll have access to these agents:

| Agent | Purpose | Usage |
|-------|---------|-------|
| `@team-installer-agent` | Installs other agents for your project | `@team-installer-agent install developer-agent` |
| `@developer-agent` | General development tasks and features | `@developer-agent add user authentication` |
| `@producer-agent` | Creates and manages project content | `@producer-agent create API documentation` |
| `@validator-agent` | Tests and validates code quality | `@validator-agent review security in auth module` |
| `@build-fixer-agent` | Fixes build and CI/CD issues | `@build-fixer-agent fix failing tests` |
| `@content-writer-agent` | Creates documentation and content | `@content-writer-agent write README for utils` |
| `@conflict-resolver-agent` | Resolves merge conflicts | `@conflict-resolver-agent resolve conflicts in PR #123` |
| `@azure-sre-engineer-agent` | Azure infrastructure and operations | `@azure-sre-engineer-agent setup deployment pipeline` |

## 💼 How to Work with a5c

### 1. Create Issues for Tasks
Open GitHub issues describing what you want. Be specific about requirements:

```markdown
**Example:**
@developer-agent

Add a user dashboard with:
- Profile editing form
- Activity timeline
- Dark/light mode toggle
- Responsive design for mobile

Use React components and Tailwind CSS styling.
```

### 2. Review Agent Work
- Agents create pull requests with their implementations
- Review the code, leave feedback, request changes
- Agents learn from your comments and improve over time
- **Response time**: Agents typically respond within 1-5 minutes
- Merge when you're satisfied with the work

### 3. Monitor Progress
- Check the **Actions** tab to see agent execution logs
- Track CI/CD results and deployment status
- Agents automatically fix failing tests and builds

### 4. Iterate and Scale
- Comment on issues for refinements
- Discuss architecture decisions in PRs
- Let agents learn from your feedback patterns

## 📝 Initial Workflow for a New Project

Open tickets to:

1. **Seed the Project**
   ```
   @project-seeder-agent start, the initial description is in the project description.
   ```

2. **Install Team**
   ```
   @team-installer-agent Install all the relevant missing agent from the registry.
   ```

## 📝 Example Workflows

### Add a New Feature
```markdown
@developer-agent

Create a user authentication system with:
- Email/password login
- JWT tokens for session management
- Password reset functionality
- Protected routes middleware

Follow security best practices and add comprehensive tests.
```

### Fix a Bug
```markdown
@build-fixer-agent

The CI pipeline is failing on the `test:integration` step. 
The error mentions database connection issues in the test environment.
Please investigate and fix the test configuration.
```

### Create Documentation
```markdown
@content-writer-agent

Create API documentation for the user management endpoints in `/src/api/users/`.
Include request/response examples, error codes, and authentication requirements.
Format as OpenAPI/Swagger specification.
```

### Security Review
```markdown
@validator-agent

Please review the authentication system in `/src/auth/` for potential security vulnerabilities.
Focus on:
- Password hashing implementation
- JWT token handling
- Input validation
- Session management

Provide recommendations for any issues found.
```

## 🎯 What to Expect

### After Setup
1. **Automatic Issues**: a5c may create initial setup issues for you
2. **Team Installation**: The team installer sets up relevant agents
3. **Active Development**: Agents respond to your issues with PRs
4. **Continuous Improvement**: Agents learn from your feedback
5. **Full Workflow**: Issues → Agent Work → PRs → Review → Merge

### Your Repository Becomes
- **Intelligent**: Agents understand your codebase and patterns
- **Responsive**: Issues get addressed automatically
- **Learning**: The system improves based on your feedback
- **Scalable**: Add more agents as your project grows

## ⚠️ Cost Awareness

**Before You Launch**: A full-featured and complex project can nudge toward $20-50 in AI API usage. This represents tremendous value for what used to be months of development work, but consider setting usage limits in your AI provider dashboard.

### Provider Cost Comparison
- **OpenAI**: ~$10-30 for typical projects, reliable pricing
- **Claude**: ~$15-40 for typical projects, advanced reasoning
- **Azure OpenAI**: ~$10-30 for typical projects, enterprise billing through Azure account
- **Gemini**: ~$5-20 for typical projects, fast and affordable option

## 🔧 Troubleshooting

### Agents Not Responding?
1. Check the **Actions** tab for execution logs
2. Verify your API key is correctly set in repository secrets
3. Ensure the issue mentions an agent with the `@` symbol
4. **Critical**: Verify that GitHub Actions is enabled in Settings → General → Features
5. **Check GitHub Actions permissions** (most common issue): Settings → Actions → General → "Read and write permissions"
6. **Check organization visibility** (if using GitHub org): Make yourself a public member
7. **Manual activation**: Try creating an issue with `@team-installer-agent activate` to manually trigger the system

### High API Costs?
- Set usage limits in your AI provider dashboard (OpenAI/Anthropic/Azure/Google)
- Be more specific in issue descriptions to reduce back-and-forth
- Use smaller, focused tasks rather than large feature requests
- Consider switching to a more cost-effective provider like Gemini

### Build Failures?
- The `@build-fixer-agent` automatically addresses CI/CD issues
- Check if agents are conflicting - review open PRs
- Ensure your repository has proper test configuration

### Manual Activation
If agents don't respond automatically:
```
@team-installer-agent activate
```

## 📚 Resources

- **Documentation**: [a5c.readthedocs.io](https://a5c.readthedocs.io/en/latest/)
- **Agent Registry**: [github.com/a5c-ai/registry](https://github.com/a5c-ai/registry)
- **Main Website**: [a5c.ai](https://a5c.ai)

## 🤝 Contributing

This template is part of the a5c ecosystem. To contribute:
1. Fork this repository
2. Make your improvements
3. Submit a pull request
4. Agents will help review and integrate your changes!

---

## 🎉 Welcome to the Future of Development

Your repository is now **alive**. Issues become tasks. Pull requests become conversations. Code becomes collaborative. Welcome to development with a5c.

**Ready to start?** Create your first issue and tag an agent! 🚀
