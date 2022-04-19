<template>
    <div class="grid grid-cols-4 gap-3 grid-main sm:w-1/6">
        <div class="bg-white text-center text-xl" v-for="(grid, i) in gridData" :key="i">
        {{grid}}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DailyDataGrid',
    props: {
        gridData: {
            type: Object,
            default: {
                totalSales: <number>0,
                orderValue: 0,
                submittedOrders: 0,
                unSubmittedOrders: 0
            }
        }
    }
})
</script>

<style scoped>
    .gridItem{
        box-shadow: grey;
        background: #fff;
        min-height: 80px;
        margin-left:20px;
    }
    .grid-main{
        margin-left: 19px;
        margin-top: 20px;
    }
</style>
