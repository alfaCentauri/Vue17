/* 
    Created on : 12/11/2021, 03:20:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('template-tabs', {
    props: [ 'ciudad' ],
    template: '<div v-bind:id="ciudad.nombre" class="tabcontent">'+
              '      <h3>{{ ciudad.nombre }}</h3>'+
              '      <p>{{ ciudad.descripcion }}</p>'+
              '</div>'
});

/** Instancia del Vue**/
var vue = new Vue({
    el: '#app',
    data: {
        lista: [
            { id: 1, nombre: "Londres", descripcion: "Es la capital de Inglaterra." },
            { id: 2, nombre: "Caracas", descripcion: "Es la capital de Venezuela." },
            { id: 3, nombre: "Buenos Aires", descripcion: "Es la capital de Argentina." },
            { id: 4, nombre: "Bogota", descripcion: "Es la capital de Colombia." },
            { id: 5, nombre: "Ciudad de México", descripcion: "Es la capital de México." },
            { id: 6, nombre: "Madrid", descripcion: "Es la capital de España." },
            { id: 7, nombre: "Brasilia", descripcion: "Es la capital de Brasil." }
        ],
        titulo: 'Componentes para crear pestañas.',
        mensaje: 'Este es el párrafo del mensaje.'
    },
    methods: {
        openCity: function(cityName){
            console.log('La ciudad es: ' + cityName); //debug
            this.hidenAll();
            this.removeClassActive();
            this.showCurrentTab(cityName);
        },
        hidenAll: function(){
            var i, tabcontent;
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
        },
        removeClassActive: function(){
            var i, tablinks;
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        },
        showCurrentTab: function(cityName) {
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "block";
            document.getElementById(cityName).className += " active"; //debug
        }
    },
    computed: {
        
    },
    watch: {
    }
});
