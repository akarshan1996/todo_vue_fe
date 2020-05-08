<template>
  <div>
    <NavBar />
    <div id="app">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <md-icon class="logo fa fa-list md-primary"></md-icon>

      <div class="row">
        <p
          class="col-sm-6"
        >Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
        <p
          class="col-sm-6"
        >Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>
      </div>

      <to-do-list :todos="todos" @delete-todo="deleteTodo" @clear-todos="clearAllTodos" />
      <AddToDo v-on:add-todo="addTodo" />
    </div>

    <!-- <vue-content-loading :width="300" :height="100">
      <circle cx="30" cy="30" r="30" />
      <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
    </vue-content-loading>>-->
  </div>
</template>
<script>
import Vue from "vue";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

export default {
  name: "App",
  components: {
    ToDoList,
    NavBar,
    AddToDo
  },
  data() {
    return {
      isButtonDisabled: false,
      todos: [
        {
          id: 1,
          title: "Go workout",
          completed: true
        },
        {
          id: 2,
          title: "Do laundry",
          completed: false
        },
        {
          id: 3,
          title: "Cook food",
          completed: false
        },
        {
          id: 4,
          title: "Clean up room",
          completed: true
        },
        {
          i: 5,
          title: "Finish work",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
      console.log(this.todos);
    },
    deleteTodo(id) {
      console.log("deleting todo");
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    clearAllTodos() {
      this.todos = [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
.logo {
  // width: 600px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
