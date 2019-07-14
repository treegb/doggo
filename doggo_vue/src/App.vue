<!--
  .Planning:
  ..Do CSS and media query for mobile screen.
  ..Deploy.
  ..Finish another game mode.
-->
<template>
  <div id="app">
    <headerr
      v-bind:crrNav="crrNav"
      v-on:toggleNav="toggleNav"
    />
    <game
      v-show="crrNav === 'navGame'"
      v-bind:crrNav="crrNav"
      v-bind:gameHistProps="gameHist"
      v-on:gameHistEmitThrow="gameHistEmitCatch"
      v-on:crrNavEmitThrow="crrNavEmitCatch"
    />
    <help v-show="crrNav === 'navHelp'" :ifPageIsFocused="crrNav === 'navHelp'"></help>
    <score
      v-show="crrNav === 'navScore'"
      v-bind:gameHist="gameHist"
      />
    <footer><p>Build with Vue.js, by treegb</p></footer>
  </div>
</template>

<script>
import game from './components/game.vue'
import help from './components/help.vue'
import score from './components/score.vue'
import headerr from './components/headerr.vue'

// .Loading jquery (locally, only works for this component) by following this method:
// https://medium.com/code4mk-org/how-to-use-jquery-inside-vue-add-other-js-library-inside-vue-9eea8fbd0416
// =====================================================================================
import jquery from 'jquery';
let $ = jquery;
// =====================================================================================

export default {
  name: 'App',
  components: {
    game,
    help,
    score,
    headerr,
  },
  data () {
    return {
      crrNav: "navGame",
      gameHist: {
        cheatCount: 0,
        gameMode: null,
        gameTime: null,
        // .About data structure, see { game } component.
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
    crrNavEmitCatch (crrNav) {
      /* .Results.
       * =========
       * .this.crrNav.
       * ========= */

      this.crrNav = crrNav;
    },
    gameHistEmitCatch (gameHist) {
      /* .Results.
       * =========
       * .this.gameHist.
       * ========= */

      /* .Pass by reference: I think pass by reference is ok, since we will
       * using this data read-only, not going to mutating them.
       * .I don't think beside { game } component, anyone will modifiy this piece
       * of data, so it is not necessary to clone again.
       * =================================================================== */
      this.gameHist = gameHist;
      // this.gameHist = $.extend(true, {}, gameHist);
      /* =================================================================== */
    },
    toggleNav (crrNavEmitted) {
      /* .Depends.
       * =========
       * .this.crrNav.
       * ========= */

      this.crrNav = crrNavEmitted;
    },
  }
}
</script>

<style lang="scss">
@import "@/style/base.scss";

  :root {
    --clorMain1: #{$clorPrimary};
    --clorMain1Shade1: #59A39A;
    --clorMain1Shade2: #8dc9c2;
    --clorOk: #{$clorOk};
    --clorError: #{$clorError};
    --greyClorMain1: #{$clorGrey};
    --greyClorMain2: #a3a3a3;
    --greyClorMain3: #ccc;
  }
  //@font-face {
  //  /* .A more enthusiastic font. */
  //  font-family: "aclonica";
  //  src: url('./font/aclonica.ttf')
  //       format("truetype");
  //}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans TC', sans-serif;
    color: var(--greyClorMain1);
  }
  h2 {
    color: var(--greyClorMain2);
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: calc(0.0625rem * 2);
    word-spacing: calc(0.0625rem * 7);
    margin:2em auto;
    font-weight: 900;
  }
  footer {
    margin: 8em 0 0 0;
    background-color: var(--clorMain1);
    min-height: 3.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--greyClorMain1);
  }
  footer > * {
    font-size: 0.87em;
  }
  button {
    border: calc(0.0625em * 1) solid var(--greyClorMain2);
    /*background-color: var(--clorMain1);*/
    color: var(--greyClorMain2);
    background-color: var(--clorMain1);
    padding: 0.4em 1.4em;
    min-width: 10em;
    font-family: inherit;
    border-radius: 0.3em;
  }
  a {
    color: var(--clorMain1);
  }
  p {
    line-height: 2;
  }
</style>

<style scoped lang="scss">
</style>
