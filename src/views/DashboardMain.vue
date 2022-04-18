<template>
    <ContentHeading :label="label" />
    <WelcomeMessage :classes="classes"/>
    <daily-data-grid />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ContentHeading from '../components/ContentHeading.vue'
import WelcomeMessage from '@/components/dashboard/WelcomeMessage.vue';
import DailyDataGrid from '@/components/dashboard/DailyDataGrid.vue';

export default defineComponent({
    name: "DashboardMain",
    setup() {
        const label = ref<string>("Dashboard");
        const classes = ref<string>("pt-8 text-lg font-semibold pl-9")
        return {
            label,
            classes
        };
    },
    components: { ContentHeading, WelcomeMessage, DailyDataGrid }
})
</script>
