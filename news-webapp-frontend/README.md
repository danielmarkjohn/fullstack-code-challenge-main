# news-webapp-frontend
React based web application to show news feed from newsapi.org

App has been build with node version v14.18.1
Please use node version > 14.0.0

## Setup

After cloning the repository to local, run below commands in the root directory of this project

```bash
npm install
```



## Usage
Pre-requisite: Backend application should be up and running for [newsapi.org](https://newsapi.org/) on port 3001


[Backend Application](https://github.com/CondeNast/fullstack-code-challenge/tree/main/news-webapp-backend)

Run below command for development purposes and start application on port 3000
Open the application on browser [localhost](http://localhost:3000)
```bash
npm run dev
```

Run below command to run unit tests
```bash
npm run test
```

Run local integration tests using cypress
```bash
npm run cypress
```

Run below command to run lint and to fix lint warnings
```bash
npm run lint
npm run lint--fix
```
For the production build, configure backend endpoint at .env.
Please refer .env.development file
Run below command to create production build
```bash
npm run build
```
