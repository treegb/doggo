<template>
  <div class="chooseGameMode">
    <h2>Start a new game</h2>
    <div class="allGameModes">
      <div
        v-bind:class="classs.guessTheBreed"
        v-on:click="chooseGameMode('guessTheBreed')"
        v-bind:style="{'transition': style.allGameModes.clickAnimationTimeCSS }"
      >
      <!--
        .Control CSS style using javascript, instead of pure CSS stylesheet,
        since the animation timing should sync with javascript { setTimeout() }.
        .See id "190413m233023".
      -->
        <p>Guess The Breed</p>
      </div>
      <div
        v-bind:class="classs.findTheOddOne"
        v-on:click="chooseGameMode('findTheOddOne')"
        v-bind:style="{'transition': style.allGameModes.clickAnimationTimeCSS}"
      >
        <p>Find The Odd One</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseGameMode',
  data () {
    var dataa = {
      classs: {
        /* .The reason to set CSS classes of { guessTheBreed } and { findTheOddOne }
         * components, outside the html markdown is because,
         * we need to dynamically add the CSS class { selected } later. */
        guessTheBreed: ["gameMode", "guessTheBreed"],
        findTheOddOne: ["gameMode", "findTheOddOne"],
      },
      style: {
        allGameModes: {
          clickAnimationTime: 900,
          // .See id "190413m233023".
          clickAnimationTimeCSS: ""
        }
      },
      state: {
        ifAllowChooseGameMode: true
      }
    };
    dataa.style.allGameModes.clickAnimationTimeCSS = "all " + ( dataa.style.allGameModes.clickAnimationTime / 1000) + "s";
    // .So the final string will be something like "transition: all 0.9s".
    return dataa;
  },
  methods: {
    chooseGameMode (gameMode) {
      if (this.state.ifAllowChooseGameMode === true) {
        /* .To prevent user choose second time with mouse click, when
         * during the animation time (when aniamtion is not finished). */
        this.state.ifAllowChooseGameMode = false;
        for (let elm in this.classs) {
          if (elm === gameMode) {
            this.classs[elm].push("selected");
          } else {
            this.classs[elm].push("nonSelected");
          }
        }
        setTimeout( () => {
            this.$emit("chooseGameMode", gameMode);
          }, this.style.allGameModes.clickAnimationTime);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chooseGameMode {
  }
  .allGameModes {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .allGameModes .gameMode {
    /*border: 1px solid red;*/
    margin: 0 0.1em;
    padding: 0;
    width: 20em;
    height: 20em;
    border-radius: 50%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: var(--clorMain1);
    box-shadow: 0 0 2em var(--clorMain1Shade2);
    /*transition: all 0.9s;*/
    /* .Transition timming is now controled by javascript, see id "190413m233023". */
  }
  .allGameModes .gameMode > * {
    color: white;
  }
  .allGameModes .gameMode.guessTheBreed {
  }
  .allGameModes .gameMode.findTheOddOne {
  }
  .allGameModes .gameMode.selected {
    box-shadow: 0 0 3em var(--clorMain1Shade1);
  }
  .allGameModes .gameMode.selected > * {
    font-weight: 900;
  }
  .allGameModes .gameMode.nonSelected {
    background-color: var(--greyClorMain2);
    box-shadow: unset;
  }
  .allGameModes .gameMode.nonSelected > * {
    color: var(--greyClorMain3);
  }
</style>
