# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

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

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Customized | Renders the description of selection options and data from Group Number or Activity Type after chosen | 
| Group Number | This will render activity information based on size of group | 
| Activity Type | This will render activity informaiton based on type of activity | 
| Favorites | Renders top recommended activities | 
| Contact Us | Contains a form for feedback submission | 

## Time Frame

### MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create components | H | 4hrs| hrs | hrs |
| Create Routes and Links | H | 1hr| hrs | hrs |
| Responsive Design | H | 5hrs| hrs | hrs |
| Adding Form for feedback | H | 3hrs| hrs | hrs |
| Drop Down Menus | H | 3hrs| hrs | hrs |
| Render API data in Customized | H | 4hrs| hrs | hrs |
| Render API data in Favorites | H | 3hrs| hrs | hrs |
| Refresh Button | H | 2hrs| hrs | hrs |
| Send activity idea | H | 3hrs| hrs | hrs |
| Total | H | 28hrs| hrs | hrs |



### PostMVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Feedback Storage | H | 6hrs| hrs | hrs |
| Random dog images | H | 4hrs| hrs | hrs |
| Activity Ratings | H | 6hrs| hrs | hrs |
| Total | H | 16hrs| hrs | hrs |

## Additional Libraries

 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```

```
