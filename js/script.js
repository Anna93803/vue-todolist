
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item una “x”: 
// cliccando su di essa, senza chiedere all’utente conferma, 
// il todo viene rimosso dalla lista.


// MILESTONE 3
// Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti

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
        addTextTodo: "",
    },

    methods: {
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
        },

        addTodo() {

            if(this.addTextTodo === "") {
                return
            }

            this.listTodo.push({
                text: this.addTextTodo,
                done: false,
            })

            this.addTextTodo = ""
        }
    }
});


