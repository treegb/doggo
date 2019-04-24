<template>
  <div id="app">
    <headerr
      v-bind:crrNav="crrNav"
      v-on:toggleNav="toggleNav"
    />
    <game
      v-show="crrNav === 'navGame'"
      v-bind:gameHist="gameHist"
    />
    <rules v-show="crrNav === 'navRules'" />
    <score
      v-show="crrNav === 'navScore'"
      v-bind:gameHist="gameHist"
      />
  </div>
</template>

<script>
import game from './components/game.vue'
import rules from './components/rules.vue'
import score from './components/score.vue'
import headerr from './components/headerr.vue'

export default {
  name: 'App',
  components: {
    game,
    rules,
    score,
    headerr,
  },
  data () {
    return {
      crrNav: "navGame",
      gameHist: {
        cheatCount: 0,
        gameMode: null,
        timeUsed: null,
        roundHist: [],
      },
    };
  },
  created () {
    console.debug = () => {};
    /* .Temporary disable all { console.debug() } messages. It is consider by most people
     * that showing { console.log() } (and related) is not a "good practice"
     * though I don't agree it. But still I follow this practice. */
    console.debug(".In { apps.vue }.");
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
  --clorOk: #177539;
  --clorError: #757517;
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
