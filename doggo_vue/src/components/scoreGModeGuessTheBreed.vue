<template>
  <div class="scoreGModeGuessTheBreed">
    <h2>Round {{ idx + 1 }}</h2>
    <div class="scoreARound">
      <img
        class="breedImage"
        v-bind:src="roundHist.question.imgSrc"
        alt=""
      >
      <div class="answers">
        <div
          v-if="aswWrong"
          class="answer wrong"
        >
          <svgSymbolCross />
          <div class="breedName"><i class="livelyFont">{{ aswWrong }}</i></div>
        </div>
        <div
          v-if="aswCorrect"
          class="answer correct"
        >
          <svgSymbolTick />
          <div class="breedName"><i class="livelyFont">{{ aswCorrect }}</i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgSymbolTick from "./svgSymbolTick.vue";
import svgSymbolCross from "./svgSymbolCross.vue";
export default {
  name: 'scoreGModeGuessTheBreed',
  components: {
    svgSymbolTick,
    svgSymbolCross,
  },
  props: [
    "roundHist",
    "idx"
  ],
  data () {
    return {
    };
  },
  methods: {
  },
  computed: {
    aswCorrect () {
      /* .Depends.
       * =========
       * .this.roundHist;
       * ========= */

      for (let crrAnswer of this.roundHist.answer.breeds) {
        if (
          this.roundHist.answer.ifChosenAnswerCorrect === true &&
          crrAnswer.ifUserChooseThisAsw  === true
        ) {
          return crrAnswer.fullBreedName;
        } else if (this.roundHist.answer.ifChosenAnswerCorrect === false) {
          return this.roundHist.question.fullBreedName;
        }
      }
      return  null;
    },
    aswWrong () {
      /* .Depends.
       * =========
       * .this.roundHist;
       * ========= */

      for (let crrAnswer of this.roundHist.answer.breeds) {
        if (
          this.roundHist.answer.ifChosenAnswerCorrect === false &&
          crrAnswer.ifUserChooseThisAsw  === true
        ) {
          return crrAnswer.fullBreedName;
        }
      }
      return  null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  h2 {
    margin-top: 10em;
    margin-bottom: 4em;
  }
  .scoreARound {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .scoreARound .breedImage {
    min-width: calc(0.0625em * 140);
    width: 100%;
    max-width: calc(0.0625em * 540);
  }
  .scoreARound .answers {
    max-width: 100%;
    /* .This line is actually "not useful", because
     * itIsVeryRareABreedNameWillBeSuperLongLikeThis, this not going to happens.
     * So in fact, this line can be removed safely. But I think I will keep it here. */
    margin: 0;
    padding: 1em 4em;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .scoreARound .answers .answer {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
  }
  .scoreARound .answers .answer > * {
    display: inline-block;
    vertical-align: middle;
  }
  .scoreARound .answer .svgSymbolTick,
  .scoreARound .answer .svgSymbolCross {
    width: 2em;
  }
  .scoreARound .answer .breedName {
    margin-left: 1em;
  }
  .scoreARound .answer.correct .svgSymbolTick {
  }
  .scoreARound .answer.correct .breedName {
  }
  .scoreARound .answer.wrong .svgSymbolCross {
  }
  .scoreARound .answer.wrong .breedName {
  }
</style>
