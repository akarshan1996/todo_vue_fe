<template src="./ToDoList.html"></template>

<script>
import ToDoItem from "../ToDoItem/ToDoItem.vue";
// import { VclBulletList } from "vue-content-loading";

export default {
  name: "ToDoList",
  props: ["todos"],
  components: {
    ToDoItem
    // VclBulletList
  }
};
</script>

<style lang="scss" src="./ToDoList.scss">
</style>
