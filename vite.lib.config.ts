import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  experimental: {
    renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
      if (hostType === 'js') {
        return { runtime: `window.__monaco_component_module_base(${JSON.stringify(filename)})` }
      } else {
        return { relative: true }
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
    outDir: './lib',
    lib: {
      entry: 'src/monaco-component.ts',
      formats: ['es'],
    },
  },
})
