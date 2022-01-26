# POKEDEX - REACT FRONTEND BY DDBC

This project uses Chakra-UI for styling.

Please make sure POKEDEX - DJANGO BACKEND BY DDBC is running before starting up this project.
POKEDEX - DJANGO BACKEND BY DDBC can be found here: https://github.com/DharylOfficial/pokedex_react

## CURRENT ISSUES

    - Sometimes crashes when downloading data from the OFFICIAL POKEDEX SITE
    - Reset Pokdex buttton takes a long time to finish. Usually crashes before response from backend arrives

## SETTING UP

1. Open terminal where you want to download the project then run

   - git clone https://github.com/DharylOfficial/pokedex_react

2. Install all needed dependencies

   - npm install

3. Run POKEDEX - DJANGO BACKEND BY DDBC

4. Run the application

   - npm start

## HOW TO USE

NAVIGATION BAR:

- Clicking on the logo brings you back to the main page
- Clicking on the New Pokemon button opens up an empty Pokeform

POKEDEX BODY

- Lists all Pokemon currently stored in Pokedex
- Clicking on a Pokecard opens up a Pokeform with its details
- Clicking on the Reset Pokedex button deletes all currently stored data then re-downloads from pokeapi.co
- Reset Pokedex is optimistic

POKEFORM

- Setting ID is disabled
- If ID is blank, Save button sends a POST request to the Django API
- If ID has value, Save button sends a PATCH request to the Django API

## COMPONENTS

COMMON - Contains UI components that could be reused on other screens

CONSTANTS - Contains data that would be CONSTANT throughout the whole application

SCREENS - Contains the different screens that could be accessed in this SPA

SERVICES - Contains actions that involve axios requests and other third-party libraries

playground.jsx - Contains test functions
utilities.jsx - Contains reusable functions
