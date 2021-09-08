todos = [];
instructions = [
  { inst: "Use the input field to add new to-dos" },
  { inst: "Click the to-do text to toggle between done / undone" },
  { inst: "Use clear all button to remove all items" },
];

const toDoList = {
  data() {
    return {
      title: "To-do list ",
      instructions: instructions,
      todos: todos,
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.todo) {
        this.todos.push(this.newTodo);
        console.log(todos);
        this.newTodo = {
          done: false,
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("Write something first 😄");
      }
    },
  },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : this.todos;
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

Vue.createApp(toDoList).mount("#app");
