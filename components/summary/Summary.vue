<template>
  <div>
    <summary-header :summary="summary" />
    <summary-stats :summary="summary" />
    <summary-text :summary="summary" />
  </div>
</template>

<script>
import SummaryHeader from '~/components/summary/SummaryHeader.vue';
import SummaryStats from '~/components/summary/SummaryStats.vue';
import SummaryText from '~/components/summary/SummaryText.vue';

export default {
  props: ['summary'],
  components: {
    SummaryHeader,
    SummaryStats,
    SummaryText
  }
};
</script>
