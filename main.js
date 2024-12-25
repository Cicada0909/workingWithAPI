let users = [];

const container = document.querySelector(".container");

const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
    })
        .then((response) => {
            console.log("First then");
            if (response.ok) {
                // console.log(response.json());
                return response.json();
            }
        })
        .then((data) => {
            console.log("Second then");

            
            data.forEach((user) => {
                const div = document.createElement("div");
                const userNameElem = document.createElement("div");
                const userPhoneElem = document.createElement("div");

                userNameElem.textContent = user.name;
                userPhoneElem.textContent = user.phone;

                div.append(userNameElem);
                div.append(userPhoneElem);

                container.append(div);
            });
        })
        .catch((error) => {
            console.log("Catch error");
            
        })
        .finally(() => {
            console.log("End");
        })
}

const getTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((todo) => {
            todo.forEach((todo) => {
                const div = document.createElement("div");
                const todoElem = document.createElement("div");

                todoElem.textContent = todo.title;

                div.append(todoElem);

                container.append(div);
            });
        })

}

getUsers();

getTodo();


