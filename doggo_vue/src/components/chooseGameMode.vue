<template>
  <div class="chooseGameMode">
    <h2>Start a new game</h2>
    <div class="allGameModes">
      <div class="gameModeCntn guessTheBreed">
        <!--
          .This container is added only to create aspect ratio effect.
          See CSS to see how it works.
        -->
        <div
          v-bind:class="classs.guessTheBreed"
          v-bind:style="{'transition': style.allGameModes.clickAnimationTimeCSS}"
          v-on:click="chooseGameMode('guessTheBreed')"
        >
          <!--
            .Control CSS style using javascript, instead of pure CSS stylesheet,
            since the animation timing should sync with javascript { setTimeout() }.
            .See id "190413m233023".
          -->
          <div><div class="innerWrapper">Guess The Breed</div></div>
          <!--
            .The { innerWrapper } container is added only to fix the position problem
            after I create aspect ratio effect.
            See CSS to see how it works.
          -->
        </div>
      </div>
      <div class="gameModeCntn findTheOddOne">
        <div
          v-bind:class="classs.findTheOddOne"
          v-bind:style="{'transition': style.allGameModes.clickAnimationTimeCSS}"
          v-on:click="chooseGameMode('findTheOddOne')"
        >
          <div><div class="innerWrapper">Find The Odd One</div></div>
        </div>
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
  .allGameModes .gameModeCntn {
    margin: 0 0.1em;
    padding: 0;
    width: 20em;
    /*height: 20em;*/
    /* .height will fit to child. */
    max-width: calc(50% - 2em);
  }
  .allGameModes .gameMode {
    margin: 0;
    padding: 100% 0 0;
    /* .This is they key of keeping { .gameModeCntn } and { ..gameMode }
     * keeping aspect ratio, because { padding-top: 100% } actually means padding
     * is 100% of parent width. By using this trick, we can create aspect ratio result. */
    width: 100%;
    border-radius: 50%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: var(--clorMain1);
    box-shadow: 0 0 2em var(--clorMain1Shade2);
    /*transition: all 0.9s;*/
    /* .Transition timming is now controled by javascript, see id "190413m233023". */
    position: relative;
    /* .This is added because of child ,, { position: absolute }. */
  }
  .allGameModes .gameMode > * {
    position: absolute;
    top: 50%;
    left: 50%;
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
  .allGameModes .gameMode .innerWrapper {
    transform: translate(-50%, -50%);
    user-select: none;
    /* .Don't know why click on this element, the text will be selected,
     * so I have to add this extra property to suppress it. */
  }
</style>
