<template>
  <div class="ph3 ph4-m ph5-l">
    <input class="tgl tgl-light" id="cb1" type="checkbox" v-model="showFullText"/>
    <label class="tgl-btn" for="cb1"></label>
    <p v-if="!showFullText" class="measure-wide lh-copy" v-html="formatSummary(summary.summary.text)"></p>
    <p v-if="showFullText" class="measure-wide lh-copy" v-html="formatText(summary.text)"></p>
  </div>
</template>

<script>
export default {
  props: ['summary'],
  data() {
    return {
      showFullText: false
    };
  },
  methods: {
    formatText(str) {
      return str.replace(/\n/g, '<br />');
    },
    formatSummary(str) {
      return str.replace(/\n/g, '<br /><br />');
    }
  }
};
</script>

<style scoped>
.tgl {
  display: none;
}
.tgl,
.tgl:after,
.tgl:before,
.tgl *,
.tgl *:after,
.tgl *:before,
.tgl + .tgl-btn {
  box-sizing: border-box;
}
.tgl::-moz-selection,
.tgl:after::-moz-selection,
.tgl:before::-moz-selection,
.tgl *::-moz-selection,
.tgl *:after::-moz-selection,
.tgl *:before::-moz-selection,
.tgl + .tgl-btn::-moz-selection {
  background: none;
}
.tgl::selection,
.tgl:after::selection,
.tgl:before::selection,
.tgl *::selection,
.tgl *:after::selection,
.tgl *:before::selection,
.tgl + .tgl-btn::selection {
  background: none;
}
.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.tgl + .tgl-btn:after,
.tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
}
.tgl + .tgl-btn:after {
  left: 0;
}
.tgl + .tgl-btn:before {
  display: none;
}
.tgl:checked + .tgl-btn:after {
  left: 50%;
}

.tgl-light + .tgl-btn {
  background: #f0f0f0;
  border-radius: 2em;
  padding: 2px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.tgl-light + .tgl-btn:after {
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.tgl-light:checked + .tgl-btn {
  background: #9fd6ae;
}
</style>
