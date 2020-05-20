<template src='./ToDoItem.html'></template>

<script>
export default {
  name: "ToDoItem",
  props: ["todo", "actions"],
  methods: {
    toggleCompletionStatus(e, todoId) {
      console.log("inside togggle completion");
      this.actions.toggleTodo(todoId);
    }
  }
};
</script>

<style lang="scss" src="./ToDoItem.scss">
</style>