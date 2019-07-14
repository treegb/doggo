<!-- .The name of this component use { headerr } instead of { header }
to prevent conflict with html standard { header } tag. -->
<template>
  <header class="headerr">
    <div class="logo">
      <h1><i class="livelyFont">Doggo</i></h1>
      <p class="subTitle">A dog breed guessing game</p>
    </div>
    <input type="checkbox" id="headerMenuInput" v-model="headerMenuVisibleButtonInputChecked">
    <!-- .<Label> and <input> here is for collapsable nav, for mobile screen. -->
    <label for="headerMenuInput"><!--
      --><div class="visibleButton"><!--
        --><div class="theThickLine"></div><!--
      --></div><!--
    --></label>
    <nav>
      <ul>
        <li
          class="nav-item navGame"
          v-bind:class="{'crrNav': crrNav === 'navGame'}"
          v-on:click="toggleNav('navGame')"
        >
          <p class="navTitle">Game</p>
          <div class="decorationDot"
          ></div>
        </li>
        <li
          class="nav-item navHelp"
          v-bind:class="{'crrNav': crrNav === 'navHelp'}"
          v-on:click="toggleNav('navHelp')"
        >
          <p class="navTitle">Help</p>
          <div class="decorationDot"
          ></div>
        </li>
        <li
          class="nav-item navScore"
          v-bind:class="{'crrNav': crrNav === 'navScore'}"
          v-on:click="toggleNav('navScore')"
        >
          <p class="navTitle">Score</p>
          <div class="decorationDot"
          ></div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerr',
  methods: {
    toggleNav (crrNav) {
      // .This method ((in this component)) will { emit } some data to parent component.
      this.$emit("toggleNav", crrNav)
    }
  },
  props: [
    "crrNav",
  ],
  data () {
    return {
      headerMenuVisibleButtonInputChecked: false,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";
  @import "@/style/headerNavMobileLogic.scss";

  $transitionDuration_navTitle: 0.8s;
  $transitionDuration_decorationDot: 0.7s;
  $decorationDot_dotHeight: 5px;
  $decorationDot_lineHeight: 2px;

  header {
    background-color: var(--clorMain1);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 0.5em 0;
    margin-bottom: 3.4em;
  }
  .logo {
    margin-right: 3.8em;
  }
  h1 {
        //line-height: 100%;
        // .This is useless? Try it later.
    margin: 0.4rem 0;
    color: var(--clorMain1Shade1);
    font-size: 2.5em;
    font-weight: normal;
  }
  .subTitle {
    font-size: 0.6em;
    margin: 0.4em  0;
    color: var(--clorMain1Shade1);
    letter-spacing: calc(0.0625em * 4);
        //line-height: 100%;
        // .This is useless? Try it later.
  }
  nav {
    & ul {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;
      align-items: center;
    }
    & li {
      list-style: none;
      margin-left: 0.8em;
      min-width: 3.0em;
      cursor: pointer;
    }
    & li:first-child {
      margin-left: 0em;
    }
    & li .navTitle {
      text-align: center;
      color: scale-color(
        $clorPrimary,
        $saturation: -80%,
        $lightness: 35%,
      );
      transition: all $transitionDuration_navTitle;
    }
    & li p.navTitle {
      margin: 0;
    }
    & li .decorationDot {
      margin: 0.5em auto 0.3em;
      padding:0;
      width: $decorationDot_dotHeight;
      height: $decorationDot_dotHeight;
      border-radius: 50%;
      background-color: scale-color(
        $clorPrimary,
        $saturation: -80%,
        $lightness: 30%,
        $alpha: -60%
      );
      transition: all $transitionDuration_decorationDot;
    }
    & li:not(.crrNav) .decorationDot {
      width: 2em;
      height: $decorationDot_lineHeight;
      border-radius: 0%;
    }
    & li.crrNav .navTitle {
      color: white;
      font-weight: 900;
    }
    & li.crrNav .decorationDot {
      background-color: scale-color(
        white,
        $alpha: -40%
      );
    }
  }
</style>
