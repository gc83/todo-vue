todos = [];

const toDoList = {
  data() {
    return {
      lien: "https://twitter.com/GuillaumeXR",
      title: "To-do list ",
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
        alert("Ecrivre d'abord une nouvelle chose a faire 😄");
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
