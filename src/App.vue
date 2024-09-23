<template>
  <div id="app">
    <Sudoku />
  </div>
</template>

<script>
import Sudoku from './components/Sudoku.vue';

export default {
  components: {
    Sudoku,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid black
}
</style>