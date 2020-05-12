<template>
  <div>
    <div id="app">
      <md-icon class="logo list md-primary md-size-5x">list</md-icon>

      <div class="md-layout">
        <div class="md-layout-item">
          <p
            class="col-sm-6"
          >Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
        </div>
        <div class="md-layout-item">
          <p
            class="col-sm-6"
          >Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>
        </div>
      </div>

      <AddToDo @add-todo="addTodo" />

      <to-do-list
        :todos="todos"
        @delete-todo="deleteTodo"
        @clear-todos="clearAllTodos"
        @reorderTodos="reorderTodos"
      />
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
import ToDoList from "./components/ToDoList/ToDoList.vue";
import AddToDo from "./components/AddToDo/AddToDo.vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

export default {
  name: "App",
  components: {
    ToDoList,
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
      this.todos = [newTodoObj, ...this.todos];
      this.reorderTodos();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    clearAllTodos() {
      this.todos = [];
    },
    reorderTodos() {
      this.todos.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1;
        } else if (!a.completed && !b.completed) {
          return 1;
        }
        return -1;
      });
    }
  },
  mounted() {
    this.reorderTodos();
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
.logo {
  // width: 600px;
  height: 70px !important;
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
