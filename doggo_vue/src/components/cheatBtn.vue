<template>
  <button
    class="cheatBtn"
    v-bind:style="{'background-color': btnBackgroundColor}"
    v-on:click="cheatBtnOnClick"
  ><i>Cheat <span class="italic">!</span></i></button>
</template>

<script>
export default {
  name: 'cheatBtn',
  components: {
  },
  created () {
  },
  data () {
    return {
    };
  },
  props: [
    "cheatBtnState"
    /* .cheatBtnState.btnVisualState could be any of: "neutral", "disable".
    /* .cheatBtnState.btnClickableState could be any of: true, false. */
  ],
  computed: {
    btnBackgroundColor () {
    /* .Depends.
     * ==========
     * .this.cheatBtnState.btnVisualState.
     * ========== */

      switch (this.cheatBtnState.btnVisualState) {
        case "neutral":
          return "var(--clorMain1)";
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
    cheatBtnOnClick () {
      /* .Depends.
       * =========
       * .this.cheatBtnState.
       * ========= */

      this.$emit("cheatBtnOnClick", "");
      // .Don't need to put any data into second argument.
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: calc(0.0625em * 1) solid var(--greyClorMain2);
  /*background-color: var(--clorMain1);*/
  color: var(--greyClorMain2);
  padding: 0.4em 1.5em;
  font-family: inherit;
  border-radius: 0.3em;
}
button i {
  font-size: 1.2em;
  letter-spacing: 0.5em;
}
button .italic {
  font-style: italic;
  font-weight: 900;
}
</style>
