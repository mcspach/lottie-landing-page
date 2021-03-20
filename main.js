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
                document.querySelectorAll('.main-btn').forEach(button => {
                    if (button.classList.contains('active-btn')) { 
                    button.classList.remove('active-btn');
                    }
                });
                myEvent.currentTarget.classList.add('active-btn');
            }
        },
    }
});

