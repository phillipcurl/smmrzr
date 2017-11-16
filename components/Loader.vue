<template>
  <article class="vh-100 dt w-100">
    <div class="dtc v-mid tc ph3 ph4-l">
      <div class="loader"></div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
.loader {
  width: 60px;
  height: 60px;
  border: 1px black solid;
  border-radius: 50%;
  -webkit-animation: rotation 1s ease-in-out infinite;
  -moz-animation: rotation 1s ease-in-out infinite;
  animation: rotation 1s ease-in-out infinite;
  margin: 60px auto;
}
.loader:after {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
  position: absolute;
  content: '';
}
@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotation {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
