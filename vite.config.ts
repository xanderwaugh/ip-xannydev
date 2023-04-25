import { defineConfig } from "vite";
import solid from "solid-start/vite";
import Unfonts from "unplugin-fonts/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [
    // solid({ adapter: vercel({}) }),
    solid(),
    ViteImageOptimizer(),
    Unfonts({
      google: {
        families: [
          {
            name: "Inter",
            styles: "wght@300;400;500;600;700;800;900",
          },
        ],
        display: "swap",
      },
    }),
  ],
});
