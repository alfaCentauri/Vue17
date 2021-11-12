/* 
    Created on : 12/11/2021, 03:20:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('template-tabs', {
    props: [ 'value' ],
    template: '<div class="text-danger text-justify">{{ value }}</div>'
});

/** Instancia del Vue**/
var vue = new Vue({
    el: '#app',
    data: {
        titulo: 'El titulo',
        mensaje: 'Este es el párrafo del mensaje.'
    },
});
