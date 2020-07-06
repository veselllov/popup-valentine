export const popup = {
    methods: {


        sendForm() { // SEND - TRUE....
            console.log('SEND!')
            if(this.validate()) {
                this.load = true
                setTimeout(() => {
                    //console.log(this.form.style.height, this.$refs.resp.offsetHeight + 'px')
                    //RIGHT! SADAMAZA! this.$refs.form.form.style.height = this.$refs.form.$refs.resp.offsetHeight + 'px'
                    this.load = false
                    this.send = true
                    this.clearInputs()
                }, 2500)
            }
        },

        validate() {
            let validated = true;
            for(let item of Object.values(this.inputs)) {
                if(item.value.content === '') {
                    validated = false
                    item.error = true
                } else {
                    item.error = false
                }
            }
            return validated
        },

        clearInputs() {
            for(let item of Object.values(this.inputs)) {
                item.value.content = ''
                item.error = false
            }
        },

        clearData() {
            this.send = false
            console.log('clearData')
        },

        // backToPage() {
        //     //this.$parent.$emit('closePopup')
        //     this.$emit('closePopup')
        //     this.clearPopup()
        //     setTimeout(this.clearData, 500)
        // },

        // sendData() {
        //     if(this.validate()) {
        //         this.toggleLoadingForm()
        //         setTimeout(() => {
        //             this.sendForm()
        //         }, 2500)
        //
        //     }
        // }, // НЕ ДЕЛАЙ ДВА СЕТТАЙМАУТА, ЕСЛИ МОЖНО СДЕЛАТЬ ОДИН

        // ЗАТЕМ КЛИР ВСЕХ ИНПУТОВ
        // ИДЕАЛЬНАЯ ФУНКЦИЯ - ВЫПОЛНЯЕТ ТОЛЬКО ТО, (КАК НАЗЫВАЕТСЯ)

// SEND и CLOSE, оторые эмитят с верха
    }
};

// import {handlerOnEsc} from '../../mixins/utility/handlerOnEsc';
// import { disablePageScroll, enablePageScroll } from 'scroll-lock';
// export const popup = {
//     mixins: [
//         handlerOnEsc
//     ],
//
//     props: {
//         active: true,
//         type: Boolean
//     },
//
//     methods:{
//         onKeyDown(e){
//             this.handlerOnEsc(this.closePopup,e);
//         },
//         closePopup(){
//             this.$emit('close');
//         }
//     },
//
//     watch: {
//         active(newValue){
//             if(newValue) {
//                 document.addEventListener('keydown', this.onKeyDown);
//                 disablePageScroll(this.$refs.popup);
//             } else {
//                 document.removeEventListener('keydown', this.onKeyDown);
//                 enablePageScroll();
//             }
//         }
//     }
// };



