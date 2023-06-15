## Practice

This sprint has 4 practices.

First two practices are mandatory and the last two are optional.

## Context

Keep App is created by Creative Coders – a software development company. This App helps a user to maintain his daily To-Do tasks. A user can add a new note, view existing notes, and delete the selected note through this App. ​

For convenience, the App provides a feature that allows a user to view the notes in the form of a grid or a list. ​

In the current stage, the UI of the App is ready. You will be required to enable the functionalities in the App that will allow adding, displaying, and deleting operations on note data. Also, enable the toggle view functionality to switch between the grid and list views. ​

### Problem Statements

#### Practice 1 - Add a New Note to the To-Do List​ (Mandatory Practice)

Write a JavaScript code that captures the details of the note entered by the user.​

​The code should save the captured details and store them as an object in the notes array.​

array.

##### Steps

Step 1: Define JavaScript function `saveNote()` in the script.js file. The function saveNote() should:​

- Read the note details inputted by the user on the web page.​
- Implement validation to check for missing note details.
- Display confirmation message if the note details are provided and the note gets stored in the notes array. ​

Step 2: The function `saveNote()` should get invoked when the user clicks the `Add Note` button.​

**Note:**
- Ensure the `note-id` inputted should be unique.
- Use the `<script>` tag in index.html file to refer to the `script.js` file.​

#### Practice 2 - Display All Notes From the To-Do List​ (Mandatory Practice)

Write a JavaScript code that reads notes data from the notes array and displays them on the UI.​

Each of the notes' data should be displayed in a card layout.

##### Steps

Step 1: Define JavaScript function `displayNotes()` in the script.js file. The function `displayNotes()` should:​

- Read the details of notes from the notes array.​
- Dynamically add a div element for each note in the array.​
    - The div element should contain:​
        - A heading element to display the title of the note.​
        - A para element to display content of the note.​
    - The div element should be applied with style properties to display the note in a card layout.​

**Note: To add `note` data to the card, use `innerHTML` or `textContent` properties only.**

Step 2: The function `displayNotes()` should get invoked when the page loads.​

#### Practice 3 - Delete a Note from the Todo List ​ (Optional Practice)

Modify JavaScript code that adds a new note to the existing note list. The code should now add a Delete button to each card displaying the notes data.​

Upon clicking the button, the corresponding note should get deleted.

##### Steps

Step 1: In the script.js file, modify the `displayNotes()` function code to dynamically add a button to delete the note.​

- Style the button to make it look raised.​

Step 2: Define JavaScript function `deleteNote()` to delete the selected note and remove it from the notes array.​

- The function should:​
    - Accept id of note as the parameter​
    - Find the note by the id in the array and remove the note 
    - Upon deletion, display the confirmation message​.
Step 3: The function `deleteNote()` should be used as the event handler method for the delete button.​

#### Practice 4 - Toggle the Notes View​ (Optional Practice)

The notes on the UI should by default be displayed in the grid view.​

Provide an option on the UI that will allow users to toggle between the grid view and the list view.

##### Steps

Step 1: In the script.js file, define function `toggleView()`. The `toggleView()` function should dynamically add styles/CSS class that toggles the view between grid view and list view.​

Step 2: The function `toggleView()` should get invoked when the user clicks on the link with the text "Toggle View".

### Submission Instructions

1. This is a test enabled practice, hence, the solution will have to undergo automated evaluation process. 
    - For automated evaluation, the solution should be first tested locally and then on hobbes.
2. Steps to test the code locally:
    1. Ensure the solution code is provided in the specified files only.
    2. From the command line terminal, set the path to the folder containing cloned boilerplate code.
    3. Run the command `npm run test` to test the solution locally.
    4. Ensure all the test cases are passing locally and then push the solution to git for automated testing on `hobbes`.
3. Steps to test the code on hobbes:
    1. Open the submission page at `https://codereview.stackroute.niit.com/#/submission`.
    2. Submit the solution.
    3. For the failed test cases, refactor the code locally and submit it for re-evaluation.
