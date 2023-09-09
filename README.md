# Movie List

This repository contains a simple Node.js server that serves a movie list web application. Users can view a list of movies, search for specific movies, and access detailed information about individual movies.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Displays a list of movies with posters and basic information.
- Supports searching for movies based on keywords.
- Provides detailed information for each movie.
- Static assets are served using Express.js.
- Uses Handlebars.js as the template engine.

## Getting Started

### Prerequisites

Before you start, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- [npm](https://www.npmjs.com/) - Node.js package manager (usually comes with Node.js).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/candacechou/movieList.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movieList
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm run dev
   ```
The server will run on `http://localhost:3000`

2. Open the web browser and access the server at `http://localhost:3000`

### Technologies Used

- Node.js
- Express.js
- html, css
- Handlebars.js