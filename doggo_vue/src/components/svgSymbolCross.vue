<template>
  <div class="thisSvgComponentElm layer1Cntn svgSymbolCross">
    <div class="thisSvgComponentElm layer2Cntn">
      <div class="thisSvgComponentElm layer3Cntn">
<svg
  class="thisSvgComponentElm svg"
  width="233.48311"
  height="211.61774"
  viewBox="0 0 61.775738 55.990528"
  xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" inkscape:version="0.92.1 r15371" sodipodi:docname="symbol_cross.svg">
    <defs />
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.46585" inkscape:cx="23.290547" inkscape:cy="154.76722" inkscape:document-units="mm" inkscape:current-layer="id190426m174744" showgrid="false" inkscape:window-width="1280" inkscape:window-height="656" inkscape:window-x="0" inkscape:window-y="27" inkscape:window-maximized="1" units="px" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" />
    <metadata>
        <rdf:RDF>
            <cc:Work rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
            </cc:Work>
        </rdf:RDF>
    </metadata>
    <g inkscape:groupmode="layer" id="id190426m174744" inkscape:label="Layer 2" style="display:inline" transform="translate(-72.330234,-111.79575)">
        <path
        class="path4532"
        style="opacity:1;fill-opacity:1;stroke:none;stroke-width:0.40000001;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" d="m 87.937825,111.99573 c -3.488561,3.34902 -6.279421,6.48874 -6.628281,9.41913 -0.34885,2.9304 1.94244,10.62549 13.592871,22.6136 -3.9679,5.99406 -9.397791,11.93759 -12.663511,13.50774 -2.2468,1.08025 -3.79906,3.20809 -9.70869,2.19501 4.55886,7.59811 7.5981,8.27349 11.65043,7.5981 3.347601,-0.55793 11.059461,-7.68252 16.884656,-16.04044 10.63736,11.22831 16.2093,16.12487 22.37221,16.29371 6.16289,0.16885 8.18907,-5.40309 10.46848,-10.04638 -2.6226,0.53496 -8.58876,0.43198 -11.31914,-0.91561 -6.24644,-3.08296 -13.07074,-9.26844 -15.27421,-12.5077 6.62651,-8.28819 13.55599,-14.35714 16.54699,-16.54698 1.78281,-1.30527 4.30557,-2.87039 6.66942,-3.63021 -4.7277,-5.31867 -7.51366,-7.34483 -13.50771,-3.37693 -5.99409,3.9679 -11.81928,12.07254 -15.87162,16.29371 -4.727695,-5.23426 -11.902975,-14.93108 -13.211895,-24.85675 z" inkscape:connector-curvature="0" sodipodi:nodetypes="cccscscccscscccc" />
    </g>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svgSymbolCross',
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
   * width="233.48311"
   * height="211.61774"
   * so aspect ratio is around (233.48311 / 211.61774).
   * .Notice, this line ,, value, have to updated with apect ratio of this svg image. */
   width: 100%;
}
.thisSvgComponentElm.layer2Cntn {
  padding-bottom: calc(100% * (211.61774 / 233.48311));
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
.thisSvgComponentElm.svg .path4532 {
  fill: var(--clorError);
}
</style>
