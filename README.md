# GameHub

GameHub is a video game discovery web app, developed with React 18 and Typescript, that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Create a .env file in the root of the project and add a variable in that file named `VITE_REACT_APP_API_KEY` containing the API key. The variable is used in **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.
