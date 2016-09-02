<template>
  <div class="sift">
    <!-- <img src="./assets/logo.png"> -->
    <h1 class="app_h1">{{ msg }}</h1>
    <content></content>
  </div>
</template>

<script>
export default {
  props: ['test'],
  data () {
    return {
      msg: 'Hello Vue! test'
    }
  }
}
</script>

<style>
.app_h1 {
  font-family: Helvetica, sans-serif;
  color:blue;
}
</style>
