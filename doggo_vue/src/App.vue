<template>
  <div id="app">
    <headerr
      v-on:toggleNav="toggleNav"
      v-bind:crrNav="crrNav"
    />
    <game v-show="crrNav === 'navGame'" />
    <rules v-show="crrNav === 'navRules'" />
    <score v-show="crrNav === 'navScore'" />
  </div>
</template>

<script>
import game from './components/game.vue'
import rules from './components/rules.vue'
import score from './components/score.vue'
import headerr from './components/headerr.vue'

export default {
  name: 'app',
  components: {
    game,
    rules,
    score,
    headerr,
  },
  data () {
    return {
      crrNav: "navGame",
      foo: "x"
    };
  },
  methods: {
    toggleNav (crrNavEmitted) {
      this.crrNav = crrNavEmitted;
    }
  }
}
</script>

<style>
:root {
  --clorMain1: #17756A;
  --clorMain1Shade1: #59A39A;
  --clorMain1Shade2: #8dc9c2;
  --greyClorMain1: #777;
  --greyClorMain2: #a3a3a3;
  --greyClorMain3: #ccc;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
h2 {
  color: var(--greyClorMain2);
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: calc(0.0625rem * 1);
  word-spacing: calc(0.0625rem * 5);
  margin:2em auto;
}
</style>
