<template>
  <div class="h-screen w-screen flex flex-col">
    <MainNav/>
    <div class="h-full w-full flex flex-row">
      <SideBar/>
      <div class="float-left pb-4 w-full">
        <div>
          <ContentView />
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
  </div>
</template>

<script setup lang="ts">
import ContentView from "@/components/ContentView.vue";
import MainNav from "@/components/MainNav.vue";
import SideBar from "@/components/SideBar.vue";

</script>

<style scoped>

</style>