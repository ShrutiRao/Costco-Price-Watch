import { defineConfig } from "@playwright/test";

const devDomain = process.env.REPLIT_DEV_DOMAIN;
const baseURL = devDomain ? `https://${devDomain}` : "http://localhost:80";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL,
    // The proxy uses mTLS; headless chromium needs to accept it
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    headless: true,
    launchOptions: {
      executablePath: process.env.REPLIT_PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    },
  },
  reporter: [["list"], ["html", { open: "never" }]],
});
