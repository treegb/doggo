<template>
  <div class="score">
    <h2>Your score</h2>
    <div class="scorOverview">
      <p>Game mode: {{ gameModeHumanReadable }}</p>
      <p>Cheat used: {{ gameHist.cheatCount }}</p>
    </div>
    <scoreGModeGuessTheBreed
      v-for="(roundHist, idx) in gameHist.roundHist"
      v-bind:roundHist="roundHist"
      v-bind:idx="idx"
    />
  </div>
</template>

<script>
import scoreGModeGuessTheBreed from "./scoreGModeGuessTheBreed.vue";
export default {
  name: 'game',
  components: {
    scoreGModeGuessTheBreed,
  },
  props: [
    "gameHist"
  ],
  data () {
    return {

    };
  },
  methods: {
  },
  computed: {
    gameModeHumanReadable () {
      /* .Print game mode with human readable.
       *
       * .Depends.
       * =========
       * .this.gameHist.
       * ========= */

      switch (this.gameHist.gameMode) {
        case "guessTheBreed":
          return "Guess The Breed";
          break;
        case "matchTheSameBreed":
          return "Match The Same Breed";
          break;
        default:
          return "Unknown";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
