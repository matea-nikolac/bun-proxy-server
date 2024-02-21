// https://bun.sh/
import { file } from 'bun'
import { appendFile, mkdir } from 'node:fs/promises'
import fs from 'fs'

const host = 'www.dow.com'



const server = Bun.serve({
  port: 36107,
  fetch: async (request) => {
    try {
      const res = await fetch(`https://${host}`)
      
      const content = await res.text()
      const url = new URL(request.url)
    
      // prevent the extra call for /favicon.ico and ensure the code runs only once
      if (url.href !== `http://localhost:${url.port}/favicon.ico`){

        // send the HTML content via Response
        if (request.url === 'http://localhost:36107/') {
          return new Response(content, {
            headers: {
              'Content-Type' : 'text/html',
            },
          })
        } else {

          // Fetch content from the requested URL

          // Remove the 'http://localhost:36107' part from the request URL
          const cleanUrl = request.url.replace('http://localhost:36107', '')
          // Fetch data from the combined host URL and cleaned URL
          const cleanUrlRes = await fetch(`https://${host}${cleanUrl}`)
          // Extract the text content from the response of the cleaned URL
          const cleanUrlContent = await cleanUrlRes.text()


          // check the file extention of the cleanUrl to determine the conent type
          let contentType = ''

          if (cleanUrl.includes('.css')){
            contentType = 'text/css'
          } else if (cleanUrl.includes('.json')){
            contentType = 'application/json;charset=utf-8'
          } else if (cleanUrl.includes('.js')){
            contentType = 'application/javascript'
          } else if  (cleanUrl.includes('.svg')) {
            contentType = 'image/svg+xml'
          }

          // Create a new Response object with the content and Content-Type headers
          return new Response(cleanUrlContent, {
            headers: {
              'Content-Type' : `${contentType}`,
            },
          })
        }
      }
    } catch (error) {
      console.error('Error', error)
      return new Response('Error', { status: 500 })
    }
  },
})

// server.listen(36107)
console.log('Run on http://localhost:36107')
