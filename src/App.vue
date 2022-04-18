<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div>
    <MainNav />
    <SideBar/>
    <RouterView />
    <div class="clear-both"></div>
  </div>

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body{
    background: #f7f7f7;
    font-family: 'Poppins', sans-serif;
  }
</style>
