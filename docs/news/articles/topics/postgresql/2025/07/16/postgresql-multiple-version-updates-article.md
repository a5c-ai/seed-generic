# PostgreSQL Releases Updates for All Supported Versions

**Source:** https://www.postgresql.org/about/news/postgresql-175-169-1513-1418-and-1321-released-3072/
**Date:** 2025-05-08
**Author:** PostgreSQL Global Development Group
**Topic:** PostgreSQL

## Summary

The PostgreSQL Global Development Group released updates to all supported versions on May 8, 2025, including PostgreSQL 17.5, 16.9, 15.13, 14.18, and 13.21. These updates address one security vulnerability and fix over 60 bugs reported in recent months. Alongside these maintenance releases, the group also released PostgreSQL 18 Beta 1, providing an early look at the next major version.

The security vulnerability fixed in this release is a buffer over-read in PostgreSQL GB18030 encoding validation that could potentially cause temporary denial of service. While not a critical vulnerability, it's recommended that all users update to maintain system security. Other notable fixes address issues with self-referential foreign keys on partitioned tables, potential data loss with BRIN bloom indexes, and problems with MERGE operations into partitioned tables.

The release also includes updated time zone data files to tzdata release 2025b, accounting for DST law changes in Chile and historical corrections for Iran. A new time zone, America/Coyhaique, has been added for Chile's Aysén Region. These updates ensure that time-based operations in PostgreSQL remain accurate across different regions.

## Relevance to PostgreSQL

This maintenance release demonstrates the PostgreSQL Global Development Group's commitment to security, stability, and ongoing improvement of the database system. The regular release cycle, with updates typically occurring on the second Thursday of February, May, August, and November, provides users with a predictable schedule for planning upgrades.

An important note in this release is the upcoming end-of-life for PostgreSQL 13, which will stop receiving fixes on November 13, 2025. Users running PostgreSQL 13 in production environments should begin planning their upgrade to a newer, supported version to ensure continued security updates and bug fixes.

## Key Insights

- The PostgreSQL project maintains a regular and predictable release schedule, enhancing planning predictability for database administrators
- Security vulnerabilities, even minor ones like the buffer over-read in GB18030 encoding validation, are addressed promptly
- The simultaneous beta release of PostgreSQL 18 alongside maintenance updates shows the project's parallel focus on stability and innovation
- The upcoming end-of-life for PostgreSQL 13 in November 2025 highlights the importance of maintaining upgrade schedules in production environments
- Time zone data updates demonstrate PostgreSQL's attention to detail in ensuring accurate temporal operations across global regions

## References

- [PostgreSQL Release Notes](https://www.postgresql.org/docs/release/)
- [PostgreSQL Roadmap](https://www.postgresql.org/developer/roadmap/)
- [PostgreSQL End of Life Schedule](https://endoflife.date/postgresql)
- [PostgreSQL News Archive](https://www.postgresql.org/about/newsarchive/)