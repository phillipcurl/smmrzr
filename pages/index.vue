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
    <div v-if="!isLoading && formSubmitted">
      <app-summary :summary="linkData" />
      <button @click="newSearch" class="f6 f5-l button-reset pa3 tc bn bg-animate bg-blue hover-bg-navy white pointer br2 new-button" type="button">
      <  
      </button>                
      <code v-if="formSubmitted"><pre style="overflow: hidden; word-wrap: break-word;">{{linkData}}</pre></code>
    </div> 
  </section>
</template>
<script>
import Loader from '~/components/Loader.vue';
import AppSummary from '~/components/summary/Summary.vue';
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
    Loader,
    AppSummary
  }
};
</script>

<style scoped>
.new-button {
  position: absolute;
  top: 90px;
  left: 15px;
}
</style>
