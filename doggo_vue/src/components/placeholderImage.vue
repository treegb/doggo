<template>
  <div class="placeholderImage layer1Cntn">
  <div class="placeholderImage layer2Cntn">
  <div class="placeholderImage layer3Cntn">
    <svg
       id="id190416m052506"
       class="placeholderImage svg"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       x="0"
       y="0"
       width="503.34799"
       height="385.01001"
       viewBox="0 0 503.34799 385.01001"
       sodipodi:docname="placeholder_featured_image2.svg"
       inkscape:version="0.92.1 r15371">
      <metadata
         id="metadata23">
        <rdf:RDF>
          <cc:Work
             rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <defs
         id="defs21" />
      <sodipodi:namedview
         pagecolor="#ffffff"
         bordercolor="#666666"
         borderopacity="1"
         objecttolerance="10"
         gridtolerance="10"
         guidetolerance="10"
         inkscape:pageopacity="0"
         inkscape:pageshadow="2"
         inkscape:window-width="1280"
         inkscape:window-height="656"
         id="namedview19"
         showgrid="false"
         inkscape:zoom="4.3623505"
         inkscape:cx="503.00333"
         inkscape:cy="298.2136"
         inkscape:window-x="0"
         inkscape:window-y="27"
         inkscape:window-maximized="1"
         inkscape:current-layer="id190416m052506"
         fit-margin-top="0"
         fit-margin-left="0"
         fit-margin-right="0"
         fit-margin-bottom="0" />
      <g
         id="g5"
         transform="translate(687.662,-194.48974)" />
      <path
         class="path7"
         d="M 15,15 H 488.348 V 370.01 H 15 Z"
         stroke-miterlimit="10"
         inkscape:connector-curvature="0"
         style="fill-opacity:0;stroke-width:30;stroke-miterlimit:10;stroke-opacity:1" />
      <path
         class="path9"
         d="m 157.004,111.641 c 0,19.825 -16.071,35.896 -35.895,35.896 -19.825,0 -35.896,-16.071 -35.896,-35.896 0,-19.824 16.071,-35.895 35.896,-35.895 19.824,0 35.895,16.071 35.895,35.895 z"
         inkscape:connector-curvature="0"
         style="fill-opacity:1" />
      <path
         class="path11"
         d="M 430.363,310.053 H 74.958 l 47.334,-101.375 29.979,44.179 100.192,-152.26 71.791,107.686 33.923,-37.079 z"
         inkscape:connector-curvature="0"
         style="fill-opacity:1" />
    </svg>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'placeholderImage',
  components: {
  },
  created () {
  },
  data () {
    return {
    };
  },
  props: [
  ],
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .These 3 layer containers are to provide inner elements can have
 * parent container which have width and height follow same aspect ratio.
 * ===================================================================== */
.placeholderImage.layer1Cntn,
.placeholderImage.layer1Cntn,
.placeholderImage.layer1Cntn {
  margin: 0;
  padding: 0;
}
.placeholderImage.layer1Cntn {
   /* .Aspect ratio:
   * width="503.34799"
   * height="385.01001"
   * so aspect ratio is around (503.34799 / 385.01001). */
   width: 100%;
}
.placeholderImage.layer2Cntn {
  padding-bottom: calc(100% * (385.01001 / 503.34799));
  position: relative;
}
.placeholderImage.layer3Cntn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/* ===================================================================== */

.placeholderImage.svg {
   width: 100%;
   height: 100%;
}
.placeholderImage.svg .path9,
.placeholderImage.svg .path11 {
  fill: var(--clorMain1Shade2);
}
.placeholderImage.svg .path7 {
  stroke: var(--clorMain1Shade2);
}
</style>
