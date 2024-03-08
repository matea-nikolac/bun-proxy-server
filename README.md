#Bun Proxy Server Solution

## Description
This repository presents a comprehensive solution for deploying a proxy server using Bun.js (https://bun.sh/) to address a simulated client demo task. The primary objective of this task is to effectively showcase a client's website (www.dow.com) via a locally hosted Bun server while dynamically altering specific words on the displayed site using a dictionary. Furthermore, the solution encompasses robust handling of diverse file types and content formats to ensure a seamless end-user experience.

## Task Overview
The task at hand involves:

* Displaying the client's website (www.dow.com) accurately via a local Bun server.
* Dynamically modifying specific words on the displayed site using a dictionary.
* Ensuring smooth handling of various file types and content formats to maintain a cohesive user experience.

## Solution
Implemented in JavaScript, the solution leverages Bun.js to execute the following functionalities:

* Content Modification: The proxy server fetches content from the client's website and applies predefined word replacements based on the provided dictionary. This dynamic modification enhances the relevance and customization of the displayed content.

* File Type Handling: The server intelligently manages different file types such as HTML, CSS, JavaScript, and JSON, ensuring appropriate content types are set for each resource. This meticulous handling guarantees seamless rendering and interaction across diverse content formats.

* Flexible Configuration: The server logic is encapsulated within a single JavaScript file (server.js), providing flexibility for customization and integration into various environments.

## Usage:

1. Clone the repository using git clone.
2. Navigate to the project directory.
3. Install bun.js: `curl -fsSL https://bun.sh/install | bash`
4. Run the solution using node server.js: `bun run server.js`
5. Access the proxy server through the specified port (default: 36107) in a web browser.
