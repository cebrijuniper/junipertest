<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {useRouter, useRoute} from 'vue-router'
import {ref} from "vue";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    var authenticated = ref(false);
    const login = function () {
      router.push('/login')
    }
    console.log(useRoute().path)

    return {
      authenticated,
      login,
      route
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  background: #f7f7f7;
  font-family: 'Poppins', sans-serif;
}
</style>
