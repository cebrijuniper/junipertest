<template>
  <div>
    <RouterView/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {RouterView} from 'vue-router'

export default defineComponent({
  setup() {

  },
  components: {
    RouterView,
  }
})
</script>
