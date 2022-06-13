
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item una “x”: 
// cliccando su di essa, senza chiedere all’utente conferma, 
// il todo viene rimosso dalla lista.


const todos = [
    {
        text: "Fare la spesa",
        done: true
    },
    {
        text: "Fare i compiti",
        done: false
    },
    {
        text: "Fare una passeggiata",
        done: false
    },
    {
        text: "Andare al mare",
        done: true,
    },
    {
        text: "Cucinare",
        done: true
    },
];

// console.log(todos);

const appVue = new Vue ({
    el: "#app",

    data: {
        listTodo: todos,
    },
    methods: {
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
        }
    }

});


