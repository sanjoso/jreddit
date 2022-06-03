# Reddit Client

## Description

This was a challenge project I made for Codecademy's Full-Stack Engineering Career Path. The goal was to use the Reddit JSON API and build a Reddit client from scratch. All aspects from conception, design, coding, and deployment were done by me.

### **Requirements**

There were many requirements for this project, and they include:

- [x] The app must be built using React and Redux.
- [x] The app must be version controlled with Git, and the repository hosted on GitHub.
- [x] You must use a project management tool (**GitHub Projects**, ~~Trello~~, _etc..._)
- [x] Write a README.md that documents the project including:
  - [x] Wireframes
  - [x] Technologies used
  - [x] Application Features
  - [x] Future update plans
- [x] The app is available on both desktop and mobile.
- [x] Users can access the application [live](https://jreddit.netlify.app/).
- [x] Users see an intial view of the data when first visiting the app.
- [x] Users can search the data using terms.
- [x] Users are delighted with a cohesive design system.
- [x] users are delighted with animations and transitions.
- [x] users are able to leave an error state.
- [x] App gets 90+ scores on [Lighthouse](https://web.dev/measure/)

## Features

- My take on the project was to make a client that would display images very well, and was designed well. Too many Reddit clients are clunky and full of info. I tried to put the media front and center. Therefore, this client works best when searching subreddits with images.
- Users can search for subreddits, click individual posts, and see top-level comments for each post.
- The client is hosted with Netlify, so any changes to the main branch are auto-deployed.


## Future Work

- I plan to switch to the official Reddit API instead of the JSON API (which was the API we were supposed to use for this project), as that would give the user write capabilities, as the JSON API is read-only.
- I plan to incorporate pagination using Reddit's "after" key in JSON responses.
