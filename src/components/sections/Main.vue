<template lang="pug">
    include ../../tools/mixins.pug
    +b.MAIN.main
        +e.container.container
            +e.button.button(
                v-on:click="$emit('openPopup')"
            ) Послать валентинку
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
