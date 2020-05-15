<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="{ stateValues, actions }">
      <div id="app">
        <md-icon class="logo list md-primary md-size-5x">list</md-icon>
        <div class="md-layout">
          <div class="md-layout-item">
            <p
              class="col-sm-6"
            >Completed Tasks: {{stateValues.todos && stateValues.todos.length !== 0 ? stateValues.todos.filter(todo => {return todo.completed === true}).length: 0}}</p>
          </div>
          <div class="md-layout-item">
            <p
              class="col-sm-6"
            >Pending Tasks: {{stateValues.todos && stateValues.todos.length !== 0 ? stateValues.todos.filter(todo => {return todo.completed === false}).length : 0}}</p>
          </div>
        </div>
        <AddToDo :todos="stateValues.todos" :actions="actions" />
        <to-do-list :todos="stateValues.todos" :actions="actions" />

        <div>
          <navigation-link componentProp="it is random prop to this component">
            <!-- <template v-slot:default="slotProps">{{ slotProps}}</template> -->
            <!-- <template v-slot:default="{user}">{{ user.first }}</template> -->
            <!-- <template #default="slotProps">{{ slotProps}}</template> -->

            <template #namedSlot="namedSlot">{{namedSlot.account.id}}</template>
          </navigation-link>

          <!-- <navigation-link v-slot:default="slotProps">{{ slotProps.user.first }}</navigation-link> -->

          <!-- <navigation-link url="/profile"></navigation-link> -->

          <!-- <navigation-link>
          <!-- <template #header="{user}"> 
          <!-- <h5 slot="header" slot-scope="slotProps">(header) Here might be a page title{{slotProps}}</h5> 

          <template #header="{user}">
            <h5>(header) Here might be a page title {{user}}</h5>
          </template>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
          <template #footer>
            <p>(footer) Here's some contact info</p>
          </template>
          </navigation-link>-->

          <!-- <vue-content-loading :width="300" :height="100">
            <circle cx="30" cy="30" r="30" />
            <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
            <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
          </vue-content-loading>>-->
        </div>
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
import AddToDo from "./components/AddToDo/AddToDo.vue";

import navigationLink from "./components/navigationLink";

Vue.use(VueMaterial);

export default {
  name: "App",
  components: {
    ToDoList,
    AddToDo,
    Provider,
    navigationLink
  },
  data() {
    return {
      store,
      isButtonDisabled: false
    };
  },
  methods: {
    mapStateToProps(state) {
      return { stateValues: state };
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
    // const actions = this.mapDispatchToProps();
    // actions.reorderTodos();
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
