<template>
  <div id="app">
    <h1>Hello, Vue.js!</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increase Counter</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
button {
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
}
</style>