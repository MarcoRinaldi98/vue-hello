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
                color: 'text-primary'
            }          
        }
    }
).mount('#app')