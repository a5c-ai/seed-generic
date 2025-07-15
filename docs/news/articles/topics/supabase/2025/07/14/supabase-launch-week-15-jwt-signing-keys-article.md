# Supabase Kicks Off Launch Week 15 with New JWT Signing Keys System

**Source:** https://supabase.com/blog/launch-week-15-day-1
**Date:** 2025-07-14
**Author:** Supabase Team
**Topic:** Supabase

## Summary

Supabase has kicked off its highly anticipated Launch Week 15, running from July 14-18, 2025, with a major announcement on the first day: a new JWT signing keys system based on public key cryptography. This new system significantly enhances both security and performance for Supabase projects.

The new JWT signing keys system replaces the previous approach of using a single HMAC-based JWT secret with a more robust public/private key pair system. This allows Supabase to rotate keys without disruption to services, implement automatic key rotation, and provide better isolation between different authentication methods. The system uses modern cryptographic standards including ES256 and RS256 algorithms.

In addition to improved security, the new system offers performance benefits, particularly for Edge Functions and other serverless environments where JWT verification needs to be fast and efficient. The public key verification process is significantly faster than the previous method, especially in resource-constrained environments.

## Relevance to Supabase

This announcement is highly relevant to the Supabase platform as it represents a fundamental improvement to the authentication system that powers all Supabase projects. Authentication is a core component of Supabase's offering, and this update enhances both security and performance aspects of this critical feature.

For developers using Supabase, this change provides greater security through improved key management practices and creates a foundation for more advanced authentication features in the future. The performance improvements will be particularly beneficial for applications using Edge Functions or other serverless components where computing resources are limited.

## Key Insights

- The new JWT signing keys system uses public key cryptography instead of the previous HMAC-based approach
- This allows for zero-downtime key rotation, improving security without disrupting services
- Performance is significantly improved, especially for Edge Functions and serverless environments
- The system supports modern cryptographic standards (ES256 and RS256)
- This is the first of several announcements planned for Launch Week 15 (July 14-18, 2025)

## References

- Supabase Launch Week 15 homepage: https://supabase.com/launch-week
- Supabase authentication documentation: https://supabase.com/docs/guides/auth
- Previous Launch Week announcements: https://supabase.com/blog/tags/launch-week