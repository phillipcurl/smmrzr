<template>
  <section>
    <article class="dt w-100" style="min-height: 85vh;">
      <div class="dtc v-mid pa3 pa4-l">
        <div :class="{'animated fadeOut': formSubmitted}" :style="formSubmitted ? 'visibility: hidden' : 'visibility: visible'">
          <form @submit.prevent="formSubmit" class="bg-light-green mw7 center pa4 br2-ns ba b--navy">
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
      </div>
    </article>
    <!-- <img src="~assets/img/NuxtMicro.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}" class="button">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul> -->
  </section>
</template>
<script>
import axios from '~/plugins/axios';

export default {
  data() {
    return {
      isLoading: false,
      formSubmitted: false,
      url: '',
      linkData: {},
      users: []
    };
  },
  async asyncData() {
    const { data } = await axios.get('/api/users');
    return { users: data };
  },
  head() {
    return {
      title: 'Users'
    };
  },
  methods: {
    formSubmit() {
      this.isLoading = true;
      axios.post('/api/summarize', { url: this.url }).then(data => {
        console.log('data: ', data);
        this.linkData = data.data;
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped>

</style>
