<template src="./AddToDo.html"></template>

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
      if (e.target[0].value.length > 0) {
        const newToDo = {
          id: uuidv4(),
          title: e.target[0].value,
          completed: false
        };
        this.$emit("add-todo", newToDo);
        e.target[0].value = "";
      }
    }
  }
};
</script>
<style lang="scss" src="./AddToDo.scss">
</style>