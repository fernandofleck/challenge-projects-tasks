(function(){


//Create to-do list in template-------------------------------------------------------------------

const List = document.getElementById('tasksList');

let tasksList = '';

for (let i = 0; i < 12; i++) {
    tasksList = tasksList.concat('<div class="mb-3 form-check col-3"><input type="checkbox" class="form-check-input" id="task'+(i+1)+'"><label class="form-check-label" for="task'+(i+1)+'">Task '+(i+1)+'</label></div>');
};

List.innerHTML = tasksList;

//------------------------------------------------------------------------------------------------

let listProjects = document.getElementById('projects');
let addNewProject = document.getElementById('addProject');
let nameNewProject = document.getElementById('projectName');
let tasks = [], c=0;

console.log(listProjects);
console.log('--------------------------------');
console.log('--------------------------------');
console.log(List.children[1].children[0].checked);
console.log('--------------------------------');
console.log('--------------------------------');


//------------------------------------------------------------------------------------------------

let newProject = function() {
    let name = nameNewProject.value;
    let nm = document.createTextNode(name);
    let tasksListCompleted = document.getElementById('tasksList');
    let project = document.createElement('div');
    let title = document.createElement('h3');
    let projectItems = '';

    for (let i = 0; i < tasksListCompleted.children.length; i++) {
		if (tasksListCompleted.children[i].children[0].checked) {
            tasks[c] = tasksListCompleted.children[i].children[1].textContent;
            c++;
        }
	};

    c=0;

    for (let i = 0; i < tasks.length; i++) {
        projectItems = projectItems.concat('<li class="list-group-item">'+tasks[i]+'</li>');
    };

    title.appendChild(nm);
    project.appendChild(title);
    project.setAttribute('class', 'd-flex flex-wrap');
    project.lastChild.setAttribute('class', 'me-auto col');
    project.appendChild(document.createElement('input'));
    project.lastChild.setAttribute('type', 'button');
    project.lastChild.setAttribute('class', 'btn-close ms-auto col-1');
    project.appendChild(document.createElement('ul'));
    project.lastChild.setAttribute('class', 'list-group mb-3 col-12');
    project.lastChild.innerHTML = projectItems;
    listProjects.appendChild(project);
}

//------------------------------------------------------------------------------------------------

for (let i = 0; i < listProjects.children.length; i++) {
    listProjects.children[i].addEventListener("click", deleteP);
}

//------------------------------------------------------------------------------------------------

addNewProject.addEventListener("click", newProject);

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

}());
//------------------------------------------------------------------------------------------------

