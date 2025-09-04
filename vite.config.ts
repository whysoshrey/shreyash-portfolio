import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Supports both user sites (<username>.github.io) and project sites (<username>.github.io/<repo>/)
// via the VITE_BASE env. The GitHub Action supplies this automatically.
const baseEnv = process.env.VITE_BASE;
const base = baseEnv && baseEnv.endsWith(".github.io/") ? "/" : (baseEnv || "/");

export default defineConfig({
  plugins: [react()],
  base
});
