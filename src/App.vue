<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  setup() {

    const authenticated = ref(false);

    return {
      authenticated,
    }
  }
}
</script>

