<template>
  <div class="game">
    <chooseGameMode
      v-if="state === 'chooseGameMode'"
      v-on:chooseGameMode="chooseGameMode"
    />
    <guessTheBreed
      v-else-if="state === 'guessTheBreed'"
      v-bind:gameHistProps="gameHist"
      v-on:ifGameCompleted="ifGameCompleted"
      v-on:gameHistEmitThrow="gameHistEmitCatch"
    />
    <findTheOddOne
      v-else-if="state === 'findTheOddOne'"
      v-bind:gameHistProps="gameHist"
      v-on:startNewGame="startNewGame"
    />
    <gameCompletedScene
      v-else-if="state === 'gameCompletedScene'"
      v-on:checkYourScore="crrNavEmitThrow"
      v-on:startNewGame="startNewGame"
    />
  </div>
</template>

<script>
import chooseGameMode from './chooseGameMode.vue';
import guessTheBreed from './guessTheBreed.vue';
import findTheOddOne from './findTheOddOne.vue';
import gameCompletedScene from './gameCompletedScene.vue';

// .Loading jquery (locally, only works for this component) by following this method:
// https://medium.com/code4mk-org/how-to-use-jquery-inside-vue-add-other-js-library-inside-vue-9eea8fbd0416
// =====================================================================================

import jquery from 'jquery';
let $ = jquery;
// =====================================================================================


export default {
  name: 'game',
  components: {
    chooseGameMode,
    guessTheBreed,
    findTheOddOne,
    gameCompletedScene,
  },
  props: [
    "gameHistProps",
    "crrNav",
  ],
  created () {
    /* .Depends.
     * ==========
     * .this.gameHistProps.
     * ==========
     *
     * .Results.
     * ==========
     * .this.gameHist.
     * ========== */
    this.gameHist = $.extend(true, {}, this.gameHistProps);
    // .Clone.
  },
  data () {
    return {
      state: "chooseGameMode",
      /* .Currently state will be either "chooseGameMode",
       * "guessTheBreed", or "findTheOddOne",
       * might (or might not) have other possiblity in the future. */
      gameHist: null,
    };
  },
  methods: {
    chooseGameMode (gameMode) {
      /* .Executed AFTER chose a game mode.
       *
       * .Depends.
       * ==========
       * .this.resetGameHist().
       * ==========
       *
       * .Results.
       * ==========
       * .this.state.
       * ========== */

      this.resetGameHist(gameMode);
      this.state = gameMode;
    },
    crrNavEmitThrow () {
      /* .When in "game completed scene", user click the button "Check your score". */

      this.$emit("crrNavEmitThrow", "navScore");
    },
    gameHistEmitCatch (gameHist) {
      /* .Catch the emit data { gameHist } from child component { guessTheBreed }.
       * This { gameHist } can't be emit to parent ({ app }) directly, because it
       * don't include { gameTime } property in this component ({ game }), so
       * it need further processing.
       *
       * .Depends.
       * ==========
       * .this.gameHistEmitThrow().
       * ========== */

      this.gameHistEmitThrow(gameHist);
    },
    gameHistEmitThrow (gameHist) {
      /* .About multiple purpose ("reverse tree" data flow): Notice,
       * when this method is invoked without argument,
       * it will actually ONLY causing parent { gameTime } to be updated.
       * But if this method is invoked with argument { gameHist },
       * (this ((currently)) only cause by { guessTheBreed } component updating
       * { gameHist } data),
       * then { gameTime } will be mixed with new { gameHist } (come from children
       * components), then update (emit) to { apps } component together.
       * Also { this.gameTime } OF THIS COMPOENT WILL BE UPDATED TOO.
       *
       * .Depends.
       * ==========
       * .this.gameHist.
       * ========== */

      var gameHistForEmitting;
      var gameTime;
      if (gameHist === null || typeof gameHist === "undefined") {
        // .If this method ({ gameHistEmitThrow() }) is invoked without optinal arguemnt.
        gameHistForEmitting = this.gameHist;
      } else {
        // .If this method ({ gameHistEmitThrow() }) is invoked with optinal arguemnt.
        gameTime = this.gameHist.gameTime;
        /* .We need to extract { gameTime } first, because the real source of
         * { gameTime } only comes from this component ({ game }). */
        this.gameHist = gameHist;
        this.gameHist.gameTime = gameTime;
        gameHistForEmitting = gameHist;
        gameHistForEmitting.gameTime = gameTime;
      }
      this.$emit("gameHistEmitThrow", gameHistForEmitting);
    },
    ifGameCompleted () {
      /* .If any game mode that is completed (but still not ended), then go to
       * "game completed scene".
       * .Also see comment id 190429m164706.
       *
       * .Depends.
       * =========
       * .this.gameHist.gameTime.setIntervalId.
       * =========
       *
       * .Results.
       * ==========
       * .this.state.
       * ========== */

      this.state = "gameCompletedScene";
      clearInterval(this.gameHist.gameTime.setIntervalId);
      /* .Clear previous old setInterval, if I don't do this logic,
       * some data in this callback (actually in 2 different callback (closure) )
       * will be changed twice (in every second)! */
    },
    resetGameHist (gameMode) {
      /* .Reset the { gameHist } (game history).
       * .The { gameMode } argument is only used for setting { this.gameHist.gameMode }
       * , nothing more.
       *
       * .Depends.
       * =========
       * .this.gameHistEmitThrow().
       * .this.updateGameTimeConstantly().
       * =========
       *
       * .Results.
       * ==========
       * .this.gameHist.
       * ========== */

      this.gameHist.cheatCount = 0;
      this.gameHist.gameMode = gameMode;
      this.gameHist.gameTime = {
        startTimeEpochMillisecond: Date.now(),
        gameTimeLapseSecond: 0,
        setIntervalId: null,
      };
      this.gameHist.roundHist = [];
      // .Including history of all rounds ,, questions, chosen answers,
      // correct answer or wrong answer ... .
      this.gameHistEmitThrow ();
      this.updateGameTimeConstantly();
    },
    startNewGame () {
      /* .The state will jump to "chooseGameMode".
       *
       * .Results.
       * ==========
       * .this.state.
       * ========== */

      this.state = "chooseGameMode";
    },
    updateGameTimeConstantly () {
      /* .Update game time constantly (for every second).
       * .Also see comment id 190429m164706.
       *
       * .Depends.
       * =========
       * .this.gameHistEmitThrow();
       * =========
       *
       * .Results.
       * ==========
       * .this.gameHist.gameTime.gameTimeLapseSecond.
       * .this.gameHist.gameTime.setIntervalId.
       * ========== */

      const setIntervalId = setInterval(function () {
        const timeStart = this.gameHist.gameTime.startTimeEpochMillisecond;
        var timeCrr;
        var timeDeltaSec;
        timeCrr = Date.now();
        timeDeltaSec = parseInt((timeCrr - timeStart) / 1000, 10);
        this.gameHist.gameTime.gameTimeLapseSecond = timeDeltaSec;
        //console.log(timeDeltaSec);
        this.gameHistEmitThrow();
      }.bind(this),1000);
      /* .Notice I use { setIntervalId } to record unique ID of every
       * setInterval "thread" when every of them are set.
       * .I also use { .bind(this) } to specify { this } keyword inside this closure. */
      this.gameHist.gameTime.setIntervalId = setIntervalId;
      this.gameHistEmitThrow();
    }
  },
  computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
>>> main {
  /* .Here I use  { deep selector }. See:
   * https://github.com/vuejs/vuejs.org/issues/1150 . */
  margin: 0 0.5em;
  padding: 0;
}
</style>
