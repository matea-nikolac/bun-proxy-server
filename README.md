# Description:
This repository contains the solution for creating a proxy server using Bun.js (https://bun.sh/) to assist in a simulated client demo task. The task involves displaying a client's website (www.dow.com) correctly via the local Bun server and using a dictionary to dynamically change specific words on the displayed site. The solution also handles different file types and content types accordingly, ensuring a seamless user experience.

The proxy server is implemented in JavaScript and utilizes Bun.js to fetch content from the client's website, modify it based on predefined rules in a dictionary, and serve the modified content to the user. The server is designed to run on port 36107 by default, providing flexibility for integration into various environments.

# Solution:
The solution consists of a JavaScript file (server.js) that defines the proxy server logic using Bun.js. Upon receiving requests, the server fetches content from the client's website, applies word replacements based on the provided dictionary, and serves the modified content to the user's browser. Additionally, the server handles different file types such as HTML, CSS, JavaScript, and JSON, ensuring appropriate content types are set for each resource.

# Usage:

1. Clone the repository using git clone.
2. Navigate to the project directory.
3. Install bun.js: `curl -fsSL https://bun.sh/install | bash`
4. Run the solution using node server.js: `bun run server.js`
5. Access the proxy server through the specified port (default: 36107) in a web browser.
