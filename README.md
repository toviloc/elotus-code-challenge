# The Movies Reviewer App - Code Challenge

## Description

The Movies is a movies app using the https://developers.themoviedb.org/3

This app can help users find the Now Playing and Top Rate movies, also search movies as well  

## Installation
Node.js and npm installation.

Specific packages or dependencies that need to be installed.

git clone https://github.com/toviloc/elotus-code-challenge.git

`npm install`

## Usage
Create a .env file and set the required environment variables:

`REACT_APP_ACCESS_KEY_TOKEN=your_access_key`

To run the development app:

`npm run start`

## Folder Structure

Below is the directory structure of the project:

- `src/`: This directory contains the main source code of the project.
  - `components/`: Contains reusable components used throughout the application.
    - `GridView/`: the component displays movies as a grid
      - `Card/`: Show each movie in a cell format
        - `Card.tsx`
        - `Card.scss`
      - `GridView.tsx`
      - `GridView.scss`
    - `Header/`: 
      - `Header.tsx`
      - `Header.scss`
    - `ListView/`: the component displays movies as a list
      - `Record/`: Show each movie in a line-by-line format
        - `Record.tsx`
        - `Record.scss`
      - `ListView.tsx`
      - `ListView.scss`
    - `Loading/`: the component displays a loading page during an API running 
      - `Loading.tsx`
      - `Loading.scss`
    - `Modal/`: the component displays movie details after users have clicked on the cell
      - `Modal.tsx`
      - `Modal.scss`
    - `Snackbar/`: Show the error message
      - `Snackbar.tsx`
      - `Snackbar.scss` 
  - `pages/`: Contains individual pages or views.
    - `MoviesList.tsx`
  - `styles/`: Stores stylesheets, including SCSS files.
    - `index.scss`
  - `interfaces/`:
    - `Movies.tsx`
    - `MoviesList.tsx`
  - `services/`: Using Axios to get and fetch data via api
    - `apiService.tsx`: 
      
- `public/`: Contains public assets that are served as-is by the development server.

- `package.json`: Configuration file for Node.js dependencies.

- `tsconfig.json`: TypeScript configuration file.

- `README.md`: The documentation file you are currently reading.

## Contact

If you have any questions or suggestions, please contact:

- Name: Loc Tong (Luke)
- Email: loc.tongvinh@gmail.com
- Phone: +84 773 192 787
