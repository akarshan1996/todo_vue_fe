<template>
  <md-toolbar class="md-primary" md-elevation="1">
    <h3 class="md-title" style="flex: 1">ToDo</h3>
    <md-button class="md-primary">Add ToDo</md-button>
    <md-button>About</md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>