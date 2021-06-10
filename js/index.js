(function(){

    //------------------------------------------------------------------------------------------------
    //Create to-do list in template-------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------

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

    //------------------------------------------------------------------------------------------------
    //Create New Project------------------------------------------------------------------------------
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
            projectItems = projectItems.concat('<li class="list-group-item d-flex flex-wrap"><div class="ms-2 me-auto col d-inline"><div class="fw-bold me-auto">'+tasks[i]+'</div>Description...</div><div class="form-check form-switch ms-auto col-2 d-inline"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"><label class="form-check-label" for="flexSwitchCheckDefault">Completed</label></div></li>');
        };

        title.appendChild(nm);
        project.appendChild(title);
        project.setAttribute('class', 'd-flex flex-wrap');
        project.lastChild.setAttribute('class', 'me-auto mb-2 col');
        project.appendChild(document.createElement('input'));
        project.lastChild.setAttribute('type', 'button');
        project.lastChild.setAttribute('id', 'deleteButton');
        project.lastChild.setAttribute('class', 'btn-close ms-auto mb-2 col-1');
        project.appendChild(document.createElement('ul'));
        project.lastChild.setAttribute('class', 'list-group mb-3 col-12');
        project.lastChild.innerHTML = projectItems;
        listProjects.appendChild(project);

        //---------------------------------------------------------------------------------------------
        //Delete Project-------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------
        for (var i = 0; i < listProjects.children.length; i++) {
			listProjects.children[i].children[1].addEventListener("click", function(){
                this.parentElement.remove(this);
            });
		};
    };


    //------------------------------------------------------------------------------------------------
    //Listeners---------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------

    addNewProject.addEventListener("click", newProject);

    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------

}());