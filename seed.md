# Seed

## Template

https://github.com/boxyhq/saas-starter-kit
(unless specified otherwise in the project description)


## Notes

### GitHub Workflows

The workflows are already configured to use standard npm script commands to run the tests, build, deploy, etc.
No need to change them nor copy them from the template.

## Additional Issues to open

In addition to the usual instructions, open the following issues

### Vercel project creation and association

(first issue to create, before any other issue)

use the VERCEL_TOKEN and VERCEL_ORG_ID to generate a new project in vercel and save the VERCEL_PROJECT_ID in the repo:

as an env variable for the actions (in github)
as a comment to this ticket.
in a .vercel.env file in the repo (with only the new VERCEL_PROJECT_ID)


### Husky pre-commit hooks

1. install husky (package.json and package-lock.json)
2. configure it to run the tests and build before committing in .husky/pre-commit (according to the project npm scripts)
3. modify package.json to use the new husky commands (using 'prepare').