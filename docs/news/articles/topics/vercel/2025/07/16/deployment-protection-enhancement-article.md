# Vercel Enhances Deployment Protection for New Projects

**Source:** https://vercel.com/changelog
**Date:** 2025-07-16
**Author:** Vercel Team
**Topic:** Vercel

## Summary

Vercel has announced an important enhancement to its Deployment Protection feature, which is designed to safeguard preview and production URLs from unauthorized access. Starting July 2025, the Standard Deployment Protection option has been updated for new projects to automatically protect all generated domains, including the production branch git domain.

This change represents a significant improvement in the default security posture for new Vercel projects. Previously, developers needed to manually configure protection for each domain, which could lead to oversight and potential security gaps. With this update, Vercel is making security more robust out of the box, reflecting their commitment to the "secure by default" principle.

Deployment Protection is a critical feature for teams working on projects that require controlled access before public release. It prevents unauthorized users from accessing specific domains, allowing teams to maintain confidentiality during development and testing phases.

## Relevance to Vercel

This update aligns with Vercel's broader evolution from being primarily a Frontend Cloud to positioning itself as an AI Cloud, as announced during Vercel Ship 2025. The emphasis on security and access control is essential as applications become more sophisticated and potentially handle sensitive data, especially in AI-driven applications.

For developers and teams using Vercel, this enhancement simplifies the security setup process and reduces the risk of accidental exposure of pre-release features or sensitive environments. It particularly benefits enterprise customers and teams working on confidential projects who require strict access controls throughout the development lifecycle.

## Key Insights

- Standard Deployment Protection now automatically protects all generated domains for new projects
- The production branch git domain is now included in the default protection scope
- This change only affects newly created projects; existing projects will maintain their current configuration
- The update reflects Vercel's commitment to "secure by default" principles
- This enhancement is part of Vercel's broader evolution into an AI Cloud platform, where security becomes increasingly critical
- Teams working on confidential projects will benefit from reduced configuration overhead and improved default security

## References

- https://vercel.com/blog/vercel-ship-2025-recap
- https://vercel.com/ship
- https://community.vercel.com/c/announcements/27