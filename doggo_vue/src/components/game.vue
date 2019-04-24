<template>
  <div class="game">
    <chooseGameMode
      v-if="state === 'chooseGameMode'"
      v-on:chooseGameMode="chooseGameMode"
    />
    <guessTheBreed
      v-else-if="state === 'guessTheBreed'"
      v-bind:gameHist="gameHist"
    />
    <findTheOddOne
      v-else-if="state === 'findTheOddOne'"
    />
  </div>
</template>

<script>
import chooseGameMode from './chooseGameMode.vue';
import guessTheBreed from './guessTheBreed.vue';
import findTheOddOne from './findTheOddOne.vue';
export default {
  name: 'game',
  components: {
    chooseGameMode,
    guessTheBreed,
    findTheOddOne
  },
  props: [
    "gameHist",
  ],
  data () {
    return {
      state: "chooseGameMode",
      /* .Currently state will be either "chooseGameMode",
       * "guessTheBreed", or "findTheOddOne",
       * might (or might not) have other possiblity in the future. */
    };
  },
  methods: {
    chooseGameMode (gameMode) {
      /* .Executed AFTER chose a game mode.
       *
       * .Depends.
       * ==========
       * .this.state.
       * .this.resetGameHist().
       * ========== */

      this.resetGameHist(gameMode);
      this.state = gameMode;
    },
    resetGameHist (gameMode) {
      /* .Reset the { gameHist } (game history).
       *
       * .Depends.
       * ==========
       * .this.gameHist.
       * ========== */

      this.gameHist.cheatCount = 0;
      this.gameHist.gameMode = gameMode;
      this.gameHist.timeUsed = null;
      // I'v not yet thinking about the time counter logic.
      this.gameHist.roundHist = [];
      // .Including history of all rounds ,, questions, chosen answers,
      // correct answer or wrong answer ... .
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
