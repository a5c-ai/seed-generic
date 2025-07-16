# GitHub Actions Announces Upcoming Changes to macOS Runners and Xcode Support Policy

**Source:** https://github.blog/changelog/2025-07-11-upcoming-changes-to-macos-hosted-runners-macos-latest-migration-and-xcode-support-policy-updates/
**Date:** 2025-07-11
**Author:** GitHub Team
**Topic:** GitHub Actions

## Summary

GitHub has announced significant changes to its macOS hosted runners and Xcode support policy that will impact GitHub Actions workflows starting in August 2025. The most notable change is the migration of the `macos-latest` label to the macOS 15 runner image. This transition will begin on August 4, 2025, and complete by September 1, 2025. GitHub recommends that developers update their workflows to explicitly use either `macos-14` or `macos-15` to avoid potential disruptions during this migration period.

Additionally, GitHub is updating its Xcode support policy for macOS runners. Starting August 11, 2025, GitHub Actions will maintain at most three runtimes (simulators) in each macOS image and will only keep beta runtimes on a best-effort basis. This represents a significant change to how Xcode environments are managed within GitHub Actions and may impact workflows that depend on specific simulator versions or beta runtimes.

These changes follow earlier updates in 2025, including the general availability of macOS 15 and Windows 2025 images for GitHub Actions and the introduction of 96 vCPU larger runners to the GitHub Actions hosted runner fleet. The platform has also experienced some service disruptions in July 2025, with degraded performance affecting workflow runs and logging during specific time windows.

## Relevance to GitHub Actions

These changes reflect GitHub's ongoing efforts to maintain and update its CI/CD infrastructure while balancing the need for backward compatibility with the push toward newer operating system versions. The migration of `macos-latest` to macOS 15 is particularly significant as it will affect any workflow that relies on the default macOS runner without specifying a version.

The changes to the Xcode support policy are equally important for iOS, macOS, and other Apple platform developers who rely on GitHub Actions for their CI/CD pipelines. By limiting the number of simulator runtimes and reducing support for beta versions, GitHub is making a tradeoff that prioritizes stability and performance of the runner images over comprehensive Xcode version support.

## Key Insights

- Workflows using the `macos-latest` label should be updated to explicitly use `macos-14` or `macos-15` before August 4, 2025, to avoid unexpected behavior during the migration period
- iOS and macOS developers should review their CI/CD workflows to ensure they're not dependent on having more than three simulator runtimes available or relying heavily on beta runtimes
- The changes suggest GitHub is moving toward a more standardized and streamlined approach to runner images, potentially to improve reliability and reduce maintenance overhead
- The timing of these announcements, coming shortly after macOS 15's general availability, indicates GitHub's commitment to keeping pace with Apple's release cycle

## References

- [GitHub Actions macOS runners documentation](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)
- [Earlier 2025 GitHub Actions updates and features](https://github.blog/changelog/2025-05-15-new-releases-for-github-actions/)
- [GitHub Actions service status](https://www.githubstatus.com)