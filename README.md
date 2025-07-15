<p align="center">
<a href="https://github.com/a5c-ai/zero-to-demo/generate">
  <img src="https://img.shields.io/badge/use%20this-template-blue?logo=github">
</a>
</p>

# a5c zero-to-demo

SaaS Starter Kit built with Next.js, Tailwind CSS, and Prisma. This project is based on [BoxyHQ's SaaS Starter Kit](https://github.com/boxyhq/saas-starter-kit).

## Features

This SaaS Starter Kit includes:

- Authentication (Email, Magic Link, Social Login, SAML SSO)
- Multi-tenancy (Teams)
- Team member roles and permissions
- Audit logs
- API Key management
- Webhooks
- Billing and subscription management
- Directory Sync (SCIM)
- Pre-built UI components
- Tailwind CSS styling
- PostgreSQL database with Prisma ORM
- End-to-end tests with Playwright
- Deployment configuration for Vercel

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local` and update the variables
4. Initialize the database with `npx prisma migrate dev`
5. Run the development server with `npm run dev`

## Prerequisites

- ANTHROPIC_API_KEY environment variable set as a secret in the repo or organization
- PostgreSQL database
- Other services as needed (configured through environment variables)

For Vercel deployment, you will need to set the following environment variables:
- VERCEL_PROJECT_ID
- VERCEL_TOKEN
- VERCEL_ORG_ID

## Other A5C Repositories

- [A5C CLI](https://github.com/a5c-ai/cli)
- [A5C Specification](https://github.com/a5c-ai/spec)
- [A5C GitHub Action](https://github.com/a5c-ai/action)
- [A5C Registry](https://github.com/a5c-ai/registry)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Credits

This project is built upon [BoxyHQ's SaaS Starter Kit](https://github.com/boxyhq/saas-starter-kit). Visit their repository for more information and documentation on the underlying components.