# Next.js 15.4 Released with Full Turbopack Build Support

**Source:** https://nextjs.org/blog/next-15-4
**Date:** 2025-07-14
**Author:** Vercel Team
**Topic:** Next.js

## Summary

Vercel has released Next.js 15.4, a significant update that brings full integration test compatibility for Turbopack builds. This milestone means that developers can now use the `next build --turbopack` command with confidence across a wide range of application configurations and features.

The release includes numerous stability and performance improvements to both Next.js core and Turbopack. These enhancements address various edge cases and bugs reported by early adopters of Turbopack, making it more reliable for production use. The Vercel team has focused on ensuring a smooth transition path for developers looking to adopt Turbopack for their build processes.

In addition to the Turbopack integration, the blog post accompanying the release also includes an early preview of the upcoming Next.js 16, Vercel's next major release. While specific details are still emerging, the preview suggests that Next.js 16 will continue to build on the performance and developer experience improvements introduced in version 15.

## Relevance to Next.js

This release represents a significant milestone in Next.js' journey toward making Turbopack the default bundler for the framework. Full integration test compatibility means that Turbopack is now much closer to feature parity with the current webpack-based build system, which has been a long-term goal for the Next.js team.

For developers using Next.js, this release provides more confidence in adopting Turbopack for production builds, potentially unlocking significant performance improvements. The stability enhancements also make this version a recommended upgrade for teams experiencing issues with previous versions of Next.js 15.x.

## Key Insights

- Turbopack has reached 100% integration test compatibility for `next build --turbopack`, marking a major milestone for this new build system
- Numerous stability and performance improvements have been implemented based on community feedback from early Turbopack adopters
- The early preview of Next.js 16 signals Vercel's continued investment in advancing the framework
- This release continues the pattern of incremental improvements to Turbopack before making it the default build system
- Teams should consider testing the Turbopack build option with their applications to prepare for future Next.js versions

## References

- Next.js GitHub repository: https://github.com/vercel/next.js
- Previous release (Next.js 15.3): https://nextjs.org/blog/next-15-3
- Turbopack documentation: https://turbo.build/pack
- Next.js documentation on Turbopack: https://nextjs.org/docs/architecture/turbopack