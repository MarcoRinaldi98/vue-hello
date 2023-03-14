/*
    JAVASCRIPT
*/

const { createApp } = Vue

createApp(
    {
        data() {
            return {
                message: 'BUONGIORNO !',
                image: 'img/lion.jpg',
                color: 'text-primary',
                icon: 'fa-solid fa-sun'
            }          
        },
        methods: {
            changeColor() {
                if (this.color == 'text-primary') {
                    this.color = 'text-warning';
                } else {
                    this.color = 'text-primary';
                }
            }
        }
    }
).mount('#app')