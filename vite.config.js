import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    hmr: {
      overlay: false,
    },
  },
})
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // // Replace this with your **actual GitHub repo name**
// // export default defineConfig({
// //   base: '/AQPortfolio-main/', // ✅ Match the repo name exactly (case-sensitive)
// //   plugins: [react()],
// //   server: {
// //     hmr: {
// //       overlay: false,
// //     },
// //   },
// // });
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/aq-portfolio/',  // ✅ Important for GitHub Pages
//   plugins: [react()],
//   server: {
//     hmr: {
//       overlay: false,
//     },
//   },
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/portfolio/',  // Must match the repo name
//   plugins: [react()],
//   server: {
//     hmr: {
//       overlay: false,
//     },
//   },
// })
// vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/portfolio/', // replace with your repo name
//   plugins: [react()],
// })
