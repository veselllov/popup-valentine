<template lang="pug">
    include ../../tools/mixins.pug
    +b.form(
        ref="form"
        :class="{'active': preloader.animate}"
        :style="form.style"
    )
        +e.body(
            v-if="body.show"
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
                )
            +e.BUTTON.button.button(
                v-on:click="goResponse"
            ) {{ button }}
        +e.preloader
            +e.heart
        +e.response(
            ref="resp"
            :style="response.style"
        ) Валентинка уже летит к получателю. Любите друг друга...<br> И ждите...<br> Не смотря ни на что...
</template>

<script>
    import Input from "./Input.vue"

    export default {
        props: {
            title: String,
            button: String,
        },
        data() {
            return {
                form: {
                    style: {
                        height: 'auto'
                    }
                },
                body: {
                    show: true,
                    style: {
                        height: 'auto',
                    }
                },
                preloader: {
                    animate: false,
                },
                response: {
                    show: false,
                    style: {
                        height: 'auto',
                        zIndex: -1,
                        opacity: 0,
                    },
                },
                inputs: [
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Имя',
                        error: false
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Телефон',
                        error: false
                    },
                    {
                        value: {
                            content: ''
                        },
                        placeholder: 'Email',
                        error: false
                    },
                ],
            }
        },
        mounted() {
            this.form.style.height = this.$refs.form.offsetHeight - this.$refs.resp.offsetHeight + 'px'
        },
        computed: {
            popupData() {
                return {
                    name: this.inputs[0].value.content,
                    phone: this.inputs[1].value.content,
                    email: this.inputs[2].value.content,
                }
                console.log('Yeah!')
            }
        },
        methods: {
            goResponse() {
                this.form.style.height = this.$refs.resp.offsetHeight + 'px'
                this.preloaderAnimation()
                this.body.show = false
                setTimeout(this.preloaderAnimation, 2000)
                this.response.show = true
                setTimeout(this.responseStyle, 2500)
                this.clearData()
            },
            preloaderAnimation() {
                this.preloader.animate = !this.preloader.animate
            },
            responseStyle() {
                this.response.style.zIndex = 1
                this.response.style.opacity = 1
            }
        },
        components: {
            'input-component': Input
        }
    }
</script>
