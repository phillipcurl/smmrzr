<template>
  <article class="ph3 ph4-m ph5-l pt4 pb5 bb b--black-10 black-70">
    <h1 class="link b f3 f2-ns dim black-70 lh-title">{{ summary.title }}</h1>
    <p class="f6 db b ttu lh-solid">{{ summary.author[0] }}</p>
    <p class="f6 db b lh-solid">© {{ summary.copyright }}</p>      
    <p class="f6 db b lh-solid">{{ summary.date }}</p>
    <!-- <div class="mt5">
      <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
      <a href="/terms/" title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
      <a href="/privacy/" title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
    </div> -->
  </article>
</template>

<script>
export default {
  props: ['summary']
};
</script>

<style>

</style>
