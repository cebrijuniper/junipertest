<template>
    <p :class="classes">
        {{message}}
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WelcomeMessage',
    props: {
        message: {
            type: String,
            default: 'Welcome Back'
        },
        classes: {
            type: String,
            default: ''
        }
    }
})
</script>
