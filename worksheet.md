# Project Overview

## Project Links

- [https://github.com/dvvill/motivational-todo-list-project2](https://github.com/dvvill/motivational-todo-list-project2)
- [add your deployment link]()

## Project Description
The Get Shit Done App. The concept is, a habit forming, To-do App.  It will have a nav bar with 3 links, 1- **Lists**, 1- **Today** (for that days To-Do's) and 
1- **Week** (for that weeks view of To-Do's).  Within the **Lists** link the user will be able to create, delete and (hopefully) mark off items as completed too. The
user will be able to add **items/Lists** to specific days of the week and then be able to view those items in the link for **Today** or in the link for the **Week** 
overview. The idea is to keep the app simple and more as a supplement to a persons agenda/calendar if they happen to manage one already be it online or (Goodness 
forbid) on paper. The goal is for the user to set & complete no more than 3 **MUST DO To-Do's Every Day** for **One Week** and decide on a reward they would give 
themselves when they complete atleast 90% of their To-Do's for the **week**. I want the interface to look very basic and clean, for the homepage to reflect the 
philosophy behind the Apps' functionality seamlessly.  With a **TODAY** card component displaying the 3 To-do's for that day, another component showing
a log of their progress throughout the week (Mon - Fri) and last but not least a final component with a semi-random gif that is conditional based on the users week.
(a gif for work harder, keep up the hard work and congratulations you rock based on the stats/log).


### API

[GIPHY DEVELOPERS] (api.giphy.com/v1/gifs/search?EmU9dpXgxO9PChhSA8GxpHFFNVqwufK1&q:string&limit:integer&rating:)
* Will need to add giphy with a function that selects random options from within 3 categories based on individual user results

[API KEY()]

## Wireframes

### PHONE WIREFRAME- 

-[Mobile Home](https://res.cloudinary.com/dvvill/image/upload/v1635845597/SEI-Project-2-Phone-View_eiv2ko.png)

### DESKTOP WIREFRAME-

-[Desktop Home](https://res.cloudinary.com/dvvill/image/upload/v1635878600/SEI-PROJECT_2-DESKTOP-VIEW_ripn1q.png)

### MVP/PostMVP

### MVP

* Use external API
* Create Navbar; 3 Links 
* Create components: Lists, Today, Week w/ 5 Sub-components to log each days completed To-D0's, Today Card-displaying only that days 3 To-Do's on homepage,
 Week w/ 5 Sub-Components (Mon-Fri) with their repective To-Do's/list, Gif Card-rendering different Gifs tailored to user experience
* The Lists link: User interactive, can create lists/To-Do's, add, delete, mark as complete and assign due dates to them
* Link Today Card to display only the 3 To-Do's for that day. Can not be edited except through the lists link/component.
* Week Card Log: add 5 Sub-Components for Mon-Fri and log the tasks the user completes everyday and link to a 6th Sub-Component with the 
  users desired reward which renders only if condition of meeting 90% of weekly To-Do's is met
* set gif to render daily based on users log of productivity; in the 1 To-Do per day-> random Gif= time to try, work harder, (motivate). In the 2- To-Do's 
  per/day-> R. Gif= keep it up, doing good, (encouragement). In the 3- To-Do's range per/day-> R. Gif= Great job, superstar, (Congratulate/Reward)


### PostMVP

* Add a way to record/store long term stats 
* Add a way to interpret long-term stats data; is user creating new habits, being more productive, feeling different in some way.



## Components

-[React Components Architecture](https://res.cloudinary.com/dvvill/image/upload/v1635893639/SEI-PROJECT2-COMPONENTS-ARCHITECTURE-VIEW_uwspb4.png)


|Component|Priority|Estimated Time|Time Invested|Actual Time|
|:--------|:-------|:-------------|:------------|:----------|
|Adding Form|High|10hrs|
|Working w/API|High|3hrs|
|Total| High|13hrs|

## Additional Libraries

## Code Snippets
