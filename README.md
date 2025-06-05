# Setting Up Semantic Release in a new GitHub Repository

This guide will walk you through the process of setting up Semantic Release in a new GitHub repository.

### Prerequisites
Before you begin, make sure you have the following:

-   A GitHub account
-   Node.js installed on your local machine
-   A new GitHub repository created for your project

## Step 1: Initialize your project
Open your terminal and navigate to your project directory:
`npm init -y`
This creates a basic package.json.

## Step 2: Install semantic-release and required plugins
`npm install --save-dev semantic-release @semantic-release/git @semantic-release/github @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/release-notes-generator`

## Step 3: Install conventional-changelog-conventionalcommits
`npm install --save-dev conventional-changelog-conventionalcommits`

## Step 4: Create a semantic-release configuration file
Create a file named .releaserc.js in your root directory:

## Step 5: Create an empty changelog file

## Step 6: Set up GitHub Actions
Create .github/workflows/release.yml

## Step 7: Add .gitignore
Add.node_modules to.gitignore to avoid committing node_modules.

## Step 8: Test it by First commit & push
Stage and commit:<br>
`git commit -m "feat: initial semantic-release setup"`<br>
Push to GitHub:<br>
`git push origin main`

### Purposes of Commit Messages:
-   feat: New feature or functionality or enhancement (Triggers a minor version release)
-   fix: Bug fix or issue resolution (Triggers a patch version release)
-   perf: A code change that improves performance (Triggers a minor or patch version release)
-   docs: Documentation changes (No version change)
-   style: Code style changes like formatting, spacing, etc. (No version change)
-   refactor: Code refactoring; neither fix nor feature (No version change)
-   test: Adding or modifying tests (No version change)
-   build: Changes that affect the build system (e.g., webpack, npm) (No version change)
-   ci: Changes to CI/CD pipeline like:
    - Github actions
    - Jenkin pipeline
    - Docker build process
    - Travis, CircleCI configs
    - .github/workflows/*
    - Makefile, .gitlab-ci.yml
    - Update nodejs version in workflow
    - fix build cache for faster deployment
    - switch to pnpm in GitHub Actions, etc (No version change)
-   chore: Maintenance tasks, build system changes, Routine tasks (e.g., dependency updates), etc. (No version change)
-   revert: Reverts to a previous commit (No version change)
-   BREAKING CHANGE: Indicates a breaking change (Major version release)
-   feat: BREAKING CHANGE: (Major version release) eg:<br>
`git commit -m "feat: change auth flow" -m "BREAKING CHANGE: login endpoint removed"`

