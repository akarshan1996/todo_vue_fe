<template>
  <div>
    <md-card class="md-primary">
      <md-card-header>
        <div class="md-title">My ToDo List</div>
        <div class="md-subhead">Things To Do</div>
      </md-card-header>

      <md-card-content>
        <VclBulletList v-if="todos.length === 0" />
        <ul v-else>
          <li :key="todo.id" v-for="todo in todos">
            <ToDoItem :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />
          </li>
        </ul>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-accent" @click="$emit('clear-todos')">Clear All</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
import { VclBulletList } from "vue-content-loading";

export default {
  name: "ToDoList",
  props: ["todos"],
  components: {
    ToDoItem,
    VclBulletList
  }
};
</script>

<style lang="scss" scoped>
h3 {
  // margin: 40px 0 0;
}
ul {
  list-style-type: none;
  // padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
// a {
//   color: #42b983;
// }

.md-layout-item {
  height: 40px;
  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(red, 200);
    content: " ";
  }
}
.md-card {
  width: 550px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
