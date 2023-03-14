/*
    JAVASCRIPT
*/

const { createApp } = Vue

createApp(
    {
        data() {
            return {
                message: 'BUONGIORNO !'
            }          
        }
    }
).mount('#app')