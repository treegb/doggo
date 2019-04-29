<template>
  <main
    v-bind:class="domClass.gameCompletedScene"
    v-bind:style="gameCompletedSceneTransition"
  >
    <h2>Game finished!</h2>
    <div class="options">
      <button v-on:click="checkYourScore">Check your score!</button>
      <button v-on:click="startNewGame">Start a new game</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'gameCompletedScene',
  components: {
  },
  props: [
  ],
  created () {
    /* .Results.
     * ==========
     * .this.domClass.gameCompletedScene.
     * ========== */

    setTimeout(function () {
      this.domClass.gameCompletedScene.push(
        "gameCompletedTransitionStateStateTransition");
    }.bind(this), 100);
    /* .This {setTimeout()} is to prevent "concurrency". I make a
     * little delay here (100ms) is to prevent concurrency
     * of DOM ,, [ Game Completed Scene ]-[ <main> ] DOM, adding ,,
     * timming point, and
     * DOM class { gameCompletedTransitionStateStateTransition },
     * adding ,, timming point, happening together.
     * .This concurrency will causing css animation failed to work. */
  },
  data () {
    return {
      animationTime: {
        gameCompletedSceneTransition: 1100,
      },
      domClass: {
        gameCompletedScene: [
          "gameCompletedScene",
          "gameCompletedSceneTransitionStateStateNormal",
          //"gameCompletedTransitionStateStateTransition",
          // .This class will be added later (and the animation will starts).
        ],
      }
    };
  },
  methods: {
    checkYourScore () {
      this.$emit("checkYourScore");
    },
    startNewGame () {
      this.$emit("startNewGame");
    }
  },
  computed: {
    gameCompletedSceneTransition() {
      return {
        transition: `opacity ${(this.animationTime.gameCompletedSceneTransition - 100) / 1000}s`
      };
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main.gameCompletedScene {
}
.gameCompletedSceneTransitionStateStateNormal {
  /* .Related to element { .gameCompletedScene }. */
  opacity: 0;
}
.gameCompletedSceneTransitionStateStateNormal.gameCompletedTransitionStateStateTransition {
  /* .Related to element { .gameCompletedScene }. */
  opacity: 1;
}
.gameCompletedScene .options {
  display: flex;
  justify-content: space-around;
}
.gameCompletedScene .options button {
}
</style>
