<template src="./ToDoList.html"></template>

<script>
// import Vue from "vue";
import ToDoItem from "../ToDoItem/ToDoItem.vue";

export default {
  name: "ToDoList",
  props: ["todos", "actions"],
  components: {
    ToDoItem
  },
  mounted() {
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
