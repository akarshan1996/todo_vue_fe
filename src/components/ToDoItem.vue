<template>
  <span>
    <div class="todo-item">
      <md-content class="md-primary" :class="{ 'completed': todo.completed }">{{todo.title}}</md-content>
      <span class="fa fa-close close-icon" @click="$emit('delete-todo', todo.id)"></span>
      <md-button
        class="todo-done md-accent md-raised"
        @click="toggleCompletionStatus"
      >{{todo.completed ? 'Not done' : 'Complete'}}</md-button>
    </div>
  </span>
</template>


<script>
export default {
  name: "ToDoItem",
  props: ["todo"],
  methods: {
    toggleCompletionStatus() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>
<style lang="scss" scoped>
.todo-done {
  font-size: 10px;
  width: 10px;
}
.completed {
  text-decoration: line-through;
}
.close-icon {
  cursor: pointer;
}
.md-content {
  width: 200px;
  height: 40px;
  display: inline-flex;
  // justify-content: center;
  align-items: center;
}
</style>