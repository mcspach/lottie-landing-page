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
                const allButtons = document.querySelectorAll('.main-btn');
                allButtons.forEach(button => {
                    if (button.classList.contains('active-btn')) { 
                    button.classList.remove('active-btn');
                    }
                });
                myEvent.currentTarget.classList.add('active-btn');
            }
        }
    },
    computed: {
        lottie() {
            if (this.activeID === 'do-btn') { return 'https://images.unsplash.com/photo-1576029343091-06627f7a1900?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }
            if (this.activeID === 'who-btn') { return 'https://assets4.lottiefiles.com/packages/lf20_k0bemiww.json' }
            if (this.activeID === 'start-btn') { return 'https://assets4.lottiefiles.com/packages/lf20_k0bemiww.json' }
            else { return 'https://images.unsplash.com/photo-1576711049764-590aa9bd393c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' }
        },
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
    // }
        // display new Lottie}
  //play lottie or animation to hide previous shown content
  //add active class
  //play lottie animation
  //reveal that div or play that Lottie
