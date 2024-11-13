# Movie Search App

## Description
A simple React application that allows users to search for movies using the OMDB API. The app displays detailed movie information such as title, year, rating, director, plot, and more. The app also fetches a random movie when the page is refreshed, making it a fun way to explore movies.

## Features
- Search for movies by title.
- View detailed information about a selected movie, including:
  - Title
  - Year of release
  - IMDb rating
  - Genre
  - Director
  - Plot summary
  - Actors and more.
- A random movie is fetched when the page is refreshed.
- Responsive design for better user experience.

## Technologies Used
- **React** for building the user interface.
- **OMDB API** for fetching movie data.
- **CSS** for styling the application.

## Setup and Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-search-app.git
```

### 2. Navigate to the project directory
```bash
cd movie-search-app
```

### 3. Install dependencies
Make sure you have Node.js and npm installed. Run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Create an `.env` file
Create a `.env` file in the root directory of the project and add your OMDB API key like this:
```
REACT_APP_OMDB_API_KEY=your-api-key-here
```

### 5. Start the application
Run the following command to start the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000` in your browser.

## Usage

1. **Search for Movies**: Type a movie title into the search bar and click the "Search" button to display the movie details.
2. **Random Movie**: On page refresh, the app automatically fetches a random movie for you to explore.

## Contributing

Feel free to fork the repository, create a branch, and submit a pull request if you'd like to contribute to the project.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Breakdown of sections:
- **Description**: Provides a brief summary of what the app does.
- **Features**: Lists key features of the app.
- **Technologies Used**: Specifies the technologies involved in building the app.
- **Setup and Installation**: Instructions for setting up the project locally.
- **Usage**: Explains how to use the app after it's set up.
- **Contributing**: Encourages contributions to the project.
- **License**: Specifies the license under which the project is available.

Make sure to update the `git clone` link to your actual GitHub repository and add your own OMDB API key in the `.env` file.