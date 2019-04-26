<template>
  <!-- <button class="answerBtn88breed">xxx</button> -->
  <button
    class="answerBtn88breed"
    v-bind:data-id="aBreedMix.fullBreed"
    v-bind:style="{'background-color': btnBackgroundColor}"
    v-on:click="aswBtnOnClick"
  >
    <span class="innerCtnr">{{ aBreedMix.fullBreedName }}</span>
  </button>
</template>

<script>
export default {
  name: 'answerBtn88breed',
  components: {
  },
  created () {
  },
  data () {
    return {
    };
  },
  props: [
    "aBreedMix"
    /* .aBreedMix.btnVisualState could be any of: "neutral", "ok", "error", "disable".
    /* .aBreedMix.btnClickableState could be any of: true, false. */
  ],
  computed: {
    btnBackgroundColor () {
    /* .Depends.
     * ==========
     * .this.aBreedMix.btnVisualState.
     * ========== */

      switch (this.aBreedMix.btnVisualState) {
        case "neutral":
          return "var(--clorMain1)";
          break;
        case "ok":
          return "var(--clorOk)";
          break;
        case "error":
          return "var(--clorError)";
          break;
        case "disable":
          return "var(--greyClorMain1)";
          break;
        default:
          return "var(--clorMain1)";
      }
    }
  },
  methods: {
    aswBtnOnClick () {
      /* .Depends.
       * =========
       * .this.aBreedMix.
       * ========= */

      this.$emit("aswBtnOnClick", this.aBreedMix);
      //if (this.aBreedMix.btnVisualState !== "disable") {
      //  this.$emit("aswBtnOnClick", this.aBreedMix);
      //}
      /* .Disabled, because logic shouldn't rely on here, should rely on
       * { controller } or { model } instead. */
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  display: block;
  min-width: 10em;
  height: 2.6em;
  margin: 0.5em 0;
  padding: 0 1.3em;
  box-sizing: border-box;
  border-radius: 0.3em;
  border: calc(0.0625em * 1) solid var(--greyClorMain2);
  /*background-color: var(--clorMain1);*/
  color: var(--greyClorMain2);
  font-family: "aclonica", "helvetica", sans-serif;
  letter-spacing: calc(0.0625em * 2);
}
button .innerCtnr {
  font-size: 1.0em;
}
</style>
