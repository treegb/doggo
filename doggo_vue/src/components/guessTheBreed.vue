<template>
  <div id="guessTheBreed">
    <main
      v-bind:class="cssClass.cssClassTransitionSpecific"
      v-bind:style="cssClassRoundTransitionStateStateTransition"
    >
      <breedImage v-bind:imgSrc="crrRound.question.imgSrc" />
      <div class="answerBtnCtn">
        <answerBtn88breed
          v-for="aBreedMix in crrRound.answer.breeds"
          v-bind:id="aBreedMix.fullBreed"
          v-bind:key="aBreedMix.fullBreed"
          v-bind:aBreedMix="aBreedMix"
          v-on:aswBtnOnClick="aswBtn88controller"
        />
      </div>
      <cheatBtn
        v-bind:cheatBtnState="cheatBtnState"
        v-on:cheatBtnOnClick="cheatBtn88controller"
      />
    </main>
  </div>
</template>

<script>
import answerBtn88breed from "./answerBtn88breed.vue";
import cheatBtn from "./cheatBtn.vue";
import breedImage from "./breedImage.vue";
import * as breCmm from "../js/breedCommon.js";

// .Loading jquery (locally, only works for this component) by following this method:
// https://medium.com/code4mk-org/how-to-use-jquery-inside-vue-add-other-js-library-inside-vue-9eea8fbd0416
// =====================================================================================
import jquery from 'jquery';
let $ = jquery;
// =====================================================================================

