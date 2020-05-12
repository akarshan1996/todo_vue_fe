<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="{ todos, actions }">
      <div id="app">
        <md-icon class="logo list md-primary md-size-5x">list</md-icon>
        <div class="md-layout">
          <div class="md-layout-item">
            <!-- <p
              class="col-sm-6"
            >Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>-->
          </div>
          <div class="md-layout-item">
            <!-- <p
              class="col-sm-6"
            >Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>-->
          </div>
        </div>
        <AddToDo @add-todo="addTodo" />
        <to-do-list
          :todos="todos"
          :actions="actions"
          @delete-todo="deleteTodo"
          @clear-todos="clearAllTodos"
          @reorderTodos="reorderTodos"
        />
      </div>
    </template>
    <!-- <vue-content-loading :width="300" :height="100">
      <circle cx="30" cy="30" r="30" />
      <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
    </vue-content-loading>>-->
  </Provider>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import Provider from "vuejs-redux";
import { bindActionCreators } from "redux";

// import { addTodo } from "./utils/action-creators";
import * as Actions from "./utils/action-creators";
import store from "./utils/store";
import ToDoList from "./components/ToDoList/ToDoList.vue";
import AddToDo from "./components/AddToDo/AddToDo.vue";

Vue.use(VueMaterial);

export default {
  name: "App",
  components: {
    ToDoList,
    AddToDo,
    Provider
  },
  data() {
    return {
      store,
      isButtonDisabled: false
    };
  },
  methods: {
    mapStateToProps(state) {
      return { todos: state };
    },
    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(Actions, dispatch) };
    }
  },
  mounted() {
    // this.reorderTodos();
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
