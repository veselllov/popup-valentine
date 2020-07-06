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
                :buttonResponse="'Вернуться на главную 🤍'"
                :inputs="inputs"
                :load="load",
                :send="send",
                @closePopup="$emit('closePopup')"
                @sendForm="sendForm"
            )


</template>

<script>
    import Form from "../ui/Form.vue"
    import {popup} from "../../mixins/popup/popup.js"

    export default {
        mixins: [popup],
        data() {
            return {
                load: false,
                send: false,
                inputs: [
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Имя',
                        error: false,
                        focus: Boolean,
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Телефон',
                        error: false,
                        focus: Boolean,
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Email',
                        error: false,
                        focus: Boolean,
                    },
                ],
            }
        },
        components: {
            'form-component': Form
        }
    }
</script>
