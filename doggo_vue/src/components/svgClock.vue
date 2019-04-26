<template>
  <div class="thisSvgComponentElm layer1Cntn scoreBriefItm clock">
    <div class="thisSvgComponentElm layer2Cntn">
      <div class="thisSvgComponentElm layer3Cntn">
<svg
   class="thisSvgComponentElm svg"
   viewBox="0 0 42.183048 42.18306"
   height="159.43204"
   width="159.43199"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.1"
   sodipodi:docname="clock.svg"
   inkscape:version="0.92.1 r15371">
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
     id="namedview7"
     showgrid="false"
     inkscape:zoom="1.6282801"
     inkscape:cx="-94.969164"
     inkscape:cy="71.313401"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg8"
     units="px" />
  <defs />
  <metadata >
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
  <g
     transform="translate(-72.019937,-73.70027)"
   >
    <path
       class="path5083-3"
       transform="matrix(0.26458333,0,0,0.26458333,72.019937,73.70027)"
       d="M 79.712891,0 C 35.758195,0 0,35.757768 0,79.720703 c 0,43.946267 35.758195,79.710937 79.712891,79.710937 43.957319,0 79.718749,-35.76467 79.718749,-79.710937 C 159.43164,35.757768 123.67021,0 79.712891,0 Z m 0,5.7128906 c 40.803979,0 74.007809,33.1968894 74.007809,74.0078124 0,40.802537 -33.20383,74.003907 -74.007809,74.003907 -40.80669,0 -74.0058598,-33.20137 -74.0058598,-74.003907 0,-40.810923 33.1991698,-74.0078124 74.0058598,-74.0078124 z m -4.277344,8.8886714 v 9.535157 h 8.5625 v -9.535157 z m -27.291016,8.150391 -1.976562,1.140625 4.763672,8.257813 1.980468,-1.140625 z m 63.140629,0 -4.76758,8.257813 1.97461,1.140625 4.76562,-8.257813 z M 76.859375,33.140625 V 71.476562 L 53.210938,57.830078 47.505859,67.708984 76.859375,84.660156 v 11.236328 h 5.708984 v -7.941406 l 8.302735,4.796875 5.714844,-9.888672 -14.017579,-8.08789 V 33.140625 Z m -52.970703,13.027344 -1.142578,1.980469 8.267578,4.773437 1.136719,-1.982422 z m 111.648438,0 -8.25781,4.771484 1.14258,1.974609 8.25585,-4.765624 z M 14.591797,75.433594 v 8.568359 h 9.541015 v -8.568359 z m 120.701173,0 v 8.568359 h 9.53711 v -8.568359 z m -104.279298,31.082026 -8.267578,4.77149 1.142578,1.98242 8.261719,-4.77148 z m 97.408208,0 -1.14258,1.98243 8.25781,4.77148 1.14062,-1.98242 z m -77.490239,20.76563 -4.763672,8.26367 1.976562,1.14063 4.767578,-8.25782 z m 57.560549,0 -1.97461,1.14648 4.76758,8.25782 1.97265,-1.14063 z m -33.056643,8.02148 v 9.53321 h 8.5625 v -9.53321 z"
       style="fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.13333334"
       inkscape:connector-curvature="0" />
  </g>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svgClock',
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
.thisSvgComponentElm.layer1Cntn,
.thisSvgComponentElm.layer1Cntn,
.thisSvgComponentElm.layer1Cntn {
  margin: 0;
  padding: 0;
}
.thisSvgComponentElm.layer1Cntn {
  /* .Aspect ratio:
   * width="159.43199"
   * height="159.43199"
   * so aspect ratio is around (159.43199 / 159.43199).
   * .Notice, this line ,, value, have to updated with apect ratio of this svg image. */
   width: 100%;
}
.thisSvgComponentElm.layer2Cntn {
  padding-bottom: calc(100% * (159.43199 / 159.43199));
  /* .Notice, this line ,, value, have to updated with apect ratio of this svg image. */
  position: relative;
}
.thisSvgComponentElm.layer3Cntn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/* ===================================================================== */

.thisSvgComponentElm.svg {
   width: 100%;
   height: 100%;
}
.thisSvgComponentElm.svg .path5083-3 {
  fill: var(--clorMain1);
}
</style>