export default {
  name: 'guessTheBreed',
  components: {
    answerBtn88breed,
    cheatBtn,
    breedImage
  },
  created () {
    /* .Depends.
     * ==========
     * .this.resetCrrRound().
     * .this.setBreedList().
     * .this.setANewRound().
     * ========== */

    this.resetCrrRound();
    /* .See comment id 190421m190940, to see why I don't just use { setANewRound() }
     * to invoke this method. */
    this.setBreedList()
    .then((resolve) => {
      this.setANewRound("isFirstRound");
      /* .Notice, in the first round (and only in the first round), you must
       * pass argument "isFirstRound" to { setANewRound() }, in other rounds you
       * can just ignore this argument with no problem.
       * .See comment id 190421m190940. */
    })
    .catch((reject) => {
      console.debug(reject);
    });

    // .Testing { jquery } loaded (locally) correctly on this component.
    // ==================================================================
    //$(document).ready(() => {
    //  $("body").css("background-color", "teal");
    //});
    // ==================================================================
  },
  props: [
    "gameHist",
  ],
  data () {
    return {
      answerOptionsAmount: 4,
      // .The more the player use { cheat }, the more answer options increase.
      answerOptionsAmountDefault: 4,
      /* .Answer buttons amount in every new round will always start with this
       * minimum number. But if if you use { cheat } before, { answerOptionsAmount }
       * will increase for that new round for sure. */
      answerOptionsAvailableAmountMin: 2,
      /* .When using { cheat }, some random answer buttons start to be unclickable
       * (not available) though they are still displayed, but this will not going forever.
       * So this parameter basically stops more { cheat } to be used, when there is only
       * { answerOptionsAvailableAmountMin } amount of clickable (available)
       * answer button left. */
      crrRound: null,
      /* .The lifetime of { crrRound } only spans within exactly a round.
       * Any elements inside this [ property ]-[ object ] will not stay longer than
       * the current round it belongs, to prevent any possiblity of bugs happen.
       * .See comment id 190421m190940. */
      crrRoundTemplate: {
      /* .A template for { crrRound }, and clone to { crrRound },
       * when everytime a new round started.
       * .See comment id 190421m190940. */
        question: {
          mainBreed: null,
          subBreed: null,
          fullBreed: null,
          // .Is a id.
          fullBreedName: null,
          // .Is a human readable name.
          imgSrc: null,
        },
        answer: {
          breeds: [],
          /* .Data structure:
           * [
           *   {
           *     mainBreed: ...,
           *     subBreed: ...,
           *     fullBreed: ...,
           *     fullBreedName: ...,
           *   }
           * ].
           * .To see the full "data structure", see comment id  190425m231737. */
          ifChosenAnswerCorrect: null
          /* .Though we can get the clue (if current round user chose the right answer
           * or not) from looping through all { crrRound ,, answer ,, breeds } elements,
           * this need to do recalculate every time we switch to { score } tab.
           * The faster way is like this,
           * this variable { ifChosenAnswerCorrect }, store it as extra
           * (but duplicate) data. So the calculation (statistic) wll be faster. */
        },
      },
      breedList: {},
      // .A complete breed list.
      cheatBtnState: {
        btnVisualState: "neutral",
        btnClickableState: true,
      },
      cheatStock: 0,
      /* .The punishment accumulation, start from 0 and it means no punishment
       * for next round), 1 means add one more answer option for next round ... . */
      cssClass: {
        cssClassTransitionSpecific: [
          "roundTransitionStateStateNormal",
          "roundTransitionStateStateTransition"
        ]
        /* .So the { cssClassTransitionSpecific }
         * can hold several css class name, but it will only contain
         * { .roundTransitionStateStateNormal } and { .roundTransitionStateStateTransition }
         * most of the time.
         * .When we try to remove or add the css class { .roundTransitionStateStateTransition }
         * inside { cssClassTransitionSpecific },
         * the transition start to works, otherwise, nothing will happens.
         * .Notice, not all css style logic can be apply by applying this class on
         * those elements which need transition animation, because some css style
         * need javascript data (variable time), so it can only be done by
         * { computed style } at this moment. */
      },
      animationTime: {
        roundTransition: 1100,
        timeDelayAfterAnwerChosen: 1700
      }
    };
  },
  computed: {
    cssClassRoundTransitionStateStateTransition() {
      return {
        transition: `opacity ${(this.animationTime.roundTransition - 100) / 1000}s`
      };
    },
  },
  methods: {
    answerHandler88model (argg) {
      /* .{ Model } function to handle answer buttons and cheat button
       * when they are clicked.
       * .Argument ,, argg ,, stands for: "Mixed OPTionS".
       * .Argument ,, argg ,, data structure (example):
       * {
       *   controller: "aswBtnClick",
       *   answerBreeds: this.crrRound.answer.breeds,
       *   answerBreed: this.crrRound.answer.breeds[2],
       * }.
       *
       * .Depends.
       * ==========
       * .this.answerOptionsAmount.
       * .this.answerOptionsAvailableAmountMin.
       * .this.crrRound.question.fullBreed.
       * .this.answerOptionsAvailableAmount().
       * .this.aswBtn88view().
       * .this.cheatBtn88view().
       * .this.checkAswBtnClickableState().
       * .this.createAnEmptySubObjForThisObjWithPptNameIfNotExists().
       * .this.finishCrrRound().
       * .this.randomIntegerFromRange().
       * ==========
       *
       * .Results.
       * ==========
       * .this.cheatStock.
       * .this.crrRound.answer.breeds.ifUserChooseThisAsw.
       * .this.gameHist.cheatCount.
       * .this.ifChosenAnswerCorrect.
       * ========== */

      // .For answer buttons.
      if (argg.controller === "aswBtnClick") {
        let argForAswBtn88view = {};
        let getThatAswRealObjectWhichTheControllerIsDealingTo = null;
        /* .We have 2 piece of data, one is { argg } sent by { controller },
         * another is { this.crrRound } which { answerHandler88model } could
         * access itself. So what this temporary variable will holding
         * the { this.crrRound.answer.breeds.thatAswTheControllerIsDealingTo },
         * for other process to do further things. */
        if (!this.checkAswBtnClickableState(argg.answerBreed)) {
          return;
          // .Abort and do nothing.
        }
        // .Check if this answer button is clickable.
        getThatAswRealObjectWhichTheControllerIsDealingTo = this.crrRound.answer.breeds
          .find((itm) => {
            if (itm.fullBreed === argg.answerBreed.fullBreed) {
              return true;
            }
          });
        getThatAswRealObjectWhichTheControllerIsDealingTo.ifUserChooseThisAsw = true;
        /* .Whatever answer option (button) user choose, this answer option
         * will have corresponding property { ifUserChooseThisAsw } change to "true". */
        if (argg.answerBreed.fullBreed === this.crrRound.question.fullBreed) {
          this.createAnEmptySubObjForThisObjWithPptNameIfNotExists(
            argForAswBtn88view,
            argg.answerBreed.fullBreed
          );
          argForAswBtn88view[argg.answerBreed.fullBreed].btnVisualState = "ok";
          this.ifChosenAnswerCorrect = true;
        } else {
          this.createAnEmptySubObjForThisObjWithPptNameIfNotExists(
            argForAswBtn88view,
            argg.answerBreed.fullBreed
          );
          this.createAnEmptySubObjForThisObjWithPptNameIfNotExists(
            argForAswBtn88view,
            this.crrRound.question.fullBreed
          );
          /* .User will get hint about both right answer (not he chose),
           * and wrong answer (he chose), if he chose a wrong answer.
           * =========================================================== */
          argForAswBtn88view[argg.answerBreed.fullBreed].btnVisualState = "error";
          argForAswBtn88view[this.crrRound.question.fullBreed].btnVisualState = "ok";
          this.ifChosenAnswerCorrect = false;
          /* =========================================================== */
        }
        for (let breed of argg.answerBreeds) {
          this.createAnEmptySubObjForThisObjWithPptNameIfNotExists(
            argForAswBtn88view,
            breed.fullBreed
          );
          argForAswBtn88view[breed.fullBreed].btnClickableState = false;
          // .Tell { view } to turn all 4 answer button to unclickable.
        }
        this.aswBtn88view(argForAswBtn88view);
        // .Invoke { view } to update the view.
        this.cheatBtn88view({btnClickableState: false});
        // .Invoke { view } to update the view.
        this.finishCrrRound();
      }
      // .For answer buttons.

      // .For cheat button.
      if (argg.controller === "cheatBtnClick") {
        let answerOptionsAvailableAmountt;
        let cheatCrossOutAswOptIdx = null;
        let argForAswBtn88view = {};
        let argForCheatBtn88view = {};
        // .Acronym: "cheat cross out answer index".
        if (!this.checkAswBtnClickableState(argg.cheatBtnState)) {
          return;
          // .Abort and do nothing.
        }
        // .Check if this cheat button is clickable.
        answerOptionsAvailableAmountt = this.answerOptionsAvailableAmount();
        if ( answerOptionsAvailableAmountt > this.answerOptionsAvailableAmountMin) {
          do {
            cheatCrossOutAswOptIdx = this.randomIntegerFromRange(0, this.answerOptionsAmount - 1);
            // .Try to get a random index, from range 0 to { answerOptionsAmount - 1 }.
          } while (
            (argg.answerBreeds[cheatCrossOutAswOptIdx].btnClickableState === false) ||
            (
              argg.answerBreeds[cheatCrossOutAswOptIdx].fullBreed ===
                this.crrRound.question.fullBreed
            )
          );
          /* .Test this { cheatCrossOutAswOptIdx }, to see 2 things, if any following
           * case is true, then re-generate { cheatCrossOutAswOptIdx } again
           * (pick another new index) (it has little change to "collide" again,
           * but this doesn't matter, because we brute forced this process
           * again and again until we found no collision):
           * ..If this chosen (crossed) out answer option (button) is already "crossed out".
           * ..If this chosen (crossed) out answer option (button) is "correct answer"
           * (identical to question breed). */
          this.createAnEmptySubObjForThisObjWithPptNameIfNotExists(
            argForAswBtn88view,
            argg.answerBreeds[cheatCrossOutAswOptIdx].fullBreed
          );

          // .Not only it is visually "disabled", but also functionally unclickable.
          // ==================================================================
          argForAswBtn88view[argg.answerBreeds[cheatCrossOutAswOptIdx].fullBreed]
            .btnVisualState = "disable";
          argForAswBtn88view[argg.answerBreeds[cheatCrossOutAswOptIdx].fullBreed]
            .btnClickableState = false;
          // ==================================================================

          this.aswBtn88view(argForAswBtn88view);
          if (
            (answerOptionsAvailableAmountt - 1) ===
              this.answerOptionsAvailableAmountMin
          ) {
            // .Notice it is { - 1 }, not { - 0 } here.
            argForCheatBtn88view.btnVisualState = "disable";
            argForCheatBtn88view.btnClickableState = false;
            this.cheatBtn88view(argForCheatBtn88view);
          }
          /* .Make cheat button not only it is visually "disabled", but also
           * functionally unclickable. */
          this.cheatStock++;
          this.gameHist.cheatCount++;
          /* .Directly modify { gameHist }. this mean 2 things: 1. gameHist will
           * sync between { game }, { score } component. 2. The data inside { gameHist }
           * can be modify in lots of "places", it's loose and sloppy, but it is
           * more convenient and simple when application is small. */
        }
      }
      // .For cheat button.
    },
    answerOptionsAvailableAmount () {
      /* .Calculate how many answer buttons are still clickable (available).
       * .Background: When using { cheat }, some random answer buttons start to
       * be unclickable (not available) though they are still displayed,
       * but this will not going forever.
       * So the parameter { answerOptionsAvailableAmountMin } basically stops
       * more { cheat } to be used, when there is only { answerOptionsAvailableAmountMin }
       * amount of clickable (available) answer button left.
       * .Why I have to recalculate this (invoke this function) every time?: Instead of
       * just simple store the result, I do the recalculate every time, just because
       * I want to keep as less state data as possible, this comes the trade off,
       * I chose to make computing more complex, to trade off the simplicity
       * of state data.
       *
       * .Depends.
       * =========
       * .this.crrRound.answer.breeds.
       * ========= */

      var rslt = 0;
      for(let answerOption of this.crrRound.answer.breeds) {
        if (answerOption.btnClickableState === true) {
          rslt++;
        }
      }
      return rslt;
      /* .{ rslt } will not be greter than { crrRound.answer.breeds.length }
       * (also = { answerOptionsAmount }). */
    },
    aswBtn88controller (emit) {
      /* .{ Controller } function of answer buttons.
       *
       * .Depends.
       * =========
       * .this.answer.breeds.
       * .this.checkAswBtnClickableState().
       * .this.answerHandler88model().
       * ========= */

      //console.log(`Hi, ${emit.fullBreed} has just emitted.`);
      if (this.checkAswBtnClickableState(emit)) {
        this.answerHandler88model({
          controller: "aswBtnClick",
          answerBreeds: this.crrRound.answer.breeds,
          answerBreed: emit,
        });
        // .Call { model }, with an arguement that is an object.
      }
      // .Else, do nothing, because { emit.btnClickableState = false }.
    },
    aswBtn88view (argg) {
      /* .{ View } function of answer buttons.
       * .Argument ,, argg ,, data structure (example):
       * {
       *   affenpinscher: {
       *     btnVisualState: "ok",
       *     btnClickableState: "false,
       *   },
       *   chow: {
       *     btnClickableState: "false,
       *   },
       *   dane: {
       *     btnClickableState: "false,
       *   },
       *   bulldogBoston: {
       *     btnClickableState: "false,
       *   }
       * }
       *
       * .Depends.
       * =========
       * .this.crrRound.answer.breeds.
       * ========= */

      for (let aswBtnId in argg) {
        let crrBreedIndexInsideAnswerBreeds = 0;
        for (
          ;
          crrBreedIndexInsideAnswerBreeds < this.crrRound.answer.breeds.length ;
          crrBreedIndexInsideAnswerBreeds++
        ) {
          if (
            this.crrRound.answer.breeds[crrBreedIndexInsideAnswerBreeds].fullBreed
            === aswBtnId
          ) {
            break;
            // .Break the { for } loop, not { if } block. And now we get the
            // { crrBreedIndexInsideAnswerBreeds }.
          }
        }
        // .Get the { crrBreedIndexInsideAnswerBreeds }.
        if (
          typeof argg[aswBtnId].btnVisualState !== "undefined" &&
          argg[aswBtnId].btnVisualState !== null
        ) {
          this.crrRound.answer.breeds[crrBreedIndexInsideAnswerBreeds].btnVisualState =
            argg[aswBtnId].btnVisualState;
        }
        // .Change { btnVisualState } of current answer button.
        if (
          typeof argg[aswBtnId].btnClickableState !== "undefined" &&
          argg[aswBtnId].btnClickableState !== null
        ) {
          this.crrRound.answer.breeds[crrBreedIndexInsideAnswerBreeds].btnClickableState =
            argg[aswBtnId].btnClickableState;
        }
        // .Change { btnClickableState } of current answer button.
      }
    },
    calculateAswOptAmt() {
      /* .Recalculate { answerOptionsAmount } based on { cheatStock }.
       *
       * .Depends.
       * ==========
       * .this.answerOptionsAmount.
       * .this.answerOptionsAmountDefault.
       * .this.cheatStock.
       * .this.exponentialHalf().
       * ========== */

      var punishment = 0;
      punishment = this.exponentialHalf(this.cheatStock);
      this.cheatStock = this.cheatStock - punishment;
      this.answerOptionsAmount = this.answerOptionsAmountDefault + punishment;
      /* .So { answerOptionsAmount } will always as same as, or greater than
       * { answerOptionsAmountDefault }. */
    },
    cheatBtn88controller (emit) {
      /* .{ Controller } function of cheat button.
       *
       * .Depends.
       * =========
       * .this.answerHandler88model().
       * .this.checkAswBtnClickableState().
       * ========= */

      if (this.checkAswBtnClickableState(this.cheatBtnState)) {
        this.answerHandler88model({
          controller: "cheatBtnClick",
          answerBreeds: this.crrRound.answer.breeds,
          cheatBtnState: this.cheatBtnState,
        });
        // .Call { model }, with an arguement that is an object.
      }
      // .Else, do nothing, because { cheatBtnState.btnClickableState = false }.
    },
    cheatBtn88view (argg) {
      /* .{ View } function of cheat button.
       * .Argument ,, argg ,, data structure (example):
       * {
       *   btnVisualState: "ok",
       *   btnClickableState: "false,
       * }
       *
       * .Depends.
       * =========
       * .this.cheatBtnState.
       * ========= */
      if (
        typeof argg.btnVisualState !== "undefined" &&
        argg.btnVisualState !== null
      ) {
        this.cheatBtnState.btnVisualState = argg.btnVisualState;
      }
      // .Change { btnVisualState } of current cheat button.
      if (
        typeof argg.btnClickableState !== "undefined" &&
        argg.btnClickableState !== null
      ) {
        this.cheatBtnState.btnClickableState = argg.btnClickableState;
      }
      // .Change { btnClickableState } of current cheat button.
    },
    checkAswBtnClickableState (btn) {
      /* .Should move this method location to follow alphabetical.
       * .Check if an answer button or an cheat button is clickable or not.
       * If clickable, return true, else, retur false.
       * .Argument ,, btn: Data structure (example, not include all elements):
       * {
       *   mainBreed: ... ,
       *   btnClickableState: false,
       *   ... ,
       * }. */

      if (
        (typeof btn.btnClickableState === "undefined" || btn.btnClickableState === null) ||
        (
          (typeof btn.btnClickableState !== "undefined" &&
          btn.btnClickableState !== null) &&
          (btn.btnClickableState === true)
        )
      ) {
        /* .If { btn.btnClickableState = true }, or it doesn't exist at all,
         * both case will return true. */
        return true;
      } else {
        return false;
      }
    },
    createAnEmptySubObjForThisObjWithPptNameIfNotExists (objj, propertyName) {
      /* .Create an empty sub-object for this object with the given property name.
       * .Notice, { objj } is passed by reference,
       * while { propertyName } is passed by value. */

      if (typeof objj[propertyName] === "undefined" || objj[propertyName] === null) {
        /* .Be careful for the latter part ({ || objj[propertyName] === null }).
         * I'm not sure if I always expect when being null,
         * then I have to add a new empty sub object for this object.
         * But at least now I will keep this. */
        objj[propertyName] = {};
      }
      /* .Else, if this property already exists, do nothing.
       * It means this object has this property and some data already, so don't touch it. */
    },
    exponentialHalf (intt) {
      /* .Return half amount of given integer. The purpose of this function is
       * to make { cheatStock } cut to about the half (and turn into { punishment }
       * for the new round), one at a time.
       * .Argument ,, intt: Any positive integer, can accept 0. */

      intt = parseInt(Number(intt));
      if (intt < 0) {
        return 0;
      } else {
        return Math.ceil(intt / 2);
      }
    },
    finishCrrRound () {
      /* .Organized the existing state data (not only of { CrrRound },
       * but also others too), before going to new round.
       * .Currently { finishCrrRound() } only execute { updateGameHistRoundHist() }
       * and nothing else, in the future I might add more thing into here.
       *
       * .Depends.
       * ==========
       * .this.animationTime.timeDelayAfterAnwerChosen();
       * .this.setANewRound();
       * .this.updateGameHistRoundHist().
       * ========== */

       this.updateGameHistRoundHist();
       setTimeout(() => {
         this.setANewRound();
       }, this.animationTime.timeDelayAfterAnwerChosen);
       // .Todo: Not safe enough! Should bind { this } keword inside { setTimeout }!
    },
    fullBreedId (mainBreed, subBreed) {
      // .If { mainBreed } = "retriever", { subBreed } "golden", return "retrieverGolden".

      var rslt = mainBreed + (
        (subBreed !== null )
        ? subBreed.substr(0,1).toUpperCase() + subBreed.substr(1)
        : "" );
      /* .Using ternary operator here.
       * .If no sub breed, only { mainBreed } will be used in { fullBreed }. */
      return rslt;
    },
    fullBreedName (mainBreed, subBreed) {
      // .If { mainBreed } = "retriever", { subBreed } "golden", return "Golden Retriever".

      var rslt = null;
      if (subBreed !== null) {
        rslt = subBreed.substr(0,1).toUpperCase() +
        subBreed.substr(1) +
        " " +
        mainBreed.substr(0,1).toUpperCase() +
        mainBreed.substr(1);
      } else {
        // .If no sub breed, only { mainBreed } will be used in { fullBreedName }.
        rslt = mainBreed.substr(0,1).toUpperCase() + mainBreed.substr(1);
      }
      return rslt;
    },
    updateGameHistRoundHist() {
      /* .Clone { crrRound }, to the last (new) element of { gameHist.roundHist }.
       * .Notice, this clone will be pass by value, not pass by reference,
       * to prevent unexpected behave.
       *
       * .Depends.
       * ==========
       * .jquery.
       * .this.crrRound.
       * ==========
       *
       * .Results.
       * ==========
       * .this.gameHist.roundHist.
       * ========== */

      var rsltRoundHist = {};
      //... (Main logic, multiple lines, to decide what property should be update to there) ...
      rsltRoundHist.question = $.extend(true, {}, this.crrRound.question);
      rsltRoundHist.answer = {
        breeds: [],
        ifChosenAnswerCorrect: this.ifChosenAnswerCorrect,
      };
      rsltRoundHist.answer.breeds = this.crrRound.answer.breeds.map((elm) => {
        var rslt = {
          mainBreed: elm.mainBreed,
          subBreed: elm.subBreed,
          fullBreed: elm.fullBreed,
          fullBreedName: elm.fullBreedName,
          ifUserChooseThisAsw: elm.ifUserChooseThisAsw,
        };
        return rslt;
      });
      /* ."Filter" out useless data, like { btnVisualState }, { btnClickableState },
       * those are not related to { score } component at all. */
      this.gameHist.roundHist.push(rsltRoundHist);
    },
    modifyCssClassAddRoundTransitionState () {
      /* .Modify css class inside property { cssClassTransitionSpecific }.
       * .Add css class { .roundTransitionStateStateTransition } if it didn't exists inside.
       *
       * .Results.
       * ==========
       * .this.cssClass.
       * ========== */

      if (
        ! this.cssClass.cssClassTransitionSpecific
        .includes("roundTransitionStateStateTransition")
      ) {
        this.cssClass.cssClassTransitionSpecific.push("roundTransitionStateStateTransition");
      }
    },
    modifyCssClassRemoveRoundTransitionState () {
      /* .Modify css class inside property { cssClassTransitionSpecific }.
       * .Remove css class { .roundTransitionStateStateTransition } if it didn't exists inside.
       *
       * .Results.
       * ==========
       * .this.cssClass.
       * ========== */

      if (
        this.cssClass.cssClassTransitionSpecific
        .includes("roundTransitionStateStateTransition")
      ) {
        this.cssClass.cssClassTransitionSpecific.splice(this.cssClass.cssClassTransitionSpecific.indexOf("roundTransitionStateStateTransition"), 1);
      }
    },
    prepareDataForNewRound() {
      /* .This method will always be executed after { resetCrrRound() }.
       * .{ resetCrrRound() } only copy the template { crrRound } to { crrRound },
       * it doesn't do more computing stuff. Also, { resetCrrRound() } doesn't touch
       * those data that outside of { crrRound }.
       * But { prepareDataForNewRound() } will do these things.
       *
       * .Depends.
       * =========
       * .this.calculateAswOptAmt().
       * =========
       *
       * .Results.
       * =========
       * .this.cheatBtnState.
       * ========= */

      this.calculateAswOptAmt();
      this.cheatBtnState.btnVisualState = "neutral";
      this.cheatBtnState.btnClickableState = true;
    },
    randomIntegerFromRange (fromInt, toInt) {
      /* .Generate a random integer, from given range ({ fromInt } and { toInt }).
       * .For example, { randomIntegerFromRange(11, 14) } might return
       * any of 11, 12, 13, 14 (even possiblity). */

      var rangeSteps = null;
      var randomRangeFromZeroToStep = null;
      if (toInt <= fromInt) {
        return fromInt;
      }
      rangeSteps = toInt - fromInt + 1;
      randomRangeFromZeroToStep = Math.floor(Math.random() * rangeSteps);
      /* .If rangeSteps = 54, the result of { randomRangeFromZeroToStep }
       * will be 0, 1, 2 ... 53 (integer), never 54. */
      return randomRangeFromZeroToStep + fromInt;
    },
    resetCrrRound () {
      /* .Clone { crrRoundTemplate } to { crrRound } for every round
       * to have clean { crrRound } entirely.
       *
       * .See comment id 190421m190940.
       *
       * .About first round "bug": If this is the first round,
       * the "clone" (or you call it "reset")
       * process of { crrRound } have to be done inside the lifetime
       * of initialization of { created() } of this component
       * (this is just my guessing, after doing some extra experiment).
       * If you put this cloning process into any async proecess
       * like { setTimeout() }, it will causing error, for the first round,
       * BECAUSE at the first round, the { crrRound } is NULL, and html elements
       * using this property, CAN'T GET THE CORRECT SUB-PROPERTY.
       * But since the second, third ... round already have existing (though not "freshed")
       * "data strucuture", it won't causing error anymore.
       *
       * .Depends.
       * ==========
       * .jquery.
       * .this.crrRoundTemplate.
       * ==========
       *
       * .Results.
       * ==========
       * .this.crrRound.
       * ========== */

      this.crrRound = $.extend(true, {}, this.crrRoundTemplate);
      /* .Notice, you can't simply assign { crrRoundTemplate } to { crrRound }
       * (this will only copy "reference" instead of "value"),
       * and also you have to do deep clone, not shallow clone.
       * So this is why I use jquery { $.extend } feature here.
       * .Notice, if you { console.log(this.crrRoundTemplate) }, you will found
       * It's not a "pure object" I expected, I found "setter" and "getter"
       * was used for this object when I print out this object with { console.log() }
       * (in fact all data object of vue). This is somehow some kind of magic of vue,
       * but those "low level" mechanism is not important, I only work inside Vue and
       * Vue handles everything for me. If I want to see those data in { console.log },
       * I can use { console.log(JSON.stringify(this.crrRoundTemplate)) }. */
    },
    setANewRound (ifFirstRound = "notFirstRound") {
      /* .For every new round, this method will be executed.
       *
       * .Depends.
       * ==========
       * .this.breedList.
       * .this.animationTime.roundTransition.
       * .this.modifyCssClassAddRoundTransitionState().
       * .this.prepareDataForNewRound().
       * .this.resetCrrRound().
       * .this.setQuestionRandomBreed().
       * .this.setQuestionImageByBreed().
       * ========== */

      this.modifyCssClassAddRoundTransitionState();
      setTimeout(
        (function () {

          // .This is the main thing this method ({ setANewRound }) doing.
          // =============================================================
          return function () {
            if (ifFirstRound === "notFirstRound") {
              this.resetCrrRound();
              /* .See description inside this method to see what's happening.
               * .See comment id 190421m190940. */
            }
            this.prepareDataForNewRound();
            this.setQuestionRandomBreed(this.breedList);
            this.setQuestionImageByBreed();
            // . Notice this line is async.
            this.modifyCssClassRemoveRoundTransitionState();
            this.setAnswerRandomBreed(this.breedList);
          };
          // =============================================================

        })().bind(this),
        this.animationTime.roundTransition
      );
      // .This is the trivial thing in this method ({ setANewRound }), those code
      // ({ setTimeout() }) is just set for animatin reason.
    },
    setAnswerRandomBreed(breedList) {
      /* .Set each round ,, answers ((options)) ,, random breed.
       * .There are going to have multiple answers ((options)).
       * .This will be the content of answer buttons later.
       *
       * .Depends.
       * ==========
       * .this.answerOptionsAmount.
       * .this.crrRound.question.mainBreed.
       * .this.crrRound.question.subBreed.
       * .breCmm.randomBreed().
       * .this.fullBreedId().
       * .this.fullBreedName().
       * .this.randomIntegerFromRange().
       * ==========
       *
       * .Results.
       * ==========
       * .this.crrRound.answer.breeds.
       * ========== */

      const question = this.crrRound.question;
      var answerBreeds = this.crrRound.answer.breeds;
      var answerLoopCount = 0;
      var breedListLength = 0;
      var correctAnswerIndex = this.randomIntegerFromRange(0, this.answerOptionsAmount - 1);
      var randomBreed = {};

      // .Testing if length of { breedList } is too small to offer enough answer options.
      // ================================================================================
      for (let elm in breedList) {
        breedListLength++;
      }
      if (breedListLength < this.answerOptionsAmount) {
        console.debug(".Error, { breedList }is very small (or empty?), erro id 190422m210533.")
        return;
      }
      // ================================================================================

      // .Keep looping and add answer breeds (buttons).
      // ==============================================
      for (
        let answerLoopCount = 0 ; answerLoopCount < this.answerOptionsAmount ; answerLoopCount++
      ) {
        randomBreed = {
          mainBreed: null,
          subBreed: null,
          fullBreed: null,
          fullBreedName: null,
          ifUserChooseThisAsw: false,
          /* .Acronym: "If user choose this answer".
           * .This could be wrong answer or right answer, since this property
           * only defines if user choose this answer, not if this answer
           * is right or wrong. */
          btnVisualState: "neutral",
          btnClickableState: true,
        };
        /* .Reset { randomBreed } everytime, to prevent bugs, like passing reference
         * instead of passing value.
         * .About abstraction and single responsibility: I really don't want to put
         * data related to buttons, to here ({ crrRound.answer.breeds }), it makes
         * the code higly coupled and bug prone. But so far my application is
         * reletive small, seperate the data and write sync logic,
         * will makes it more complex.
         * .See comment id 190425m231737. */
        if (correctAnswerIndex === answerLoopCount) {
          /* .Will generate correct answer only.
           * .In this case, instead of generate a random answer breed,
           * use question breed directly. */
          randomBreed.mainBreed = question.mainBreed;
          randomBreed.subBreed = question.subBreed;
        } else {
          /* .Will generate wrong answer only. */
          let ifCollision = null;
          let randomBreedRaw = null;
          randomWrongAnswer:
          do {
            ifCollision = "noCollision";
            // .Reset this everytime, otherwise it will become infinite loop.
            randomBreedRaw = breCmm.randomBreed(breedList);
            // .Get a new generated random breed (not tested if valid yet).
            randomBreed.mainBreed = randomBreedRaw.mainBreed;
            randomBreed.subBreed = randomBreedRaw.subBreed;
            if (
              randomBreed.mainBreed === question.mainBreed &&
              randomBreed.subBreed === question.subBreed
            ) {
              /* .Prevent to generate correct answer here,
               * because here should generate wrong answer only. */
              ifCollision = "isCollision";
              continue randomWrongAnswer;
            }
            for (let answerBreed of answerBreeds) {
              if (
                answerBreed.mainBreed === randomBreed.mainBreed &&
                answerBreed.subBreed === randomBreed.subBreed
              ) {
                /* .Prevent collision with history answer breeds.
                 * There is a very tiny chance that 2 random generated
                 * breed might collision, we have to prevent this.
                 * .If collision with history answer breeds, break this { for } loop
                 * and run the { while } loop again, and retry (generate) another random breed.
                 * If it is still collided, try again, and again ... . */
                ifCollision = "isCollision";
                continue randomWrongAnswer;
              }
            }
          } while (ifCollision === "isCollision");
        }
        randomBreed.fullBreed = this.fullBreedId(randomBreed.mainBreed,
          randomBreed.subBreed);
        randomBreed.fullBreedName = this.fullBreedName(randomBreed.mainBreed,
          randomBreed.subBreed);
        answerBreeds.push(randomBreed);
        // .Got resonable answer breeds, and add it for real.
      }
      // ==============================================
    },
    setBreedList () {
      /* .Set a [ reusable ]**[ complete ] breed list.
       * .This method only executed once, after this initial execution,
       * this breed list will be used again and again in every round.
       *
       * .Depends.
       * ==========
       * .breCmm.fetchBreedList().
       * ==========
       *
       * .Results.
       * ==========
       * .this.breedList.
       * ==========
       *
       * .Return.
       * ==========
       * .Promise ,, resolve, if succeed, Promise ,, reject if failed.
       * ========== */

      return breCmm.fetchBreedList()
      .then((json) => {
        //console.log(JSON.stringify(json));
        this.breedList = json.message;
        return new Promise ((resolve, reject) => {resolve();});
      })
      .catch((reject) => {
        return new Promise ((resolve, reject) => {reject();});
      });
    },
    setQuestionImageByBreed () {
      /* .Set each round ,, question ,, random breed ,, image url.
       * .Get the real image source ({ src }) from { json }, then save it to
       * this component property. After this property changed, something will happens
       * sequentially (placeholder image get replaced)), but this is out of scope
       * (and not responsibility) of this method.
       *
       * .Depends.
       * ==========
       * .breCmm.getImageSrcByBreed().
       * .this.crrRound.question.mainBreed.
       * .this.crrRound.question.subBreed.
       * ==========
       *
       * .Results.
       * ==========
       * .this.crrRound.question.imgSrc.
       * ========== */

      this.crrRound.question.imgSrc = null;
      if (this.crrRound.question.mainBreed === null) {
        /* .No need to test if { question.subBreed } is null or not, because
         * it might be null and this is normal.
         * .Do nothing in this block. */
      } else {
        breCmm.getImageSrcByBreed(this.crrRound.question.mainBreed, this.crrRound.question.subBreed)
        .then((imgUrls) => {
          this.crrRound.question.imgSrc = imgUrls[0];
          /* .0 means index 0, since we call API with
           * { `https://dog.ceo/api/breed/${question.mainBreed}/${question.subBreed}/images/random/1` },
           * we don't have image index 1, 2 ... */
        })
        .catch((reject) => {
          console.debug({
            "rejectTitle": ".Error id 190416m011435.",
            "rejectMessage": reject
          });
        });
      }
    },
    setQuestionRandomBreed (breedList) {
      /* .Set each round ,, question ,, random breed.
       *
       * .Depends.
       * ==========
       * .breCmm.randomBreed().
       * .this.fullBreedId().
       * .this.fullBreedName().
       * ==========
       *
       * .Results.
       * ==========
       * .this.crrRound.question.mainBreed.
       * .this.crrRound.question.subBreed.
       * ========== */

      var randomBreed = breCmm.randomBreed(breedList);
      this.crrRound.question.mainBreed = randomBreed.mainBreed;
      this.crrRound.question.subBreed = randomBreed.subBreed;
      this.crrRound.question.fullBreed = this.fullBreedId(randomBreed.mainBreed, randomBreed.subBreed);
      this.crrRound.question.fullBreedName = this.fullBreedName(randomBreed.mainBreed, randomBreed.subBreed);
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: grid;
  grid-template-columns: 3fr minmax(max-content, 2fr);
  grid-template-areas:
    "breedImage answerBtnCtn"
    "cheatBtn cheatBtn";
  grid-gap: 2em;
  margin: 0 0.5em;
  padding: 0;
}
.breedImage {
  grid-area: breedImage;
  justify-self: right;
  align-self: center;
}
.answerBtnCtn {
  grid-area: answerBtnCtn;
  justify-self: left;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.answerBtnCtn button {
  /* .Moved into { answerBtn88breed } component. */
}
.cheatBtn {
  grid-area: cheatBtn;
  /*justify-self: center;*/
  margin-left: 1em;
  margin-right: 1em;
  justify-self: center;
}
.roundTransitionStateStateNormal {
  opacity: 1;
}
.roundTransitionStateStateNormal.roundTransitionStateStateTransition {
  opacity: 0;
}
</style>
