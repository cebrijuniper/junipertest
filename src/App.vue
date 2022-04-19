<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import MainNav from './components/MainNav.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div>
    <LogIn />
    <MainNav />
    <SideBar />
    <RouterView />
    <div class="clear-both"></div>
  </div>

</template>

<style>
  body{
    background: #f7f7f7;
  }
</style>
