<template>
  <v-a-fader v-model="test" :minValue="0" :maxValue="1" />
  <v-a-knob v-model="test" :minValue="0" :maxValue="1" />
  <br />
  {{ test }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      test: 0,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
