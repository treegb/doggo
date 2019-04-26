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
          <div class="svg">X</div>
          <div class="breedName">{{ aswWrong }}</div>
        </div>
        <div
          v-if="aswCorrect"
          class="answer correct"
        >
          <div class="svg">V</div>
          <div class="breedName">{{ aswCorrect }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scoreGModeGuessTheBreed',
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
          // .Todo: Check the data structure around ???, to see this logic have no bug.
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
<style scoped>
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

            border: 1px solid red;
  }
  .scoreARound .answers .answer {
    border: 1px solid blue;
  }
  .scoreARound .answers .answer > * {
    display: inline-block;
    vertical-align: middle;
  }
          .scoreARound .answer .svg {
            /* .Todo: Replace the class name ".svg", to better name
             * , and make indentation to normal. */
            width: 2em;
            height: 2em;
            border: 1px solid green;
            font-color: green;
          }
          .scoreARound .answer .breedName {
          }
          .scoreARound .answer.correct .svg {
            border: 1px solid green;
            font-color: green;
          }
          .scoreARound .answer.correct .breedName {
            border: 1px solid green;
            font-color: green;
          }
          .scoreARound .answer.wrong .svg {
            border: 1px solid red;
            font-color: red;
          }
          .scoreARound .answer.wrong .breedName {
            border: 1px solid red;
            font-color: red;
          }
</style>
