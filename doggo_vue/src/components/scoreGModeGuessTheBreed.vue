<template>
  <div class="scoreGModeGuessTheBreed">
    <h2>Round {{ idx + 1 }}</h2>
    <div class="scorARound">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
