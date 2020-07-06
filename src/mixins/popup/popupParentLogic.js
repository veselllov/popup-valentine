export const popupParentLogic = {
    methods: {
        openPopup() {
            this.active = !this.active
        },

        closePopup() {
            this.active = !this.active
            setTimeout(this.$refs.popup.clearData(), 500) //RIGHT! SADAMAZA?
        },
    },
}