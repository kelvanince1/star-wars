Desktop screenshots:

![Desktop Home](src/images/Screenshots/desktopHome.png?raw=true "Desktop Home")

![Desktop Characters Films](src/images/Screenshots/charactersFilmsDesktop.png?raw=true "Desktop Characters Films")

![Desktop Film](src/images/Screenshots/filmDesktop.png?raw=true "Desktop Film")

Mobile screenshots:

![Mobile Home](src/images/Screenshots/mobileHome.png?raw=true "Mobile Home")

![Mobile Characters Films](src/images/Screenshots/charactersFilmsMobile.png?raw=true "Mobile Characters Films")

![Mobile Film](src/images/Screenshots/filmMobile.png?raw=true "Mobile Film")


Circle CI build:

![Circle CI](src/images/Screenshots/circleCI.png?raw=true "Circle CI Build")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


FRAMEWORK USED:

The App was built in React and can be run using npm run start if you want to run it locally.
You can run the tests with npm run test.

TOOLS USED:

* React for components
* Redux for state management. I used Redux-thunk to handle the asynchronous calls to the Star Wars API.
* Material-UI for UI component framework. I'm sure you are familiar with Material-UI and its built in Flexbox model. I usually prefer writing my own vanilla CSS, but I like Material-UI's Grid components, which I used quite heavily for this app.
* The images mostly come from cinemasins.wikia.com
* I pushed the code to a Github repo and implemented a circle CI integration.
* I used Jest for testing but also installed the Enzyme package. I like it when there is Redux store in place.
* The app is hosted on AWS S3.

IMPROVEMENTS/NEXT STEPS:

* I strongly considered using GraphQL to implement props for this app. I decided against it since we aren't mutating data at all. Let's say we were building the API as well as the front end for this app, I would want to use GraphQL instead of Redux since the API contains quite a lot of nested data which we could mutate easier with GraphQL.
* I would automate further deployments using AWS CodeBuild and CodeCommit probably. I would have the S3 buckets contents populated upon successful builds and then, possibly, CloudFront to generate a link between the S3 contents and a Route53 hosted zone, allowing us greater DNS flexibility.
* I would write a more comprehensive testing model. The tests I have written are straightforward.
* On the page showing some information on the particular chosen film, I would like the text to scroll up the way it does in the intro to Star Wars films.
* I would like to switch the screens which contain some sort of application state into a container folder and use the components folder for re-usable components only. For the purposes of this exercise, I thought the current setup is siffient. 


FINALLY:

* This was a fun one to build.
