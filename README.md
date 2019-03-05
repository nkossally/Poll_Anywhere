# README

## Poll Anywhere
Poll Anywhere is a clone of Poll Everywhere, created using Ruby on Rails and React.js.

## Single-Page Application with React routing
Poll Anywhere is a single-page application that uses React routes and nested components in order to mimic multi-page functionality. Users have access to the following API endpoints:

Homepage
Signin
Signup
User polls list with links to each poll's page and each poll's edit form
Poll page with data chart and link poll response form
Poll creation form
Poll response form
Poll edit form

## Poll Creation
Users can create multiple-choice polls with any number of choices. In the poll creation form, there are two input boxes for choices by default, and an "Add option" button that generates additional inputs for choices. Once users click create, the poll and its associated choices are added to the database, and users are redirected to their polls list page, which instantly contains the newly created poll. Polls can be activated by clicking the activation icon next to the target poll's title in the polls list. Alternatively, users can navigate to a poll's page by clicking its title in the polls list and then clicking the "Activate" icon.

![](https://github.com/nkossally/Poll_Anywhere/blob/master/app/assets/images/how_create_poll.png width=100)

## Poll Response
Each poll's page contains a link to the poll's response form. A poll can only receive a response when active. Poll creators distribute the link to respondants. Respondants must be logged in order to respond. Respondants click one of the multiple choice options in order to have their response persisted to the database. If the creator of the poll views an active poll's page at the time a response is persisted, then the creator can nearly instaneously witness the response being added to the bar chart of response counts. Pusher's easy-to-implement websocket API enables this nearly instantaneous data presentation

## Groups
Users can create groups on their polls list page. Users have at least one group by default: the "Ungrouped" group. This group is generated once a user signs up. In the polls list page, users can select polls and then click the button "Group", trigger the display of a modal that contains an input form for a new group. Users type in the name of the group, click "Create," and then the selected polls are reassigned to the newly created group. Users can also move polls to the "Ungrouped" group by selecting a poll and then clicking "Ungroup." Finally, users can reassign polls from one group to another by clicking a poll and dragging it under the title of the group to which the poll will be assigned. This drag and drop feature uses native HTML 5.

## Technologies
Poll Anywhere uses Ruby 2.5.1 and Pusher 1.3.2
