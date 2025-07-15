# Vercel Enhances Deployment Protection for All Generated Domains

**Source:** https://vercel.com/changelog/deployment-protection-now-default-for-all-generated-domains
**Date:** 2025-07-14
**Author:** Vercel Team
**Topic:** Vercel

## Summary

Vercel has announced an important security enhancement to its Deployment Protection feature. Starting July 14, 2025, the Standard Deployment Protection option will automatically protect all generated domains for new projects, including the production branch git domain. This update significantly improves the default security posture for Vercel deployments without requiring manual configuration.

The enhanced protection applies to both preview deployments and production git branch deployments, ensuring consistent security across all automatically generated Vercel domains. For existing projects, developers can enable this protection manually through the project settings, while new projects will have this protection enabled by default.

This change comes as part of Vercel's ongoing efforts to improve platform security and protect sensitive information from unauthorized access. By extending protection to all generated domains, Vercel is helping teams prevent potential data exposure through unprotected preview environments or git branch deployments.

## Relevance to Vercel

This security enhancement is directly relevant to Vercel's platform as it changes the default security behavior for all new projects. It addresses a common security concern where teams might inadvertently expose sensitive information through unprotected preview or git branch domains.

For developers and teams using Vercel, this change simplifies security management by providing stronger default protection without requiring manual configuration. It's particularly beneficial for teams working on applications that handle sensitive data or provide access to protected resources, as it helps prevent accidental exposure during the development and review process.

## Key Insights

- Standard Deployment Protection now automatically covers all generated domains, including production git branch domains
- This change applies to new projects by default; existing projects can enable it manually
- The enhanced protection helps prevent unauthorized access to sensitive information in both preview and production environments
- This update reflects Vercel's focus on improving platform security with strong defaults
- Teams should review their existing projects to ensure consistent protection across all environments

## References

- Vercel Deployment Protection documentation: https://vercel.com/docs/security/deployment-protection
- Vercel Security best practices: https://vercel.com/docs/security
- Vercel Ship 2025 announcement: https://vercel.com/blog/vercel-ship-2025-recap