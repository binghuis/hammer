// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    dir: 'test',
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['src/**/index.ts', 'src/**/types.ts'],
    },
  },
});
