<template>
  <div>
    <form @submit.prevent="addNewToDo($event)">
      <md-field md-clearable class="add-todo">
        <label>e.g. Feed your cat</label>
        <md-input v-model="title" type="text" name="newTodo" autocomplete="off" />
      </md-field>
      <md-button class="md-icon-button" type="submit" v-if="title.length !== 0">
        <md-icon class="fa fa-plus md-primary"></md-icon>
      </md-button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddToDo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addNewToDo(e) {
      e.preventDefault();
      console.log(e);
      const newToDo = {
        id: uuidv4(),
        title: e.target[0].value,
        completed: false
      };
      this.$emit("add-todo", newToDo);
      e.target[0].value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.add-todo {
  width: 530px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>