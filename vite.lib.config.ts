import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import license from 'rollup-plugin-license'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
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

