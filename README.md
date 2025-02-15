## The Challenge

This is a simple app that displays the latest news worldwide using the [newsapi.org](https://newsapi.org) service.

Running the app we should be able to see the latest **news**. The user should have the ability to filter by keywords (
see [everything endpoint api](https://newsapi.org/docs/endpoints/everything)). Optionally, if the user clicks on a news
item it will navigate to a page displaying the full news article selected.

This app consists of an existing frontend app and a backend service.
 - backend service: http://localhost:3001/news/top-headlines?country=us
 - frontend app: http://localhost:3000/ 

This is a code challenge for you as full Stack developer you should be able to build on top of this following the todo 
list we provided in each of the README files.

## Prerequisites
 - Node.js v16+ (https://nodejs.org/en/download/) You can use [nvm](https://github.com/nvm-sh/nvm#intro) 
 - A Web Browser (Chrome, Firefox, Safari, Edge, etc.)
 - A text editor (VSCode, Webstorm, Sublime, etc.)
 - Zoom (https://zoom.us/download) to share your screen with us

## Setup

Make sure you are running on node 16:
```
cd fullstack-code-challenge
nvm use
```

Setup npm workspaces:
```bash
# This installs the dependencies for both the frontend and backend
npm install
```

When you're ready to start the challenge:

```bash
# This start both the frontend and backend on watch mode
npm run dev
```

Good luck!

## ToDos

On backend service:

- Implement endpoint to provide all news by keyword
- Improve existing unit tests
- Add error handling

On frontend app:

- Implement search by keyword
- Pagination of articles (max 100 articles can be fetched with dev account on newsapi.org)
- Implement responsive design
