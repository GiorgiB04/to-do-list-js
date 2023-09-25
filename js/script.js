{

    const tasks = [
        {
            content: "learn Javascript",
            done: true,
        },
        {
            content: "learcn CSS",
            done:  true,
        },
        {
            content: "learn React",
            done: false,
        },

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `   
                <li class="tasks__item">
                    <button class="task__button js-done ${task.done ? "task__button--cheked" : ""} ">
                    ${task.done ? "✓" : " "}
                    </button>
                    
                    <span class="tasks__content ${task.done ? "tasks__item--checked" : ""}">
                    ${task.content}
                    </span>
                    <button class="remove__button js-remove">🗑</button>
                </li> 
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            } );
        });


        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            } );
        });

    };

    const onFormSubmit = (event)  => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}