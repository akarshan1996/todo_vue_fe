<template src='./ToDoItem.html'></template>

<script>
export default {
  name: "ToDoItem",
  props: ["todo", "actions"],
  methods: {
    toggleCompletionStatus(e, todoId) {
      this.actions.toggleTodo(todoId);
    }
  }
};
</script>

<style lang="scss" src="./ToDoItem.scss">
</style>