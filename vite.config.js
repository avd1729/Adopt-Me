import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src",
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects",
          dest: ".",
        },
      ],
    }),
  ],
});
