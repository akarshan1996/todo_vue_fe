<template src="./ToDoList.html"></template>

<script>
import ToDoItem from "../ToDoItem/ToDoItem.vue";
// import { VclBulletList } from "vue-content-loading";

export default {
  name: "ToDoList",
  props: ["todos"],
  components: {
    ToDoItem
  },
  created() {
    console.log("inside created of todolist");
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
