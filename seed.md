# Seed

## Template Selection

Choose the template from the gallery that best fits the project requirements and avaliable env variables.

for example, if you have a STRIPE_SECRET_KEY, and the project requirements include payments, you should choose the template that includes stripe.

you can choose templates that do not support supabase or vercel even if the project requirements needs them and you have them in the db, but the template needs to support next.js/nuxt.js and postgres (respectively the vercel and supabase providers). in this case, you will still need to create the issues related to these providers integration.

this logic should apply to all providers, not just the ones in the example.

### Gallery

https://github.com/shuding/nextra-docs-template (docs site)

https://github.com/boxyhq/saas-starter-kit (nextjs saas app)

https://github.com/dzlau/stripe-supabase-saas-template (nextjs saas app with stripe and supabase)

https://github.com/vercel/ai-chatbot (ai chatbot with next.js, ai sdk, shadcn/ui, Neon Serverless db, Auth.js)

https://github.com/vercel/commerce (nextjs, shopify)

https://github.com/vercel/platforms (A production-ready example of a multi-tenant application built with Next.js 15, featuring custom subdomains for each tenant - nextjs, react, upstash redis, shadcn/ui)

https://github.com/nextjs/saas-starter (nextjs, stripe, Drizzle, postgres)

https://github.com/vercel/vercel/tree/main/examples/nextjs (nextjs, shadcn/ui - good for static pages, landing pages, public websites, etc)

https://github.com/vercel/vercel/tree/main/examples/nuxtjs (nuxtjs, shadcn/ui - good for static pages, landing pages, public websites, etc)

there are many more templates in: https://github.com/vercel/vercel/tree/main/examples , https://github.com/topics/boilerplate , https://github.com/topics/template , https://github.com/topics/starter-kit , https://github.com/topics/starter-template

find the one with the best fit and the most stars.

## Notes

### GitHub Workflows

The workflows are already configured to use standard npm script commands to run the tests, build, deploy, etc.
No need to change them nor copy them from the template.

## Additional GitHub Issues to open

In addition to the usual instructions, open the following issues

### Vercel project creation and association (if the stack includes vercel)

use the VERCEL_TOKEN and VERCEL_ORG_ID to generate a new project in vercel and save the VERCEL_PROJECT_ID in the repo:

as an env variable for the actions (in github)
as a comment to this ticket.
in a .vercel.env file in the repo (with only the new VERCEL_PROJECT_ID)

if the input env variables are not provided, create a issue to ask for them instead of creating the project.

### Supabase project creation and association (if the stack includes supabase)

use the SUPABASE_ACCESS_TOKEN and SUPABASE_ORG_ID to generate a new project (with default db password from SUPABASE_DB_PASSWORD) in supabase and save the SUPABASE_PROJECT_REF and SUPABASE_PROJECT_URL and SUPABASE_ANON_KEY in the repo:

as an env variable for the actions (in github)
as a comment to this ticket.
in a .supabase.env file in the repo (with only the new SUPABASE_PROJECT_REF and SUPABASE_PROJECT_URL)

also create a connection string for the database in the project
with password populated at build time from the SUPABASE_DB_PASSWORD secret.

make sure to update the code/deployment to use the connection string and database configuration.

if the input env variables are not provided, create a issue to ask for them instead of creating the project.

### More issues for providers integration similar to the ones above (if the stack includes more providers)

### Husky pre-commit hooks (if the seed/stack includes a package.json)

1. install husky (package.json and package-lock.json)
2. configure it to run the tests and build before committing in .husky/pre-commit (according to the project npm scripts)
3. modify package.json to use the new husky commands (using 'prepare').

### Seed Specific instructions

Examine the instructions in the README.md file or the docs site of the seed/starter kit to complete the scaffolding. pay attention to details like:

1. 3rd party services and deployment services (supabase, vercel, etc) integrations setup
2. environment variables setup
3. changes in configuration files to adapt to the seed/starter kit
4. changes to the main.yml workflow to adapt to the seed/starter kit

the actual issue should be opened with the details above in the description. with instructions to perform the changes in the repo.