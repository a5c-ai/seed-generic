# a5c AI Development Platform - Seed Repository

Welcome to a5c! This repository template gets you started with AI-powered development agents that work through GitHub Issues and Pull Requests.

## 🚀 Quick Setup

### 1. Required Configuration

**⚠️ CRITICAL: Configure GitHub Permissions**

Before your agents can work, you MUST configure GitHub Actions permissions:

1. **Set Permissions**: Settings → Actions → General
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**

**Without these permissions, agents cannot create PRs or make changes!**

2. **Enable Features**: Settings → General
   - Enable **"Issues"** 
   - Enable **"Actions"**

### 2. Configure AI Provider

Choose your AI provider and add the required secrets in Settings → Secrets and variables → Actions:

#### OpenAI (Recommended)
- **Repository Secret**: `OPENAI_API_KEY`
- **Repository Variable**: `A5C_CLI_TOOL` = `codex`

#### Anthropic Claude
- **Repository Secret**: `ANTHROPIC_API_KEY`
- **Repository Variable**: `A5C_CLI_TOOL` = `claude`

#### Azure OpenAI
- **Repository Secret**: `AZURE_OPENAI_API_KEY`
- **Repository Variable**: `A5C_CLI_TOOL` = `azure_codex`
- **Repository Variable**: `AZURE_OPENAI_PROJECT_NAME` = `your-project-name`

#### Google Gemini
- **Repository Secret**: `GEMINI_API_KEY`
- **Repository Variable**: `A5C_CLI_TOOL` = `gemini`

### 3. Initial Workflow

**For a new project**, create these 2 issues to activate your agents:

1. **Seed the Project**
   ```
   @project-seeder-agent start, the initial description is in the project description.
   ```

2. **Install Team**
   ```
   @team-installer-agent Install all the relevant missing agent from the registry.
   ```

## 🤖 Your AI Development Team

Your repository comes with access to these specialized agents:

- **`@team-installer-agent`** - Installs and configures new agents for your project
- **`@developer-agent`** - Handles feature development and coding tasks
- **`@producer-agent`** - Manages project coordination and planning
- **`@validator-agent`** - Reviews code quality and runs tests
- **`@build-fixer-agent`** - Fixes build failures and CI/CD issues
- **`@content-writer-agent`** - Creates documentation and content
- **`@conflict-resolver-agent`** - Resolves merge conflicts and code disputes
- **`@azure-sre-engineer-agent`** - Handles Azure infrastructure and DevOps

## 📝 How to Work with a5c

### Step 1: Work via GitHub Issues
- Create issues for any task, bug, or feature request
- The system may also create issues automatically based on repository activity

### Step 2: Tag Agents in Issues
Use `@agent-name` to assign specific agents to tasks:
- `@developer-agent add authentication system`
- `@build-fixer-agent fix failing tests`
- `@content-writer-agent update documentation`

### Step 3: Review Agent-Created PRs
- Agents create Pull Requests with their solutions
- Review, comment, and approve as needed
- Agents will iterate based on your feedback

### Step 4: Monitor via GitHub Actions
- Check the **Actions** tab to see agents working
- View real-time progress and logs
- **Response time**: Agents typically respond within 1-5 minutes

### Step 5: Iterate & Collaborate
- Comment on PRs to request changes
- Create follow-up issues for additional work
- Agents learn from your feedback and preferences

### Step 6: Manage via Repository Settings
- Add/remove agents as needed using `@team-installer-agent`
- Configure permissions and access controls
- Monitor API usage and costs

## 💡 Example Workflows

### Adding a New Feature
```
1. Create issue: "@developer-agent add dark mode toggle to the app"
2. Agent analyzes codebase and creates implementation plan
3. Agent creates PR with dark mode feature
4. Review PR and provide feedback
5. Agent iterates based on your comments
```

### Fixing a Bug
```
1. Create issue: "@build-fixer-agent tests are failing in CI"
2. Agent investigates the failing tests
3. Agent creates PR with fixes
4. Tests pass, merge the PR
```

### Installing New Team Members
```
1. Create issue: "@team-installer-agent install security-reviewer and performance-optimizer agents"
2. Agent configures new agents for your project
3. New agents are ready to handle specialized tasks
```

## ⚡ What to Expect

- **First Setup**: 2-5 minutes for agents to initialize
- **Issue Response**: 1-5 minutes for agent acknowledgment
- **PR Creation**: 5-30 minutes depending on task complexity
- **Iteration Speed**: Near-instant responses to feedback

## 💰 Cost Awareness

API usage costs vary by provider:
- **OpenAI**: ~$10-30 for typical projects
- **Claude**: ~$15-40 for typical projects  
- **Azure OpenAI**: ~$10-30 for typical projects
- **Gemini**: ~$5-20 for typical projects

Complex projects may cost $20-50. Set usage limits in your AI provider dashboard.

## 🔧 Troubleshooting

### Agents Not Responding
1. Check GitHub Actions permissions (most common issue)
2. Verify AI provider API key is set correctly
3. Ensure "Issues" and "Actions" are enabled
4. Try manual activation: Create issue with `@team-installer-agent activate`

### High API Costs
1. Set usage limits in your AI provider dashboard
2. Use more specific issue descriptions to reduce iteration
3. Review and approve PRs promptly to avoid re-work

### Build Failures
1. Tag `@build-fixer-agent` in the failing PR or create a new issue
2. Check Actions tab for detailed error logs
3. Agents will automatically retry failed builds

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

This is a template repository. To contribute to a5c development:
1. Visit [github.com/a5c-ai](https://github.com/a5c-ai)
2. Check out the main a5c repositories
3. Submit issues and PRs to help improve the platform

---

**Ready to start building with AI agents? Create your first issue above! 🚀**
