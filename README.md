Quadric Web Challenge
=====================

Quadric is a platform that uses hardware and software to provide value to customers. There are many components to the platform. We will create a simple user facing front end to display some of the information the platform contains.

The component we will focus on is the the Graph editor from [Dev Studio](https://www.quadric.io/studio). When a workspace is compiled and executed, it processes the results in the background. Conceptually this is similar to a CI/CD pipeline for software development.

Our goal is to create a page with a timeline of executed workflows and their results that users can see at a glance.

## Backend:
- The data is provided by a mock API.
- You need nodejs 16+ installed to run the mock API.
- Run `npm install` then `npm run mock-api`.
- The API endpoints will be available at `http://localhost:3000/`

## Frontend:
- We will show a list of workflows retrieved from the server.
- The list items should be presented with a few pieces of information about the workflow.
  - project name
  - workflow id & status
  - duration of the workflow
  - date workflow was execute
  - any failed jobs

## Guidelines:
- Estimated effort should be 2-4 hours (DO NOT spend more than 4 hours on assignment)
- Frontend code should be in JavaScript ES6+ or TypeScript
- You can use JS/CSS libraries for logic and layout/styling
- You can use libraries to provide basic UI components (we would like to see a few components written by you)
- Include instructions on how to compile/run and/or view your site
- Document any caveats about the code
- Use the endpoints schemas defined below for API calls (ie. using the `/db` endpoint as a shortcut is ***NOT ALLOWED*** in your solution)
- Put in equal effort in the code and UI styling (ie. show off all your skill, not one more than the others)

## Extra points:
If you solved the problem and want to show off your knowledge on specific topics, consider doing the following:

- Use a frontend framework (especially ones we use at Quadric: React)
- Use LocalStorage or IndexedDB in to cache data as you see fit.
- Use a build system to compile/transform code (webpack, grunt, gulp, etc.)
- Responsive/mobile layout
- Write out a list of changes you would like to make but didn't have time for (code and/or styling)
- Handle missing/invalid API data in UI (ie. missing project name, unknown workflow status, etc)
- Useful comments in code
- Scalable project folder layout (ie. assume this was a large code project, organize the code/files for that)
- Add a details page/dialog with the workflow trace (use the `/traces` endpoint)

***Note: Focus on showing your coding & UI styling abilities before going for extra points.
We will review on basic guidelines before considering extra points.***

## Submission:
Create your own Github/Bitbucket/Gitlab/etc. solution repo and send us the link (prefered)
or archive your solution in a .zip and email it back to us (alternative)

### Inspiration
If you are looking for inspiration/an example for your page layout, you can try and emulate the
Quadric Workflows page. You can always make your own design/choose different colors as long as it solves the goals in the [Guidelines](#guidelines).

![Screenshot](/screenshots/quadric_workflows.png?raw=true "Inspiration Screenshot")


Good Luck!
Don't hesitate to contact us if you have any questions.

----

## Endpoint Schema Information

### Users (`/users`)
Users of the system that own & have access to various resources.

### Projects (`/projects`)
The projects hold various details at a high level. This can be thought of as a "repository" in
code hosting platforms.

### Workflows (`/workflows`)
Projects have workspaces that hold the graph representation of a neural network. When executed, a workflow instance is created and executed. A workflow may be composed of many jobs perform various actions.
A workflow `status` represents the overall status of the workflow run.

### Jobs (`/jobs`)
Individual jobs that are dispatched and executed by runners. Jobs can be in one of many states, but a workflow is only marked as completed if all jobs have succeeded or failed.

### Trace (`/traces`)
Jobs may produce log output (aka `traces`). These traces can potentially be displayed when the users
is looking into the details of a job.
