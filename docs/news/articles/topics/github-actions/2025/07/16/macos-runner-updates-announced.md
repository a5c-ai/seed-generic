# GitHub Actions Announces Major macOS Runner Updates

**Source:** https://github.blog/changelog/2025-07-11-upcoming-changes-to-macos-hosted-runners-macos-latest-migration-and-xcode-support-policy-updates/
**Date:** 2025-07-11
**Author:** GitHub Team
**Topic:** GitHub Actions and CI/CD

## Summary

GitHub has announced significant changes to their macOS hosted runners in GitHub Actions, with several important updates affecting workflows beginning in August 2025. The macos-latest label will be migrated to the macOS 15 runner image starting August 4, 2025, with the transition to be completed by September 1, 2025. During this migration period, workflows will gradually switch to the new image, and once migrated, they will not run on macOS 14 in any future executions.

Additionally, GitHub is changing their support policy for Xcode installations on macOS runner images. While they will continue to support all bare bones Xcode versions in the image, starting August 11, 2025, they will maintain at most three runtimes (simulators) in the image and will only keep beta runtimes on a best-effort basis.

The macOS 13 hosted runner image is also scheduled for retirement, following GitHub's N-1 OS support policy. This retirement process will begin September 1, 2025, and the image will be fully decommissioned by November 14, 2025. GitHub recommends that users update their workflows to use either macos-14 or macos-15 to avoid disruptions.

## Relevance to GitHub Actions and CI/CD

These changes are particularly significant for development teams using GitHub Actions for iOS and macOS application development and testing. The migration of macos-latest to macOS 15 and the retirement of macOS 13 represent GitHub's commitment to keeping their hosted runner images current with Apple's operating system releases while maintaining compatibility with previous versions through their N-1 support policy.

The changes to the Xcode support policy, particularly the limitation to three runtimes (simulators) in the image, may impact workflows that rely on a wide range of iOS simulator versions for testing. Teams will need to adapt their testing strategies to account for these limitations or consider implementing custom runners if they require more extensive simulator support.

## Key Insights

- If your CI/CD workflows use the `macos-latest` label, you should test your workflows with macOS 15 before August 4, 2025, to ensure compatibility
- Consider updating workflows that currently use macOS 13 to use macOS 14 or macOS 15 before September 1, 2025
- Review your Xcode simulator requirements and adjust your testing strategy to work within the new three-runtime limitation
- For teams with complex requirements beyond the new limitations, evaluate setting up self-hosted runners to maintain specific configurations

## References

- [GitHub Actions macOS Runner Documentation](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)