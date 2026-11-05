import { defineConfig } from 'vite';

// base './' — الأكاديمية تُخدم من أي مسار، بما فيها IPFS أو مجلد محلي: سيادة كاملة
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2022',
  },
});
