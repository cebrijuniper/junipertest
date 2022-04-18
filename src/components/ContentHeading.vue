<template>
    <div class='bg-white min-h-[85px]'>
        <h1 class="text-4xl pl-9 py-4">{{label}}</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ContentHeading',
    props: {
        label: {
            type:String,
            default: ''
        }
    }
})
</script>
