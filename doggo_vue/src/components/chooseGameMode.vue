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
          v-bind:style="{'transition': style.allGameModes.cssTransitionBtn}"
          v-on:click="chooseGameMode('guessTheBreed')"
        >
          <!--
            .Control CSS style using javascript, instead of pure CSS stylesheet,
            since the animation timing should sync with javascript { setTimeout() }.
            .See id "190413m233023".
          -->
          <div class="textCtnr"
            ><div class="innerWrapper"
              ><span class="firstLetter">G</span>uess<br
              ><span class="firstLetter">T</span>he<br
              ><span class="firstLetter">B</span>reed</div
            ></div
          >
          <!--
            .The { innerWrapper } container is added only to fix the position problem
            after I create aspect ratio effect.
            See CSS to see how it works.
            .Above html code is actually be treated "a single line", not multiple lines,
            you see I wrap many ending tag (i.e. ">") to next line,
            this will assure 2 things:
            1. The html is still treated as one line by parser of browser.
            2. There is no any unexpected gaps (space character) as
            [ by-product ]-[ side effect ] of using new line ("\n", or enter key)
            in html structure. If you don't break ending tag (i.e. ">") like this,
            you sometimes see this [ "bug" ]-[ by-product ]-[ side effect ].
          -->
        </div>
      </div>
      <div class="gameModeCntn findTheOddOne">
        <div
          v-bind:class="classs.findTheOddOne"
          v-bind:style="{'transition': style.allGameModes.cssTransitionBtn}"
          v-on:click="chooseGameMode('findTheOddOne')"
        >
          <div class="textCtnr"
            ><div class="innerWrapper"
              ><span class="firstLetter">F</span>ind<br
              ><span class="firstLetter">T</span>he<br
              ><span class="firstLetter">O</span>dd<br
              ><span class="firstLetter">O</span>ne</div
            ></div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseGameMode',
  created () {
    /* .Depends.
     * ==========
     * .this.style.allGameModes.animTimebtn.
     * ==========
     *
     * .Results.
     * ==========
     * .this.style.allGameModes.cssTransitionBtn.
     * ========== */

    this.style.allGameModes.cssTransitionBtn = "all " + (
      this.style.allGameModes.animTimebtn / 1000) + "s";
    // .So the final string will be something like "transition: all 0.9s".
  },
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
          animTimebtn: 900,
          /* .Decide the transition duration of game mode selection button will takes,
           * after user choose a game mode.
           * .See id "190413m233023". */
          animTimeNewScene: 1600,
          /* .Decide the transition duration from "game mode selection scene,
           * to game scene (first round).
           * . Notice, this property should be equal or greater than { animTimebtn }.*/
          cssTransitionBtn: "",
          // .Will be calculated later.
        }
      },
      state: {
        ifAllowChooseGameMode: true
      }
    };
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
          }, this.style.allGameModes.animTimeNewScene);
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
  .allGameModes .gameMode .textCtnr {
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
  .allGameModes .gameMode.selected .textCtnr {
    font-weight: 900;
  }
  .allGameModes .gameMode.nonSelected {
    background-color: var(--greyClorMain2);
    box-shadow: unset;
  }
  .allGameModes .gameMode.nonSelected .textCtnr {
    color: var(--greyClorMain3);
  }
  .allGameModes .gameMode .innerWrapper {
    transform: translate(-50%, -50%);
    user-select: none;
    /* .Don't know why click on this element, the text will be selected,
     * so I have to add this extra property to suppress it. */

    /* .About: Here I try to make graphic effect on front.
     * .Graphic effect: The letters is spreded like "matrix", only to make it
     * feeling "cool".
     * .Should sync with comment id 190425m160720.
     * ============================================================================= */
    letter-spacing: 1.0rem;
    line-height: 1.7rem;
    font-size: 0.8em;
    /* ============================================================================= */

    transition: line-height 0.3s;
  }
  .allGameModes .gameMode.selected .innerWrapper {
    /* .Should sync with comment id 190425m160720. */
    line-height: 1.1rem;
    font-size: 0.8em;
  }
  .allGameModes .gameMode .firstLetter {
    font-weight: 900;
  }
</style>
