// https://bun.sh/

import dictionary from './dictionary.json'

const host = 'www.dow.com'

const server = Bun.serve({
  port: 36107,
  fetch: async (request) => {
    try {
    
      // Remove the 'http://localhost:36107' part from the request URL
      const url = request.url.replace('http://localhost:36107', '')

      // Fetch data from the url which is a combination of the host URL and the cleaned URL  
      const res = await fetch(`https://${host}${url}`)

      // Extract the text content from the response
      let content = await res.text()

      // use dictionary.json to change any word on the displayed site 
      for (const word in dictionary){
        const replacementWord = dictionary[word]
        const originalWord = word
        const regex = new RegExp(originalWord, 'g')
        content = content.replace(regex, replacementWord)
      }

      // check the file extention of the url to determine the conent type
      let contentType = ''

      if (url.includes('.css')){
        contentType = 'text/css'
      } else if (url.includes('.json')){
        contentType = 'application/json;charset=utf-8'
      } else if (url.includes('.js')){
        contentType = 'application/javascript'
      } else if  (url.includes('.svg')) {
        contentType = 'image/svg+xml'
        // check if this either a request for the home page or for any other page that contains .html
      } else if (url.includes('.html') || url === '/'){
        contentType = 'text/html'
      }

      // Create a new Response object with the content and Content-Type headers
      return new Response(content, {
        headers: {
          'Content-Type' : `${contentType}`,
        },
      })
      
      
    } catch (error) {
      console.log('Error', error)
      return new Response('Error', { status: 500 })
    }
  },
})

// server.listen(36107)
console.log('Run on http://localhost:36107')
