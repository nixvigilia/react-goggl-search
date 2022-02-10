## ReactGoggl

A Google clone app built using React JS (Context & Hooks), Tailwind CSS, and Google Search API powered by [Rapid API](https://rapidapi.com).

![Screenshot 2022-02-11 013312](https://user-images.githubusercontent.com/34468449/153463969-aa9b008d-8a35-4e5f-b839-fe16b899c6fc.png)

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/search`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

REACT_APP_API_KEY

- Create an account in [Rapid API](https://rapidapi.com) and copy and paste your API key on .env file.

## Live Demo

https://nixoy-react-goggl.netlify.app/search

## My key learnings from this project

#### React Context and useContext() Hook

- The context is used to manage global data, e.g. global state, authentication, theme, services, user settings, and more.

#### [Tailwind CSS] (https://tailwindcss.com/)

- A utility-first CSS framework for rapid UI development.

#### react-router-dom

- for dynamic routing in a react web app

#### react-player

- A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.

#### react-loader-spinner

- provides customizable React SVG spinner component which can be implemented for async await operation before data loads to the view.

#### use-debounce

- this hook allows you to debounce any fast changing value. The debounced value will only reflect the latest value when the useDebounce hook has not been called for the specified time period.
