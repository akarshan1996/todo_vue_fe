<template src='./ToDoItem.html'></template>


<script>
export default {
  name: "ToDoItem",
  props: ["todo"],
  methods: {
    toggleCompletionStatus() {
      this.todo.completed = !this.todo.completed;
      this.$emit("reorderTodos");
    }
  }
};
</script>

<style lang="scss" src="./ToDoItem.scss">
</style>