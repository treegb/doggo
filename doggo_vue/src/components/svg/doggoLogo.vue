<!--
.About: Here only briefly list few things you need to set up correctly to use this component.
About details, see comment inside this component.
.Change component name, for example "footerTriangle".
.Parent: Set parent element to { positin: relative }, and give { .svgComp } an
explicit positioning. Also set { width } of { .svgComp } in parent.
.Convert inkscape svg to optimized svg, with tools like { SvgOmg }-{ SVGO }-[ SVG optimizer ].
.Set correct aspect ratio.
.Set correct pivot point for scalling.
.Apply class on that target svg path. ({ class="theMainPath" }). And set the color.
Don't use { id } and use { class } instead, because it is more consistent, convenient, and if you
use this component multiple times, they don't collision with id's, and Vue will make
"alias" ( data attribute ) for classes.
-->
<template>
  <div class="svgComp doggoLogo">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="481.01" height="631.415" viewBox="0 0 481.01 631.415">
  <path class="svgClor1" d="M150.147 57.861A256.861 256.78 0 0 0 0 106.691v415.993a256.861 256.78 0 0 0 150.147 48.738 256.861 256.78 0 0 0 256.86-256.78 256.861 256.78 0 0 0-256.86-256.78zm.757 87.084c.187-.01.364-.01.524.018 2.565.366 15.754 31.04 15.754 31.04l10.258 2.19 11.359 30.31 15.387 15.337-13.819 3.653s9.689 20.52 13.625 28.367c3.937 7.846 5.149 28.672 5.149 28.672s43.299 53.417 43.299 62.773c8.78-2.716 24.527 33.498 24.527 33.498l-4.543 6.338 6.36 3.32-3.33 6.338 8.478 12.674-.608 4.227C226.4 450.217 149.23 441.118 149.23 441.118l4.03-7.305 5.862-7.668 15.389-8.764 20.518-.365-8.793-8.033V384.88l-3.665-1.46-1.832 4.38-10.26-5.111-12.09 34.691-16.12 21.91-26.014-10.955 2.932-4.383 9.158 1.096s5.864-9.86 6.23-15.703c.367-5.843.366-58.79.366-58.79l-5.862-7.306-5.496-46.011-4.396-7.303-.367-49.299 13.189-27.752V190.61s-5.861-9.86-8.426-12.051c-2.564-2.191 2.565-17.893 4.397-16.797 1.831 1.096 4.762 4.381 5.861 7.668 1.1 3.287 7.695.365 7.695.365s-1.099-15.336 0-18.258c1.03-2.738 6.568-6.44 9.37-6.591z" />
  <path class="svgClor2" d="M137 599.233c6.62.597 13.26.96 19.906 1.089 156.515 0 283.396-127.426 283.396-284.615 0-157.188-126.88-284.614-283.396-284.614-6.645.113-13.285.46-19.906 1.042" fill="none" stroke-linejoin="round" />
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "doggoLogo",
    components: {
    },
    props: [
    ],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/style/base.scss";

  $aspectRatio: 481.01/631.415;
  // .Aspect ratio: Hav to sync with svg width and height data,
  // after convert svg from inkscape to this component.
  // The value is (width / height), and it is pure number, so you can't use
  // something like (300px / 200px), but (300 / 200).
  $scalingPivotX: -31%;
  $scalingPivotY: -50%;
  // .{ scalingPivotY }: scalingPivotX = 0% and scalingPivotY = 0% means pivot
  // will be left-top side of svg image.
  // scalingPivotX = -100% and scalingPivotY = -100% means pivot
  // will be right-bottom side of svg image.

  .svgComp {
    position: absolute;
    // .Parent:
    // ..Position: You have to set parent element to { positin: relative }, and give
    // { .svgComp } a explicit positioning.
    // ..{ width }: { width } need to be set in order to make this svg component works
    // properly. But instead of setting it here, set it outside (parent component)
    // by using /deep/ selector.
    // Because the width is often depends on perent environment, by setting it outside,
    // it will be more flexible.
    //width: 90%;
    margin: 0;
    padding: 0;
    //border: 1px solid purple;
  }
  .paddingTopHolder {
    // .Purpose: This container serve 2 purpose - 1. Create the height according
    // to aspect ratio, with percentage { padding-top } hack. 2. Set the center pivot
    // of scaling, so
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: calc(100% / (#{$aspectRatio}));
    //border: 3px solid blue;
  }
  .absoluteCtnr {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate($scalingPivotX, $scalingPivotY);
    line-height: 0;
    // .Don't know why there is a gap at the top of { svg }, and don't know why it could
    // get removed after setting { line-height: 0 } here.
    //border: 3px solid red;
  }
  svg {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    //border: 3px solid yellow;
  }
  .svgClor1 {
    fill: var(--svgClor1);
  }
  .svgClor2 {
    stroke: var(--svgClor2);
    stroke-width: 20px;
  }
</style>
