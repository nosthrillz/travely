# Newsy

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

# Project details

## Goals

The goal of this project is to practice:
- Setting up Webpack
- Working with Sass
- Using Webpack loaders and plugins
- Creating layouts and page design
- Setting up service workers
- Using MeaningCloud Sentiment Analysis API 2.1
- Unit testing with Jest

## Setup

To set up:

1.   Clone or fork the repository on your machine.
2.   In the root directory of the project (with your favorite Terminal / Command line tool) run:

    `npm i`

3.   Create a file called `.env` in the root directory. Add the following to the file, then save:

    ```
    API_KEY=<Your-33-character-MeaningCloud-API Key>
    PORT=8081
    ```

4.   From the Terminal, run one of the following commands, depending on what you want to do:

     *   `npm start` - launch the back end. This is **mandatory** for the project to work;
     *   `npm run build-dev` - Webpack builds and deploys a development environment on port 8080. It automatically opens a browser page for you to view at `http://localhost:8080`;
     *   `npm run test` - Jest runs all tests;
     *   `npm run build-prod` - Webpack builds the prod version of the site. To view, point your browser to the server's endpoint, `http://localhost:8081`.

## File Structure

Type| Item | Description |
--:|---|:-:|
Dir| `src/client/__tests__` | Contains .test.js files for 5/7 js methods files (only 5 can be tested with the current architecture) |
Dir| `src/client/images` | Contains logo and favicon |
Dir| `src/client/js` | Contains js methods |
Dir| `src/client/styles` | Contains sass styles |
Dir| `src/client/views` | Contains HTML |
File| `src/client/index.js` | Main JS files which imports methods. |
File| `src/server/index.js` | Server-side JavaScript |