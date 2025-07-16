# Next.js 15.4 Released with Full Turbopack Integration

**Source:** https://nextjs.org/blog/next-15-4
**Date:** 2025-07-14
**Author:** Vercel Team
**Topic:** Next.js

## Summary

Next.js 15.4 was released on July 14, 2025, marking a significant milestone for the framework with 100% integration test compatibility for Turbopack in production builds. This update brings stability improvements to both Next.js and Turbopack, enhancing developer experience and application performance.

The most notable achievement in this release is that `next build --turbopack` now passes all 8,298 integration tests for production builds. This milestone is particularly significant as Turbopack now powers Vercel's own website, demonstrating production readiness. The integration test suite success rate has increased from 99% in previous versions to 100% in this release.

Additionally, the release includes numerous stability and performance improvements for both Next.js and Turbopack, ensuring a more reliable development and production environment. The Vercel team also provided an early preview of what's coming in Next.js 16, which is expected to be released later this summer.

## Relevance to Next.js

This release is highly relevant to the Next.js ecosystem as it represents the culmination of Vercel's efforts to fully integrate Turbopack into Next.js. Turbopack was originally introduced to improve build performance, and with this release, it has achieved full compatibility with Next.js production builds.

The integration of Turbopack into production builds will allow developers to experience significantly faster build times without sacrificing reliability or compatibility. This advancement positions Next.js to maintain its leadership in the React framework space by addressing one of the key pain points in web development: build performance.

## Key Insights

- Turbopack for builds has achieved 100% integration test compatibility, marking it as production-ready for Next.js applications
- Next.js 16 is on the horizon with a focus on consolidating experimental caching features into a unified `cacheComponents` flag
- The Cache Components feature in Next.js 16 will unify Dynamic IO, use cache, and Partial Prerendering under a single flag, simplifying performance optimization strategies
- Vercel is now dogfooding Turbopack by using it for their own website, demonstrating confidence in the technology

## References

- Next.js Blog: https://nextjs.org/blog/next-15-4
- GitHub Releases: https://github.com/vercel/next.js/releases
- Turbopack Documentation: https://turbo.build/pack