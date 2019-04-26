<template>
  <div class="score">
    <h2>Your score</h2>
    <div class="scoreBrief">
      <div class="scoreBriefItm gameMode title">Game mode</div>
      <svgGameMode />
      <div class="scoreBriefItm gameMode data">{{ gameModeHumanReadable }}</div>

      <div class="scoreBriefItm scoreBoard title">Your score</div>
      <svgScoreBoard />
      <div class="scoreBriefItm scoreBoard data">78%</div>

      <div class="scoreBriefItm clock title">Time used</div>
      <svgClock />
      <div class="scoreBriefItm clock data">12:34</div>

      <div class="scoreBriefItm cheat title">Cheat used</div>
      <svgCheat />
      <div class="scoreBriefItm cheat data">{{ gameHist.cheatCount }}</div>
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
import svgScoreBoard from './svgScoreBoard.vue';
import svgClock from './svgClock.vue';
import svgCheat from './svgCheat.vue';
import svgGameMode from './svgGameMode.vue';
export default {
  name: 'score',
  components: {
    scoreGModeGuessTheBreed,
    svgScoreBoard,
    svgClock,
    svgCheat,
    svgGameMode,
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
.scoreBrief {
  display: grid;
  grid-template-columns: max-content 7em min-content;
  grid-template-rows: repeat(4, 7em);
  /* .repeat times need to sync with "how many elements" inside this grid */
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.scoreBrief .scoreBriefItm {
}
.scoreBriefItm.title {
  font-size: 0.9em;
  color: var(--greyClorMain2);
}
.scoreBriefItm.thisSvgComponentElm.layer1Cntn {
  width: 3.4em;
  /* .I know I should set fixed height, instead of width, but due to the
   * [ limitation ]-[ functionality ] of svg component, if I want to have
   * a proportional svg image, I have to feed it a width, not height.
   * .I might fix this in the future, if so, I need to rewrite the css of those
    * svg components. */
}
.scoreBriefItm.data {
  font-size: 2.4em;
  color: var(--greyClorMain2);
  justify-self: start;
}
.scoreBriefItm.data.gameMode {
  font-size: 1.1em;
  /* .Reduce the font size of { .data.gameMode }, because it is longer than other else. */
}
.scoreBrief .scoreBriefItm .thisSvgComponentElm.layer1Cntn {
}
</style>
