Solution
=====================

## Backend
- **The data is provided by a mock API**
- You need nodejs 16+ installed to run the mock API
- Run `npm install` then `npm run mock-api`
- The API endpoints will be available at `http://localhost:5000/`
- Enpoint details in the [Endpoints document](/ENDPOINTS.md)

## Frontend
- Run `cd frontend` then `npm install`
- Run `npm start` and the frontend will be available at `http://localhost:3000/`

## Concurrently
- Run `npm run develop`

## Frontend implementation checks
- [x] We will show a list of workflows retrieved from the server
- [x] The list items should be presented with a few pieces of information about the workflow
  - [x] workflow id & status
  - [x] duration of the workflow
  - [x] date workflow was execute
  - [x] any failed jobs

## Screenshots
### Desktop
![Screenshot](/screenshots/desktop.png?raw=true "Desktop Screenshot")
### Mobile
![Screenshot](/screenshots/mobile.png?raw=true "Mobile Screenshot")
## Extra points checks
- [x] Use a frontend framework (especially ones we use at Quadric: React)
- [ ] Use LocalStorage or IndexedDB in to cache data as you see fit.
- [x] Use a build system to compile/transform code and styles (webpack, css modules, etc.)
- [x] Responsive/mobile layout
- [x] Write out a list of changes you would like to make but didn't have time for (code and/or styling)
- [ ] Handle missing/invalid API data in UI (ie. unknown workflow status, null job duration, etc)
- [x] Useful comments in code
- [ ] Scalable project folder layout (ie. assume this was a large code project, organize the code/files for that)
- [ ] Add a details page/dialog with the job trace (use the `/traces` endpoint)

## If I have more time
- I will implement caching using `react-query`
- will add a detail page/dialog
- will handle missing/invalid API
