<template src='./ToDoItem.html' ></template>

<script>
export default {
  name: "ToDoItem",
  props: ["todo", "actions"],
  methods: {
    toggleCompletionStatus: function(todoId) {
      this.actions.toggleTodo(todoId);
    },
    deleteTodo: function(event, todoId) {
      event.preventDefault();
      this.actions.deleteTodo(todoId);
    }
  }
};
</script>

<style lang="scss" src="./ToDoItem.scss">
</style>