<template>
  <div class="game">
    <chooseGameMode
      v-if="state === 'chooseGameMode'"
      v-on:chooseGameMode="chooseGameMode"
    />
    <guessTheBreed
      v-else-if="state === 'guessTheBreed'"
      v-bind:state="state"
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
  //props: {
  //  msg: String
  //}
  components: {
    chooseGameMode,
    guessTheBreed,
    findTheOddOne
  },
  data () {
    return {
      state: "chooseGameMode",
      /* .Currently state will be either "chooseGameMode",
       * "guessTheBreed", or "findTheOddOne",
       * might (or might not) have other possiblity in the future. */
       round: 1,
    };
  },
  methods: {
    chooseGameMode (gameMode) {
      //console.log(gameMode);
      this.state = gameMode;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
