# Contributing to officialwhitebird portfolio

Thank you for considering contributing to the portfolio repository. Please follow these guidelines to set up your environment and submit contributions.

## Prerequisites

- Node.js 22

## Local Development Setup

To set up a local development environment:

1. Clone this repository to your local machine.
2. Install dependencies using npm clean install:
   npm ci
3. Start the local development server:
   npm run dev
4. Open http://localhost:3000 in your browser to view the site.

## Verification Checks

Before submitting any changes, you must ensure that the static checks and builds pass successfully:

- Run ESLint to check for formatting or syntax issues:
  npm run lint
- Run Next.js production build to verify the static export compiles without errors:
  npm run build

All checks must exit with code 0.

## Pull Request Guidelines

When submitting a pull request:

- Keep changes small, explicit, and focused.
- Site content, design, and dependencies must not be changed unless separately discussed and approved.
- Avoid modifying package-lock.json or dependencies unless explicitly authorized.
- Ensure no sensitive credentials, API keys, tokens, or personal identifiers are committed to the repository or included in logs/screenshots.
- Clearly describe the purpose of the changes and confirm that local lint and build checks have passed.
