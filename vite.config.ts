import { defineConfig } from 'vite';
import { configDefaults, defineConfig as testConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite configuration
const config = defineConfig({
  plugins: [react(), tailwindcss()],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    exclude: [...configDefaults.exclude, 'shared/*', './src/setupTests.js'],
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};
