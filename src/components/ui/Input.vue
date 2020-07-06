<template lang="pug">
    include ../../tools/mixins.pug
    +b.input(
        :class="[{'focus': focus}]"
    )
        +e.INPUT.value(
            ref="value"
            :class="{'error': error}"
            v-model="value.content"
            v-on:focus="onFocus"
            v-on:blur="onBlur"
        )
        +e.placeholder {{ placeholder }}
</template>

<script>

    export default
    {
        props: {
            focus: {
                required: true,
                type: Boolean
            },
            placeholder: {
                required: true,
                type: [String,Number]
            },
            value: {
                required: true,
                type: Object
            },
            error: {
                type: Boolean,
                required: false
            }
        },
        methods: {
            onFocus() {
                if(this.value.content === "") {
                    this.focus = true
                }
            },
            onBlur() {
                if(this.value.content === "") {
                    this.focus = false
                }
            },
        }
    }
</script>
