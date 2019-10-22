# Jane Technical Frontend Interview

Hi! Hey thanks for doing this. It shouldn't take more than an hour. Let's get everything working before the interview starts.

## Installation

### Cloning the repo to your local machine
If you received an archive of the assessment, skip this section
1. Click on the green `Clone or download` button above, and switch to HTTPS if the default is SSH. Copy the url.
2. Clone this repo into a folder on your box: `git clone [url] [folder]`

### Run the assessment in your browser
You will need npm or yarn installed and working.

1. Open the folder containing the assessment: `cd [folder]`
2. Run `yarn` or `npm install`
3. Run `yarn start` or `npm run start`

## Instructions

At Jane we do a lot on the frontend. We care deeply about user experience, performance, and readability. We've provided a skeleton React component that is meant to help users fill in the City field in an address form.

Build out the CityField component to satisfy the following:

### Function
  1. As text is typed into the input field, a list of suggested city names should render above/below it. We've provided a list of Canadian city names to use in [`canadian_cities.js`](src/canadian_cities.js).
  2. Suggested city names contain the string entered into the input field (case insensitive).
  3. The list should be keyboard navigable.
  4. The list items should be selectable by mouse click or hitting the enter key.
  5. The list of suggestions should NOT show when the input is less than two characters.
  6. **Bonus/optional:** The list of suggestions should disappear when the user clicks or presses enter on a suggestion.

### Style
  1. Center the label and input field horizontally and vertically in the viewport window.
  2. When the input value matches a Canadian city name, change the background color to green smoothly (fade) over half a second.