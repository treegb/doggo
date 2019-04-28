<template>
  <div class="thisSvgComponentElm layer1Cntn svgSymbolTick">
    <div class="thisSvgComponentElm layer2Cntn">
      <div class="thisSvgComponentElm layer3Cntn">
<svg
  class="thisSvgComponentElm svg"
  width="328.64603"
  height="263.36368"
  viewBox="0 0 86.954259 69.681642"
  version="1.1" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:version="0.92.1 r15371" sodipodi:docname="symbol_tick.svg">
    <defs />
    <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.4235" inkscape:cx="-461.62727" inkscape:cy="426.94793" inkscape:document-units="mm" inkscape:current-layer="id190426m173045" showgrid="false" inkscape:window-width="1280" inkscape:window-height="656" inkscape:window-x="0" inkscape:window-y="27" inkscape:window-maximized="1" inkscape:snap-global="false" units="px" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" />
    <metadata>
        <rdf:RDF>
            <cc:Work rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
            </cc:Work>
        </rdf:RDF>
    </metadata>
    <g inkscape:groupmode="layer" id="id190426m173045" inkscape:label="Layer 2" style="display:inline" transform="translate(-69.063188,-195.6511)">
        <path class="path4534" style="opacity:1;fill-opacity:1;stroke:none;stroke-width:0.40000004;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" d="m 69.063188,230.48707 c 11.242019,1.24945 22.206472,34.84567 22.206472,34.84567 l 10.68685,-7.0802 c 0,0 11.98444,-25.03684 23.178,-37.63484 2.15585,-2.42634 5.923,-6.59404 5.923,-6.59404 5.71907,-5.32878 23.44599,-14.10492 23.44599,-14.10492 l 1.51395,-4.26764 c -12.11261,2.90275 -25.82643,7.67137 -30.35302,12.50999 0,0 -6.69979,3.00372 -30.092264,38.01347 -4.857656,-10.1344 -12.432028,-20.08352 -20.866722,-19.68647 -1.93899,1.33035 -5.642256,3.99898 -5.642256,3.99898 z" inkscape:connector-curvature="0" sodipodi:nodetypes="cccsccccccc" />
    </g>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svgSymbolTick',
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
   * width="328.64603"
   * height="263.36368"
   * so aspect ratio is around (328.64603 / 263.36368).
   * .Notice, this line ,, value, have to updated with apect ratio of this svg image. */
   width: 100%;
}
.thisSvgComponentElm.layer2Cntn {
  padding-bottom: calc(100% * (263.36368 / 328.64603));
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
.thisSvgComponentElm.svg .path4534 {
  fill: var(--clorOk);
}
</style>
