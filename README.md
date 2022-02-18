# Project Overview

## Project Links

- [Github repo Link](https://github.com/rneimeyer/project2-react-bored)
- [Deployment Link](https://rneimeyer.github.io/project2-react-bored/)

## Project Description

This project will give you activities to do if you are bored! You will be able to generate an activity idea based on group size or activity type and send it to friends if you are interested. There will also be a page of favorite/recommended activities if you don't want a randomly generated activity. Finally, there is a page for sending in feedback about the site, an activity you did, or suggestions for other activities.

## API

[Bored API](http://www.boredapi.com/api/activity?participants=1)

```
{
  "activity": "Draw something interesting",
  "type": "recreational",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "8033599",
  "accessibility": 0
}
```

## Wireframes

- [Wireframe and React Architecture](https://wireframepro.mockflow.com/view/M4OaVCra7h#/page/6110b0208d10497588308954145819fe)
  - Page 1: Wireframe
  - Page 2: React Architecture

## MVP/PostMVP

### MVP

- Create multiple components
- Use React Router to show different components and link in the nav bar
- Make a responsive design
- Include a form for feedback submission
- Create drop-down menus for participant number and activity type
- Render API data on page based on selections
- Render API data on favorites page
- Create button for refreshing options
- Allow user to send activity idea to their friends

### PostMVP

- Allow feedback data to be stored
- Include another page and component for randomly generated dog pictures to improve your mood
- Create an option to rate each activity that is generated and use that data on the favorites/recommended page.

## Components

| Component     |                                              Description                                              |
| ------------- | :---------------------------------------------------------------------------------------------------: |
| App           |                     This will make the initial data pull and include React Router                     |
| Customized    | Renders the description of selection options and data from Group Number or Activity Type after chosen |
| Group Number  |                     This will render activity information based on size of group                      |
| Activity Type |                    This will render activity information based on type of activity                    |
| Favorites     |                                  Renders top recommended activities                                   |
| Contact Us    |                                Contains a form for feedback submission                                |
| Nav           |                                 Contains title and links to all pages                                 |
| Footer        |                                     Contains creator information                                      |

## Time Frame

### MVP

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create components             |    H     |      4hrs      |     6hrs      |    6hrs     |
| Create Routes and Links       |    H     |      1hr       |     2hrs      |    2hrs     |
| Responsive Design             |    H     |      5hrs      |     6hrs      |    6hrs     |
| Adding Form for feedback      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Drop Down Menus               |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| Render API data in Customized |    H     |      4hrs      |     4hrs      |    4hrs     |
| Render API data in Favorites  |    H     |      3hrs      |     4hrs      |    4hrs     |
| Refresh Button                |    H     |      2hrs      |    0.5hrs     |   0.5hrs    |
| Send activity idea            |    H     |      3hrs      |     3hrs      |    3hrs     |
| Total                         |    H     |     28hrs      |     30hrs     |    30hrs    |

### PostMVP

| Component         | Priority | Estimated Time | Time Invetsted | Actual Time |
| ----------------- | :------: | :------------: | :------------: | :---------: |
| Feedback Storage  |    H     |      6hrs      |      hrs       |     hrs     |
| Random dog images |    H     |      4hrs      |      hrs       |     hrs     |
| Activity Ratings  |    H     |      6hrs      |      hrs       |     hrs     |
| Total             |    H     |     16hrs      |      hrs       |     hrs     |

## Additional Libraries

- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/): used to create activity cards along with the buttons and progress bars displayed on the cards
- Google Fonts: [Handlee](https://fonts.gstatic.com/s/handlee/v12/-F6xfjBsISg9aMakPm3wowtKzig.woff2) and [Rock Salt](https://fonts.gstatic.com/s/rocksalt/v16/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2)
- [Color Palette](https://www.colorsandfonts.com/color-system)
- Used this resource to find a solution to keep my footer at the bottom of the screen: [resource](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/)

## Code Snippet

I used the code below to show and hide the group component as a user clicks on the "By Group Number" button. There is CSS within the group component that will hide the component when the class is inactive and show when it is active.

```js
const [groupActive, setGroupActive] = useState(false);
const showGroup = () => {
  setGroupActive(true);
  setTypeActive(false);
};
const groupClass = groupActive ? "active" : "inactive";
```
