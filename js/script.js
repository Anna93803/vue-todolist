
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

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

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
    // nel data ho trasferito l'array di oggetti e salvato in una variabile, ho creato poi una variabile con stringa vuota che miservirà per il campo input
    data: {
        listTodo: todos,
        addTextTodo: "",
    },

    methods: {
        // ho creato una funzione che al click sulla x viene eliminato tutto l'oggetto selezionato
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
        },
        // ho creato un altra funzione dove tutto quello inserito nell'input testuale viene aggiunto alla lista dei todolist, con le sue proprietà
        // ho fatto un controllo che se il campo è vuoto e si clicca su aggiungi, non viene aggiunto nulla nella lista
        addTodo() {

            if(this.addTextTodo === "") {
                return
            }

            this.listTodo.push({
                text: this.addTextTodo,
                done: false,
            })
            // infine ho svutato il campo
            this.addTextTodo = ""
        }
    }
});


