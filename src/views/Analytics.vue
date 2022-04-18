<template>
    <ContentHeading :label="label" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ContentHeading from '../components/ContentHeading.vue'

export default defineComponent({
    setup() {
        const label = ref<string>("Analytics");
        return {
            label
        };
    },
    components: { ContentHeading }
})
</script>
