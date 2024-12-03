<template>
  <div class="bg-background-color min-h-screen">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>
