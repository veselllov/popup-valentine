<template lang="pug">
    include ../../tools/mixins.pug
    +b.input(
        :class="[{'focus': focus}]"
    )
        +e.INPUT.value(
            :class="{'error': error}"
            v-model="value.content"
            v-on:focus="onFocus"
            v-on:blur="onBlur"
        )
        +e.placeholder {{ placeholder }}
</template>

<script>

    export default {
        props: {
            placeholder: {
                required: true,
                type: [String,Number]
            },
            value: {
                required: true,
                type: Object
            },
        },
        data() {
            return {
                focus: false
            }
        },
        methods: {
            onFocus() {
                this.focus = !this.focus
            },
            onBlur() {
                if(this.value.content === ''){
                    this.focus = false;
                }
            },
        }
    }
</script>
