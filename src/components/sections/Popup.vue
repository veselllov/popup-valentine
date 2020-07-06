<template lang="pug">
    include ../../tools/mixins.pug
    +b.popup(
        :class="{'active': active}"
    )
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
        props: {
            active: {
                type: Boolean
            }
        },
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
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Телефон',
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Email',
                    },
                ],
            }
        },
        // mounted() {
        //     for(let item of Object.values(this.inputs)) {
        //         item.focus = false
        //     }
        // },
        // watch: {
        //     load() {
        //         for(let item of Object.values(this.inputs)) {
        //             item.focus = true
        //         }
        //     },
        //
        //     send() {
        //         for(let item of Object.values(this.inputs)) {
        //             item.focus = false
        //         }
        //     }
        // },
        components: {
            'form-component': Form
        }
    }
</script>
