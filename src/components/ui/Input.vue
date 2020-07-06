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
        data() {
            return {
                focus: false,
            }
        },
        // mounted() {
        //     this.focus = false
        // },
        methods: {
            onFocus() {
                if(this.value.content === "") {
                    this.focus = true;
                }
            },
            onBlur() {
                if(this.value.content === ''){
                    this.focus = false;
                }
            },
        },
        watch: {
            'value.content': function(value){
                this.onBlur()
            }
        }
    }
</script>
