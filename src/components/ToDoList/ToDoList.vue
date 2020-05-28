<template src="./ToDoList.html"></template>

<script>
// import Vue from "vue";
import ToDoItem from "../ToDoItem/ToDoItem.vue";
import AddToDo from "../AddToDo/AddToDo.vue";
import moment from "moment";

export default {
  name: "ToDoList",
  data() {
    return {
      day: moment().format("dddd"),
      todayDay: moment().format("Do MMMM YYYY")
    };
  },
  props: ["todos", "actions"],
  components: {
    ToDoItem,
    AddToDo
  },
  created() {
    console.log("Fetched todo list");
    this.actions.getTodos();

    // let vm = this;
    // Vue.nextTick(function() {
    //   console.log(vm.actions, vm.todos);
    // });
  },
  methods: {
    clearAllTodos() {
      let message = "Are you sure you want to delete all items?";
      let result = window.confirm(message);
      if (result) {
        this.actions.clearAllTodos();
      }
    }
  }
};
</script>

<style lang="scss" src="./ToDoList.scss">
</style>
