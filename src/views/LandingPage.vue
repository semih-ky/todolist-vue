<template>
  <div class="full-container">
    <section class="section">
      <h1 class="title title-color">Todo List</h1>
      <h2 class="subtitle subtitle-color">Vue - Vuex - Vue Router</h2>
    </section>
    <router-link to="/home">
      <button class="button is-link">Getting Started</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.full-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(75, 75, 75);
  background: linear-gradient(
    343deg,
    rgba(75, 75, 75, 1) 0%,
    rgba(13, 135, 59, 1) 35%,
    rgba(9, 204, 190, 1) 100%
  );
}
.subtitle-color {
  color: whitesmoke !important;
}
.title-color {
  color: white !important;
}
</style>
