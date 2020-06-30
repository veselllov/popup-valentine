<template lang="pug">
    include ../../tools/mixins.pug
    +b.popup
        +e.wrapper
            +e.BUTTON.close(
                v-on:click="$emit('closePopup')"
            )
            +e.FORM-COMPONENT.form(
                :title="'Послать валентинку'"
                :button="'Отправить 🤍'"
            )
</template>

<script>
    import Form from "../ui/Form.vue"

    export default {
        data() {
            return {}
        },
        methods: {
            sendData() {
                console.log('SEND!')
            }
        },
        components: {
            'form-component': Form
        }
    }
</script>
