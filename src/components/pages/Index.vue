<template lang="pug">
    include ../../tools/mixins.pug
    div
        main-component(
            @openPopup="togglePopup"
        )
        popup-component(
            :class="{'active': popup.active}"
            @closePopup="togglePopup"
        )

</template>

<script>
    import Popup from '../sections/Popup.vue'
    import Main from '../sections/Main.vue'

    export default {
        data() {
            return {
                popup: {
                    active: false
                }
            };
        },
        components: {
            'main-component': Main,
            'popup-component': Popup,
        },
        methods: {
            togglePopup() {
                this.popup.active = !this.popup.active
            }
        }
    };
</script>