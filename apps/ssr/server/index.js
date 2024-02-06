import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from '../client/App'

const server = express()

server.use(express.static('dist')) // 开启静态资源服务

server.get('/', (req, res) => {
  const html = renderToString(<App />)

  res.send(`
  <html>
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="./client.js"></script>
    </body>
  </html>
`)
})

server.listen(3007, () => {
  console.log('http://localhost:3007')
})
