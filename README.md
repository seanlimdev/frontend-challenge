Quadric Web Challenge
=====================

Quadric is a platform that uses hardware and software to provide value to customers. There are many components to the platform. We will create a simple user facing front end to display some of the information the platform contains.

The component we will focus on is the the Graph editor from [Dev Studio](https://www.quadric.io/studio). When a workspace is compiled and executed, it processes the results in the background. Conceptually this is similar to a CI/CD pipeline for software development.

Our goal is to create a dashboard with a timeline of executed piplines and their results that users can see at a glance.

## Backend:
- The data is provided by a mock API.
- You need nodejs 16+ installed to run the mock API.
- Run `npm install` then `npm run mock-api`.
- The API endpoints will be available at `http://localhost:3000/`

## Frontend:
- We will show a list of pipelines retrieved from the server.
- The list items should be presented with a few pieces of information about the pipeline.
  - project name
  - pipeline id & status
  - number of jobs in the pipeline
  - failed jobs

## Guidelines:
- Frontend code should be in JavaScript ES6+ or TypeScript
- You can use JS/CSS libraries for logic and layout/styling.
- Include instructions on how to compile/run and/or view your site.
- Document any caveats about the code
- Only location with id "1" has mocked data.
- Use the endpoints schemas defined below for API calls (ie. using the `/db` endpoint as a shortcut is ***NOT ALLOWED*** in your solution)

## Extra points:
- Use a frontend framework (especially ones we use at Quadric: React)
- Use LocalStorage or IndexedDB in to cache data as you see fit.
- Use a build system to compile/transform code (webpack, grunt, gulp, etc.)
- Responsive/mobile layout

## Submission:
- Create your own Github/Bitbucket/Gitlab/etc. solution repo and send us the link
- Archive your solution in a .zip and email it back to us

### Inspiration
If you are looking for inspiration, you can try and emulate the Github Actions dashboard,
but replacing it with the API's from the mock server.

![Screenshot](/screenshots/gh_actions.png?raw=true "Inspiration Screenshot")


Good Luck!
Don't hesitate to contact us if you have any questions.

----

## Endpoint Schema Information

### Users (`/users`)
Users of the system that own & have access to various resources.

### Projects (`/projects`)
The projects hold various details at a high level. This can be thought of as a "repository" in
code hosting platforms.

### Pipelines (`/pipelines`)
Projects have workspaces that hold the graph representation of a neural network. When executed, a pipeline instance is created and executed. A pipline may be composed of many jobs perform various actions.
A pipelines `status` represents the overall status of the pipline.

### Jobs (`/jobs`)
Individual jobs that are dispatched and executed by runners. Jobs can be in one of many states, but a pipeline is only marked as completed if all jobs have succeeded or failed.

### Trace (`/traces`)
Jobs may produce log output (aka `traces`). These traces can potentially be displayed when the users
is looking into the details of a job.
