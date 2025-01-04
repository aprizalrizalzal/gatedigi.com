import express from 'express'
import fs from 'fs'
import path from 'path'
import { renderToString } from '@vue/server-renderer'
import { createApp } from '@/main.js' // Fungsi createApp dari main.js

const server = express()
const PORT = 8080

// Baca file index.html sebagai template
const template = fs.readFileSync(
  path.resolve('./index.html'), // Pastikan path ke file index.html benar
  'utf-8',
)

// Middleware untuk melayani file statis (CSS, JS, dll.)
server.use(express.static(path.resolve('./dist')))

// SSR Route
server.get('*', async (req, res) => {
  try {
    // Buat instance Vue dan router
    const { app, router } = createApp()

    // Sinkronkan router dengan URL yang diminta
    await router.push(req.url)
    await router.isReady()

    // Ambil metadata dari route
    const meta = router.currentRoute.value.meta || {}
    const title = meta.title || 'Default Title'
    const description = meta.description || 'Default Description'

    // Render aplikasi Vue ke string
    const appHtml = await renderToString(app)

    // Ganti placeholder di template dengan konten dinamis
    const html = template
      .replace(`<!--meta-title-->`, title)
      .replace(`<!--meta-description-->`, description)
      .replace(`<!--app-html-->`, appHtml)

    // Kirim respon HTML lengkap ke browser
    res.setHeader('Content-Type', 'text/html')
    res.status(200).end(html)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
})

// Jalankan server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
