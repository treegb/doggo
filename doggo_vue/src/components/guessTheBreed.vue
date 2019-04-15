<template>
  <div id="guessTheBreed">
    <p>Main of guessTheBreed ...</p>
    <button v-on:click="setRandomBreed(breedList)">Testing getting new breed image</button>
    <img
      v-show="crrRound.imgSrc"
      v-bind:src="crrRound.imgSrc"
      alt=""
    />
  </div>
</template>

<script>
import * as breCmm from "../js/breedCommon.js";
export default {
  name: 'guessTheBreed',
  components: {
  },
  created () {
    this.setBreedList();
  },
  data () {
    return {
      crrRound: {
        mainBreed: null,
        subBreed: null,
        imgSrc: null,
      },
      breedList: {},
      gameRound: []
    };
  },
  props: [
    "state",
  ],
  computed: {
  },
  methods: {
    setBreedList () {
      // .Arguments.
      // ============
      var breedList = this.breedList;
      var setRandomBreed = this.setRandomBreed;
      // .breCmm.fetchBreedList()
      // ============

      breCmm.fetchBreedList()
      .then((json) => {
        //console.log(JSON.stringify(json));
        for(let depthOneElm in json.message) {
          /* .Copy the fetched bread list, to vue instance.
           * .They reason I don't just simply use { breedList = json.message } is,
           *  this will not "passing reference", but only "passing value",
           * { breedList } ouside this function lifetime will not be modified. */
          breedList[depthOneElm] = json.message[depthOneElm];
        }
        setRandomBreed(breedList);
      })
      .catch((reject) => {
        console.warn(reject);
      });
    },
    setImageByBreed () {
      // .Arguments.
      // ============
      var crrRound = this.crrRound;
      // ============

      if (crrRound.mainBreed === null) {
        // .No need to test if { subBreed } is null or not, because
        // it might be null and this is normal.
        crrRound.imgSrc = null;
      } else {
            console.log("peanut 1");
        breCmm.fetchImageByBreed(crrRound.mainBreed, crrRound.subBreed)
        .then((blob) => {
          var objectURL;
            console.log("peanut 8");
            objectURL = URL.createObjectURL(blob);
            console.log(objectURL);
          crrRound.imgSrc = objectURL;
        })
        .catch((reject) => {
          console.warn(reject);
          crrRound.imgSrc = null;
        });
      }
    },
    setRandomBreed (breedList) {
              console.log(breedList);
      // .Arguments.
      // ============
      var crrRound = this.crrRound;
      var setImageByBreed = this.setImageByBreed;
      // .breCmm.randomBreed()
      // ============

      var randomBreed = breCmm.randomBreed(breedList);
      crrRound.mainBreed = randomBreed.mainBreed;
      crrRound.subBreed = randomBreed.subBreed;
      setImageByBreed();
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
