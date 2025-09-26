import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export default defineManifest({
  manifest_version: 3,
  name: "Linkedzen",
  version: pkg.version,
  icons: {
    48: "public/logo.png",
  },
  content_scripts: [
    {
      js: ["src/content/main.ts"],
      matches: ["https://*.linkedin.com/*"], //
    },
  ],
});
