<script setup>
import HeaderComp from './components/Template/HeaderComp.vue';
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: auto;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}

main {
  min-height: 70%;
}

a{
  color: inherit;
  text-decoration: none;
}
</style>