<template>
  <div>
    <a href="url" class="nav-link">
      <!-- <slot user="Akarshan Gupta">"Fallback text here""</slot> -->
      <!-- <slot :user="user">{{ user.fallback }}</slot> -->
      <br />
      <!-- <slot name="namedSlot" :account="account">{{ user.fallback }}</slot> -->
      <!-- <slot name="header" :user="user"></slot>-->
      <!-- <slot name="footer"></slot> -->
      <!-- Default slot -->
      <!-- <slot></slot> -->
    </a>

    <!-- <button @click="hello">Print Prop</button> -->
  </div>
</template>

<script>
export default {
  name: "navigationLink",
  props: ["componentProp"],
  data: () => ({
    user: {
      first: "akarshan",
      last: "gupta",
      fallback: "no value passed from child component"
    },
    account: {
      id: "abf6fd7df8dhdf",
      fallback: "no value passed from child component "
    }
  }),
  methods: {
    hello() {
      console.log(this.componentProp);
    }
  }
};
</script>