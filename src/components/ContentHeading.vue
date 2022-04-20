<template>
    <div class='bg-white min-h-[85px] w-full py-3'>
        <h1 class="text-4xl pl-9 py-4 content-label">{{label}}</h1>
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
