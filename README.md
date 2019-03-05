# README

Poll Anywhere
Poll Anywhere is a clone of Poll Everywhere, created using Ruby on Rails and React.js.

Single Page with React routing
Poll Anywhere is a single-page app that uses React routes and nested components to mimic multi-page functionality. Users have access to the following distinct regions:

Homepage
Signin
Signup
User polls list with links to each poll's page and each poll's edit form
Poll page with data chart
Poll creation form
Poll response form


Multiple-Choice Polls
Users can create multiple-choice polls with any number of choices. In the poll creation form, there are two input boxes for choices by default, and an "Add Option" button that generates additional inputs for choices upon clicking. Once users click create, the poll and its associated choices are added to the database, and users are redirected to their poll's page, which instantly contains the newly created poll.

Upon clicking "Create", the survey instantly appears in the user's list of surveys. Reporting and the participation page are available immediately.

At all times, a dummy question box sits at the bottom of the modal, inviting the user to enter a new question. This input field has a change handler set. When the user enters text in the dummy question box, the handler create a real question box component instantly, transferring the text to the new component; changing the focus; and clearing the dummy question box. Additional questions can be created by typing into the dummy box.

Options
New question components have two option components by default. These components can be edited and deleted prior to save. Options can be text, an image, or both. The image-upload interface provided by Cloudinary is simple, but sufficient to create polls with high-quality imagery.

Anonymous Participation
Users can participate in Poll Anywhere polls with or without an account. To track anonymous users, the app sets a simple cookie and creates a temporary account in "anon" mode (flagged at the database level).

Users can only vote once, but they can change and/or remove an original vote by clicking on different options. To update a user's vote, the option component evaluates the circumstances and sends an appropriate response to the database: create (if no previous votes are associated with the current question and user account), update (if the user previously selected a different option) or delete (if the user has clicked an already-selected response).

Reporting Page
The reporting page presents a large-font rendering of the link to the survey's voting page, followed by a separate bar graph (QuestionReport component) for each question in the survey. The bar graph is composed of divs within divs. The inner divs are ResponseOption React components that each represent one possible answer to the question. The width of the innermost div is controlled by an inline style, which is recalculated every time the parent QuestionAndAnswers component registers a new, changed, or deleted vote from Pusher, causing the OptionDisplay components to re-render.

Real-Time Updates
Pusher's easy-to-implement websocket API allows votes to appear within milliseconds of casting, and to disappear just as quickly if a user removes their vote.

Design Docs
View Wireframes

React Components

Flux Cycles

API endpoints

DB schema
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
