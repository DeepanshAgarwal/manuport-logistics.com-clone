import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/manuport-logistics.com-clone",
    plugins: [react()],
});
