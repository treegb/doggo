<template>  <div class="help">
    <!-- <div
      v-show="ifShowintroAnim"
      class="introAnim"
    >
      <div class="mainContent">
        <div class="doggoLogoCtnr">
          <doggoLogo></doggoLogo>
          <div class="lowercaseLetter one"><i>o</i></div>
          <div class="lowercaseLetter two"><i>g</i></div>
          <div class="lowercaseLetter three"><i>g</i></div>
          <div class="lowercaseLetter four"><i>o</i></div>
        </div>
        <div class="subtitle"><i>A dog breed guessing game</i></div>
        <div class="text_withAllKindOfbreeds"><i>With<br>all kind of<br>breeds</i></div>
      </div>
    </div> -->
    <main>
      <h2>The "Game" tab</h2>
      <p>Here is were you chose your <code>game mode</code>, start a new game.</p>
      <p>Feel free to switch to any other <code>tabs</code> in the middle of game, the data will not be lost.</p>
      <h2>The "Help" tab</h2>
      <p>The current <code>tab</code> you are watching.</p>
      <h2>The "Score" tab</h2>
      <p>See your game <code>score</code>, game <code>time</code> you spend, <code>cheat</code> amount you used, and all the history <code>question</code> and <code>answer</code> you choose (including correct dog breed and wrong dog breed) in every round.</p>
      <p>You don't have to wait until the game end to see those real time data, they are updated in "real time" when you are playing. So feel free to take a "peek" at any time.</p>
      <h2>Game mode - "Guess the Breed"</h2>
      <p>In every game <code>round</code>, you have to guess the currect <code>dog breed</code> in given dog image. Feel free to use <code>cheat</code> button to help you have higher chance to target the right answer. <code>Cheat</code> are helpful, but if you rely on it too much, it will make your later rounds become harder, because it will increase the <code>answer options</code> as a punishment in future rounds.</p>
      <h2>Game mode - "Find the Odd One"</h2>
      <p>This <code>game mode</code> is not design yet, I will finished it only if I think I still have time.</p>
      <h2>About "Dog API"</h2>
      <p>This <code>app</code> use a lot of dog images, they all come from <a href="https://dog.ceo/dog-api/">Dog API</a>. I use <code>fetch API</code> to fetch those image in <code>async</code> way. Those image only start to download when every round starts. Also, the <a href="https://dog.ceo/dog-api/breeds-list">breed list</a> is also fetched from this Dog API.</p>
      <h2>About this project</h2>
      <p>This project (<a href="https://github.com/treegb/doggo">Github page</a>) is build with <code>vue.js</code>, a front-end framework, as my learning process, start at around 2019-04-10.</p>
      <h2>About me</h2>
      <p>Nick ID: treegb. <a href="https://treegb.github.io/treegbBlog/">My blog</a>.</p>
    </main>
  </div>
</template>

<script>
  import doggoLogo from "@/components/svg/doggoLogo.vue"

  export default {
    name: 'help',
    components: {
      doggoLogo,
    },
    props: [
      "ifPageIsFocused",
    ],
    data () {
      return {
        ifShowintroAnim: false,
      };
    },
    mounted () {
    },
    watch: {
      ifPageIsFocused (newVal, oldVal) {
        if (newVal === true ) {
          this.ifShowintroAnim = true;
        } else {
          this.ifShowintroAnim = false;
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/introAnim.scss";

  main {
    margin: 0 auto;
    padding: 0 0.5em;
    /* .This "body spacing" (0.5em) setting is already duplicated over multiple places.
     * I just haven't make it config together, but when it relly repeated too much,
     * I of course will try to put a source config in one place so on chage could
     * apply to all. */
    max-width: calc(0.0625em * 800);
  }
  h2 {
    margin-top: 6em;
    margin-bottom: 1.5em;
  }
  code {
    display: inline;
    border: 1px solid var(--clorMain1);
    color: var(--clorMain1);
    padding: calc(0.0625em * 3);
    margin-left: calc(0.0625em * 1);
    margin-right: calc(0.0625em * 1);
    border-radius: calc(0.0625em * 5);
  }
</style>
