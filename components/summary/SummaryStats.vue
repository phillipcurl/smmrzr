<template>
  <article class="pv3 ph3 ph4-m ph5-l">
    <h3 class="f6 ttu tracked">Stats</h3>
    <div class="cf">
      <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
        <dd class="f6 fw4 ml0">Total Words</dd>
        <dd class="f3 fw6 ml0">{{ summary.words }}</dd>
      </dl>
      <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
        <dd class="f6 fw4 ml0">Minutes</dd>
        <dd class="f3 fw6 ml0">{{ summary.minutes }}</dd>
      </dl>
      <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
        <dd class="f6 fw4 ml0">Difficulty</dd>
        <dd class="f3 fw6 ml0">{{ roundTo(summary.difficulty, 5) * 100 }}%</dd>
      </dl>
      <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
        <dd class="f6 fw4 ml0">Sentiment</dd>
        <dd class="f3 fw6 ml0">{{ roundTo(summary.sentiment, 5) }}</dd>
      </dl>
      <!-- <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
        <dd class="f6 fw4 ml0">Favorite Cat</dd>
        <dd class="f3 fw6 ml0">All of Them</dd>
      </dl>
      <dl class="fl fn-l w-50 dib-l w-auto-l lh-title">
        <dd class="f6 fw4 ml0">App Downloads</dd>
        <dd class="f3 fw6 ml0">1,200</dd>
      </dl> -->
    </div>
  </article>
</template>

<script>
export default {
  props: ['summary'],
  methods: {
    roundTo(n, digits) {
      var negative = false;
      if (digits === undefined) {
        digits = 0;
      }
      if (n < 0) {
        negative = true;
        n = n * -1;
      }
      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      n = (Math.round(n) / multiplicator).toFixed(2);
      if (negative) {
        n = (n * -1).toFixed(2);
      }
      return n;
    }
  }
};
</script>

<style>

</style>
