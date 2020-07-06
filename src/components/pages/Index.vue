<template lang="pug">
    include ../../tools/mixins.pug
    div
        main-component(
            @openPopup="openPopup"
        )
        popup-component(
            ref="popup"
            :class="{'active': active}"
            @closePopup="closePopup"
        )
</template>

<script>
    import Main from '../sections/Main.vue'

    import Popup from '../sections/Popup.vue'
    import {popupParentLogic} from "../../mixins/popup/popupParentLogic.js"

    export default {
        mixins: [
            popupParentLogic
        ],
        data() {
            return {
                active: false
            }
        },

        components: {
            'main-component': Main,
            'popup-component': Popup,
        },
    };
</script>