module.exports = {
    branches: ["main"],
    plugins: [
      "@semantic-release/commit-analyzer",
      [
        "@semantic-release/release-notes-generator",
        {
          preset: "conventionalcommits",
          presetConfig: {
            types: [
              { type: "feat", section: "Features" },
              { type: "fix", section: "Bug Fixes" },
              { type: "perf", section: "Performance Improvements" },
              { type: "docs", section: "Documentation", hidden: false },
              { type: "style", section: "Styling", hidden: false },
              { type: "refactor", section: "Code Refactoring", hidden: false },
              { type: "test", section: "Tests", hidden: false },
              { type: "build", section: "Build System", hidden: false },
              { type: "ci", section: "CI", hidden: false },
              { type: "chore", section: "Miscellaneous", hidden: true }
            ]
          }
        }
      ],
      "@semantic-release/changelog",
      [
        "@semantic-release/git",
        {
          assets: ["package.json", "CHANGELOG.md"],
          message: "chore(release): ${nextRelease.version} [skip ci]"
        }
      ],
      "@semantic-release/github"
    ]
  };  