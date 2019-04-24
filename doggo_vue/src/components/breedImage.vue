<template>
  <div class="breedImage">
    <placeholderImage v-show="state === 'placeholderImage'" />
    <img
      v-show="state === 'realImage'"
      v-bind:src="imgSrc"
      alt=""
    >
  </div>
</template>

<script>
import placeholderImage from "./placeholderImage.vue";
export default {
  name: 'breedImage',
  components: {
    placeholderImage
  },
  created () {
  },
  data () {
    return {
      state: "placeholderImage",
      // .{ State } = "placeholderImage" or "realImage".
    };
  },
  props: [
    "imgSrc"
  ],
  computed: {
  },
  methods: {
  },
  watch: {
    imgSrc (imgSrc) {
      // .Make a watcher, if { imgSrc } changed, then make { state } change too.
      if (imgSrc === null ) {
        this.state = "placeholderImage";
      } else if (imgSrc !== null && typeof imgSrc !== "undefined" ) {
        // .If { imgSrc } is resonable image url.
        var tmpImgObj = new Image();
        tmpImgObj.onload = (() => {
          return function () { this.state = "realImage";};
          // .Change { state } to "realImage" is resonable image url.
        })().bind(this);
        /* .Use { bind } and self-invoking function here
         * to eliminate the ambiguity of whom { this } mean for. */
        tmpImgObj.src= imgSrc;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breedImage {
  /* .This will make a overall control for all child elemnts under this element,
   * including both { .breedImage .img } and
   * { .breedImage .placeholderImage.layer1Cntn }, if any of those image be "shown". */

  /* .Notice, you should always assign relative value to grid item ,, { width } property,
   *  you shouldn't give it fixed value because it causing overflow bug. Give fixed
   *  value to { min-width } and { max-width } is fine, though.
   * =================================================================================== */
  min-width: calc(0.0625em * 140);
  width: 100%;
  max-width: calc(0.0625em * 540);
  /* =================================================================================== */

  /* .Height limitation might not be useful so I didn't set any of them here. */
}
img {
  width: 100%;
}
</style>
