<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="{ todos, actions }">
      <div id="app">
        <to-do-list :todos="todos" :actions="actions" />
      </div>
    </template>
  </Provider>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import Provider from "vuejs-redux";
import { bindActionCreators } from "redux";

import * as Actions from "./utils/action-creators";
import store from "./utils/store";
import ToDoList from "./components/ToDoList/ToDoList.vue";
import { getSortedTodosSelector } from "./utils/selectors";

Vue.use(VueMaterial);

export default {
  name: "App",
  components: {
    ToDoList,
    Provider
  },
  data() {
    return {
      store,
      isButtonDisabled: false
    };
  },
  methods: {
    mapStateToProps(state) {
      return { todos: getSortedTodosSelector(state) };
    },
    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(Actions, dispatch) };
    }
  },
  mounted() {
    // let vm = this;
    // Vue.nextTick(function() {
    //   console.log(vm.actions, vm.todos);
    // });
  },
  created() {
    // console.log("vm instance value", this);
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
.logo {
  // width: 600px;
  height: 70px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
