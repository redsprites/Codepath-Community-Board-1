# React + TypeScript + Vite

# Tech Events Board

## Overview

Tech Events Board is a React application designed to showcase upcoming tech-related events such as hackathons, conferences, workshops, and meetups. This project was created as part of our coursework to demonstrate the ability to initialize a React application, create functional components, manage props, and apply CSS styling for a responsive design.

## Features

- Display a list of tech events in a card format.
- Each card contains information about the event including title, date, description, and an image.
- Responsive design for desktop and mobile formats.

## Required Features Completed

- [x] Initialize a new React application with Vite.
- [x] Create functional React components.
- [x] Define and pass props to components.
- [x] Apply CSS styling to React components.
- [x] Display at least 10 unique resources or events in a responsive card format.

## Stretch Features Completed

- [ ] Add buttons or links to related resources on each card component.
- [ ] Make the site responsive for both desktop and mobile formats.

## Installation

To run this project locally, follow these steps:

  git clone https://github.com/your-username/tech-events-board.git
  cd tech-events-board
  
Creating a well-structured README for your project not only helps in submitting your coursework but also serves as a valuable document for anyone who wants to understand, run, or contribute to your project in the future. Here's a sample README template tailored for your tech events board project using React. This template incorporates the steps for submission and other essential elements that should be part of a good README.

markdown
Copy code
# Tech Events Board

## Overview

Tech Events Board is a React application designed to showcase upcoming tech-related events such as hackathons, conferences, workshops, and meetups. This project was created as part of our coursework to demonstrate the ability to initialize a React application, create functional components, manage props, and apply CSS styling for a responsive design.

## Features

- Display a list of tech events in a card format.
- Each card contains information about the event including title, date, description, and an image.
- Responsive design for desktop and mobile formats.

## Required Features Completed

- [x] Initialize a new React application with Vite.
- [x] Create functional React components.
- [x] Define and pass props to components.
- [x] Apply CSS styling to React components.
- [x] Display at least 10 unique resources or events in a responsive card format.

## Stretch Features Completed

- [ ] Add buttons or links to related resources on each card component.
- [ ] Make the site responsive for both desktop and mobile formats.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
    `git clone https://github.com/your-username/tech-events-board.git`
    `cd tech-events-board`
    `npm install`
    `npm run dev`

## GIF Walkthrough

Here's a walkthrough of implemented user stories:

![Walkthrough GIF](https://i.imgur.com/link-to-your-gif.gif)
```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
