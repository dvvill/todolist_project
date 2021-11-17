# Project Overview

## Project Links

- [https://github.com/dvvill/todolist_project.git]()
- [add your deployment link]()

## Project Description
**GOAL:** I want to create a ToDo List App that functions on the user prioritizing 1-3 daily ToDo's, the app would track completion of the ToDo's daily/weekly and display 
gifs based on wether the user was doing well measured by completion rate and render a good job/congratulatory gif, doing so-so rendering a gif that is more encouraging
or doing poorly rendering a better luck next time sort of gify. 

I struggled with conceptualizing this project and hit a lot of roadblocks in the process of getting it started.  I started by trying to create a homepage with a navbar 
with links to the page where the user could create their ToDo's and a link to see their pending ToDo's and their progress.  I hyperfocused on how i wanted my navbar
to look and the layout of the homepage and lost significant time trying to adhere to my concept.  After a day's worth of work I decided to switch gears and focus more 
on functionality and tried to create routes for my desired links.  I spent a day on that to no avail and then decided to put that aside to ask for help during office hours
and switched to making a third party API call for my gifs also to no avail. I scrapped the initial repo/folder I started the project in and decided to focus on finding 
documentation to read and tutorials to do to figure out how to create routes, make third party API calls, use react hooks etc.. in the context of my ToDo App project
even though I wasn't going to be able to hand in/present a project.  

For the ToDo List I followed a tutorial using the Mozilla MDN Docs at this link 
- [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning]()
After creating this ToDo List following the Mozilla tutorial. I then scrapped it and started it all over again but this time modifying it to look how I wanted it to
look. I didn't use their css and I made a ton of changes to the code as well as the layout of the app to fit my wants/needs for this project.  I made a commit of the
first draft before scrapping it and then I made commits as I re-made the list with my desired changes.

For the Gifs I did a couple of tutorials and then decided to go with using axios provided by a Treehouse workshop on React Hooks - [https://teamtreehouse.com/library/react-hooks]()
Other gif app tutorials I completed but didn't use Treehouse Data Fetching in React - [https://teamtreehouse.com/library/data-fetching-in-react]()

For the navbar, routes and links I used the documentation - [https://v5.reactrouter.com/web/api/NavLink](), - [https://v5.reactrouter.com/web/api/BrowserRouter](),
- [https://v5.reactrouter.com/web/guides/quick-start]() and reviewed in class material.



## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

I chose the giphy api using axios and the useEffect Hook to make my api call and render the gifs on my page
```
{  useEffect(() => {
        axios(`http://api.giphy.com/v1/gifs/trending?&limit=3&api_key=EmU9dpXgxO9PChhSA8GxpHFFNVqwufK1`)
        .then(response => setData(response.data.data))
        .catch(error => console.log('error fetching and parsing data', error))
        ;
      }, []);}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App.js | This will make the initial data pull and include React Router| 
| GifList.js | This renders the 3 Gifs from the Giphy API data requested in the App.js file | 
| Gif.js | This gets passed into GifList.js to render the gifs as a group/list of 3 | 
| ToDoList.js | This will use ToDo.js and Form.js this component renders the users ability to add, edit, delete and update ToDo's | 
| Form.js | This will render the input field where the user will create their ToDo | 
| ToDo.js | This is where the individual ToDo's and delete button reside  | 
| CompletedList.js | This will be the page where the user can track their progress (this part is not completed). currently empty page | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 I used Axios for my Giphy API data fetch 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
 useEffect(() => {
        axios(`http://api.giphy.com/v1/gifs/trending?&limit=3&api_key=EmU9dpXgxO9PChhSA8GxpHFFNVqwufK1`)
        .then(response => setData(response.data.data))
        .catch(error => console.log('error fetching and parsing data', error))
        ;
      }, []); {
	// here is the code to make giphy api fetch request using axios and the useEffect Hook.
}
```
