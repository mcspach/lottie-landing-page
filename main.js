//import vue
const app = new Vue({
    el: "#app",
    data() {
        return {
            brand: 'Impact',
            show: true,
            activeID: null
        }
    },
    methods: {
        renderCenter(myEvent) {
            const clickedID = myEvent.target.id;
            if (clickedID !== this.activeID) {
                this.activeID = clickedID;
                console.log(this.lottie, this.activeID);
            }
        }
    },
    computed: {
        lottie() {
            if (this.activeID === 'do-btn') { return 'https://assets3.lottiefiles.com/packages/lf20_gzkwmcoz.json' }
            if (this.activeID === 'who-btn') { return 'https://assets4.lottiefiles.com/packages/lf20_k0bemiww.json' }
            if (this.activeID === 'start-btn') { return 'https://assets4.lottiefiles.com/packages/lf20_k0bemiww.json' }
            else { return 'https://assets4.lottiefiles.com/packages/lf20_k0bemiww.json' }
        }
    }
});

//listen for button click
    // const toggler = document.querySelectorAll('.main-btn');
    // toggler.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //     handleClick(e.target.id);
    //     });
    // });
    // const handleClick = (id) => {
    //     console.log(id);
        //display new Lottie}
  //play lottie or animation to hide previous shown content
  //add active class
  //play lottie animation
  //reveal that div or play that Lottie
