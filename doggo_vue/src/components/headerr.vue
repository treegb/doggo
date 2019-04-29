<!-- .The name of this component use { headerr } instead of { header }
to prevent conflict with html standard { header } tag. -->
<template>
  <div class="headerr">
    <header>
      <h1>Doggo</h1>
      <p class="subTitle">A dog breed guessing game</p>
      <nav>
        <ul>
          <li
            class="navGame"
            v-bind:class="{'crrNav': crrNav === 'navGame'}"
            v-on:click="toggleNav('navGame')"
          >
            <p class="navTitle">Game</p>
            <div class="decorationDot"
            ></div>
          </li>
          <li
            class="navHelp"
            v-bind:class="{'crrNav': crrNav === 'navHelp'}"
            v-on:click="toggleNav('navHelp')"
          >
            <p class="navTitle">Help</p>
            <div class="decorationDot"
            ></div>
          </li>
          <li
            class="navScore"
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
  </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: var(--clorMain1);
  display: grid;
  grid-template-columns: min-content max-content;
  /* .{ Min-content } is for making { .subTitle } shrinking to fit { h1 } width,
   * while { max-content } is to make { nav } ,, { ul } don't "wrap". */
  grid-template-areas:
    "heading nav"
    "subTitle nav";
  justify-content: center;
  align-items: center;
  grid-gap: 0 3.8em;
  padding: 0.5em 0;
  margin-bottom: 3.4em;
}
h1 {
  grid-area: heading;
  line-height: 100%;
  margin: 0.4rem 0;
  color: var(--clorMain1Shade1);
  font-family: "aclonica", serif;
  font-size: 2.5em;
  font-weight: 100;
}
.subTitle {
  grid-area: subTitle;
  font-size: 0.6em;
  margin: 0.4em  0;
  color: var(--clorMain1Shade1);
  letter-spacing: calc(0.0625em * 4);
  line-height: 100%;
}
nav {
  grid-area: nav;
}
nav ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
nav li {
  display: inline-block;
  margin-left: 0.8em;
  cursor: pointer;
}
nav li:first-child {
  margin-left: 0em;
}
nav li .navTitle {
  margin: 0;
  color: var(--greyClorMain2);
  letter-spacing: calc(0.0625em * 3);
}
nav li > * {
}
nav li .decorationDot {
  margin: 0.3em auto;
  padding:0;
  width: calc(0.0625em * 5);
  height: calc(0.0625em * 5);
  border-radius: 50%;
  background-color: var(--greyClorMain2);
}
nav li.crrNav .navTitle {
  color: white;
  font-weight: 900;
}
nav li.crrNav .decorationDot {
  background-color: white;
}
</style>
