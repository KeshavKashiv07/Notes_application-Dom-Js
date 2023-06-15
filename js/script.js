let noteList = [];

let view = "grid"; //default view is grid-view


//task-1 : define function `saveNote() ` to add note
function saveNote(event){
    event.preventDefault();
    console.log("Adding");

    const note = {
        id:document.getElementById("note-id").value,
        title:document.getElementById("note-title").value,
        content:document.getElementById("note-content").value
    }
    noteList.push(note);
    console.log(noteList);
    //alert("data added succesfully")
    creatCard(note);    
    clearFields();

}
function clearFields() {
    document.getElementById("note-id").value = "";
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
}

function creatCard(note) {
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');

    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardTitle = document.createElement('h5');
    cardTitle.textContent = note.title;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardContent = document.createElement('p');
    cardContent.classList.add('card-text');
    cardContent.textContent = note.content;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click' , ()=>{
        deleteNote(note.id)
    })

    cardHeader.appendChild(cardTitle);
    cardBody.appendChild(cardContent);


    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(deleteBtn);
    
    
    containerDiv.appendChild(cardDiv);
}

//task-2 : define function `displayNotes()` to display all notes
function displayNotes() {
    let containerDiv = document.getElementById('note-container');
    containerDiv.innerHTML = '';
    noteList.forEach(array => {
        creatCard(array);
    })
}

 
//task-3 : delete note - This task is Optional
function deleteNote(id) {
    let indexNote = noteList.findIndex((array)=>{
                    return array.id===id;
    });
         if(indexNote!==-1){
            noteList.splice(indexNote,1);   // remove 1 element of IndexNode(index postion of a element which we passed here) Postion  value. 
            alert("Deleted Successfully.");
            displayNotes();
        }
    
}
 
//task-4 : toggle note view - This task is Optional
function toggleView() {
    const view=document.getElementById("note-container");
    if(view.style.display==="flex"){
    view.style.display="grid";
    }
    else{
    view.style.display="flex";
    }
    
}

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView
}
