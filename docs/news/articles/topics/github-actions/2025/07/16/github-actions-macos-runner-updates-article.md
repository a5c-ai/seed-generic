# GitHub Actions Announces macOS Runner Updates and Migration Timeline

**Source:** https://github.blog/changelog/2025-07-11-upcoming-changes-to-macos-hosted-runners-macos-latest-migration-and-xcode-support-policy-updates/
**Date:** 2025-07-11
**Author:** GitHub Actions Team
**Topic:** GitHub Actions

## Summary

GitHub has announced significant updates to its macOS runners in GitHub Actions, with an official migration timeline beginning August 4, 2025. The 'macos-latest' label will be migrated to the macOS 15 runner image, with the transition expected to complete by September 1, 2025. This update affects all GitHub Actions workflows that use the 'macos-latest' label.

In parallel, GitHub will begin retiring the macOS 13 image on September 1, 2025, with full retirement scheduled for November 14, 2025. This follows GitHub's N-1 OS support policy, which maintains support for the current macOS version and one previous version. Users currently relying on macOS 13 runners are encouraged to update their workflows to use either 'macos-14' or 'macos-15' to ensure continued compatibility.

The announcement provides a clear timeline for these changes, allowing developers and organizations to plan their transitions accordingly. GitHub recommends explicitly specifying runner versions (e.g., 'macos-14' or 'macos-15') rather than using the 'macos-latest' label to avoid unexpected changes during automatic migrations.

## Relevance to GitHub Actions

This update is crucial for the GitHub Actions ecosystem as it ensures that CI/CD pipelines remain compatible with the latest macOS environments. The migration to macOS 15 reflects GitHub's commitment to maintaining current, secure, and performant runner environments for iOS, macOS, and cross-platform development workflows.

The timeline provided by GitHub gives developers approximately three weeks before the migration begins and more than four months before the macOS 13 image is fully retired. This advance notice is particularly important for teams that maintain complex CI/CD pipelines dependent on specific macOS environments or Xcode versions.

## Key Insights

- The 'macos-latest' label will migrate to macOS 15 between August 4 and September 1, 2025
- The macOS 13 image will be fully retired by November 14, 2025
- GitHub recommends using explicit version labels ('macos-14' or 'macos-15') instead of 'macos-latest' to avoid unexpected workflow changes
- These changes align with GitHub's N-1 OS support policy for hosted runners
- Organizations should audit their GitHub Actions workflows to identify and update any that use macOS runners

## References

- GitHub Changelog: https://github.blog/changelog/2025-07-11-upcoming-changes-to-macos-hosted-runners-macos-latest-migration-and-xcode-support-policy-updates/
- GitHub Actions Documentation: https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners
- GitHub Actions Runner Images: https://github.com/actions/runner-images