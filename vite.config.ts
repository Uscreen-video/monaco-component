import { defineConfig } from 'vite'
import license from 'rollup-plugin-license'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  experimental: {
    renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
      if (hostType === 'js') {
        return { runtime: `window.__monaco_component_base(${JSON.stringify(filename)})` }
      } else {
        return { relative: true }
      }
    }
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      plugins: [
        license({
          thirdParty: {
            output: path.resolve(__dirname, './dist/LICENSE.txt'),
          },
        }),
      ],
      output: {
        entryFileNames: "[name].js",
        // chunkFileNames: "zzz-[name].js",
        // this got rid of the hash on style.css
        assetFileNames: "[name].[ext]",
      },
    },
  },
})

