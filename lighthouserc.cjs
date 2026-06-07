module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- -p 3000",
      startServerReadyPattern: "ready - started server on",
      startServerReadyTimeout: 120000,
      settings: {
        preset: "desktop"
      },
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/projects",
        "http://localhost:3000/projects/enterprise-web-platform-modernization",
        "http://localhost:3000/contact"
      ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }]
      }
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci"
    }
  }
};
