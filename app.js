let todo = [];

let req = prompt("Please enter your request (add, list, delete, quit):");

while (true) {
    if (req === "quit") {
        console.log("Quitting the app...");
        break;
    }

    if (req === "list") {
        console.log("____________");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("____________");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add:");
        todo.push(task);
        console.log("Task added.");
    } else if (req === "delete") {
        let index = prompt("Please enter the index of the task you want to delete:");
        index = parseInt(index);
        if (!isNaN(index) && index >= 0 && index < todo.length) {
            let removed = todo.splice(index, 1);
            console.log(`Deleted task: "${removed[0]}"`);
        } else {
            console.log("Invalid index.");
        }
    } else {
        console.log("Unknown command. Try 'add', 'list', 'delete', or 'quit'.");
    }

    req = prompt("Please enter your request (add, list, delete, quit):");
}

