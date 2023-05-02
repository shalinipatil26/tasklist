let tasks = [];

function addTask() {
	const taskInput = document.getElementById("new-task");
	if (taskInput.value !== "") {
		const task = {
			name: taskInput.value,
			completed: false,
			created: new Date()
		};
		tasks.push(task);
		taskInput.value = "";
		updateLists();
	}
}

function deleteTask(index) {
	tasks.splice(index, 1);
	updateLists();
}

function editTask(index) {
	const newName = prompt("Enter new task name");
	if (newName !== null) {
		tasks[index].name = newName;
		updateLists();
	}
}

function completeTask(index) {
	tasks[index].completed = true;
	updateLists();
}

function updateLists() {
	const pendingList = document.getElementById("pending-list");
	const completedList = document.getElementById("completed-list");
	pendingList.innerHTML = "";
	completedList.innerHTML = "";
	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		const listItem = document.createElement("li");
		const taskName = document.createElement("span");
		taskName.innerText = task.name;
		listItem.appendChild(taskName);
		if (task.completed) {
			listItem.classList.add("completed");
			completedList.appendChild(listItem);
		} else {
			const completeButton = document.createElement("button");
			completeButton.innerText = "Complete";
			completeButton.onclick = function() { completeTask(i); };
			listItem.appendChild(completeButton);
			const editButton = document.createElement("button");
			editButton.innerText = "Edit";
			editButton.onclick = function() { editTask(i); };
			listItem.appendChild(editButton);
			const deleteButton = document.createElement("button");
			deleteButton.innerText = "Delete";
			deleteButton.onclick = function() { deleteTask(i); };
			listItem.appendChild(deleteButton);
			pendingList.appendChild(listItem);
		}
	}
}
