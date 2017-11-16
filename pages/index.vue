<template>
  <section>
    <article v-if="!isLoading && !formSubmitted" class="dt w-100" style="min-height: 85vh;">
      <div class="dtc v-mid ph3 pv3 pv4-ns ph4-m ph5-l">
          <form @submit.prevent="formSubmit" class="bg-light-green mw7 center pv4 ph3 ph4-ns br2-ns ba b--navy">
            <fieldset class="cf bn ma0 pa0">
              <legend class="pa0 f5 f4-ns fw6 ttu mb3 navy">Enter a URL</legend>
              <div class="cf">
                <label class="clip" for="email-address">URL</label>
                <input v-model="url" class="f6 f5-l input-reset bn fl navy bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="URL" type="text" name="url" id="url">
                <button class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-blue hover-bg-navy white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit">Summarize</button>
              </div>
            </fieldset>
          </form>     
      </div>
    </article>
    <loader v-if="isLoading"/>
    <div v-if="!isLoading && formSubmitted" class="pt5">
      <button @click="newSearch" class="f6 f5-l button-reset dib pa3 tc bn bg-animate bg-blue hover-bg-navy white pointer br2" type="button">New Search</button>          
      <br>
      <article class="pa3 pa5-ns" data-name="slab-stat-small">
        <h3 class="f6 ttu tracked">Stats</h3>
        <div class="cf">
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Total Words</dd>
            <dd class="f3 fw6 ml0">{{ linkData.words }}</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Minutes</dd>
            <dd class="f3 fw6 ml0">{{ linkData.minutes }}</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Difficulty</dd>
            <dd class="f3 fw6 ml0">{{ linkData.difficulty }}</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Sentiment</dd>
            <dd class="f3 fw6 ml0">{{ linkData.sentiment }}</dd>
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
      <code v-if="formSubmitted"><pre style="overflow: hidden; word-wrap: break-word;">{{linkData}}</pre></code>
    </div> 
  </section>
</template>
<script>
import Loader from '~/components/Loader.vue';
import axios from '~/plugins/axios';

export default {
  head() {
    return {
      title: 'Home'
    };
  },
  data() {
    return {
      isLoading: false,
      formSubmitted: false,
      url: '',
      linkData: {}
    };
  },
  methods: {
    async formSubmit() {
      this.isLoading = true;
      this.formSubmitted = true;
      const data = await axios.post('/api/summarize', { url: this.url });
      console.log('data: ', data);
      this.linkData = data.data;
      this.isLoading = false;
    },
    newSearch() {
      this.url = '';
      this.linkData = {};
      this.formSubmitted = false;
    }
  },
  // mounted() {
  //   window.clipboardData.getData('Text');
  // },
  components: {
    Loader
  }
};
</script>

<style scoped>

</style>
