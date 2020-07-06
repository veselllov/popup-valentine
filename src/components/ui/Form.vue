<template lang="pug">
    include ../../tools/mixins.pug
    +b.form(
        ref="form"
        :class="{'loading': load, 'send': send}"
        :style="form.style"
    )
        +e.body(
            ref="body"
            :style="body.style"
        )
            +e.title {{ title }}
            +e.line(
                v-for="input in inputs"
            )
                +e.INPUT-COMPONENT.input(
                    :value="input.value"
                    :placeholder="input.placeholder"
                    :error="input.error"
                )
            +e.BUTTON.button.button(
                v-on:click="$emit('sendForm')"
            ) {{ button }}
        +e.preloader
            +e.spinner
        +e.response(
            ref="resp"
            :style="response.style"
        )
            +e.text--response Валентинка уже летит к получателю. Любите друг друга...<br> И ждите...<br> Не смотря ни на что...
            +e.BUTTON.button.button(
                v-on:click="$emit('closePopup')"
            ) {{ buttonResponse }}
</template>

<script>
    import Input from "./Input.vue"

    export default {
        props: {
            title: String,
            button: String,
            buttonResponse: String,
            load: Boolean,
            send: Boolean,
            inputs: Array
        },
        data() {
            return {
                form: {
                    style: {
                        height: 'auto'
                    }
                },
                body: {
                    style: {
                        height: 'auto',
                    }
                },
                response: {
                    style: {
                        height: 'auto',
                    },
                },
            }
        },
        mounted() {
            this.form.style.height = this.$refs.form.offsetHeight + 'px'

            // this.form.style.height = this.$refs.form.offsetHeight - this.$refs.resp.offsetHeight + 'px'  // Ну никак не в миксине, здесь лежит

            // this.body.style.height = this.$refs.body.offsetHeight + 'px'
            //
            // this.response.style.height = this.$refs.resp.offsetHeight + 'px'

        },
        watch: {
            send() {
                this.form.style.height = this.$refs.resp.offsetHeight + 'px'
                if(!this.send) {
                    this.form.style.height = this.$refs.body.offsetHeight + 'px'
                }
            }
        },
        components: {
            'input-component': Input
        }
    }
</script>
