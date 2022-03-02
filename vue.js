var app = new Vue ({
    el: '#eventos',
    data:{
        contador: 0,
        x: 0,
        y: 0
    },
    methods: {
        alerta: function(mensaje){
            alert(mensaje);
        },
        sumaruno: function(){
            this.contador += 1;
        },
        restaruno: function(){
            this.contador -= 1;
        },
        mostrarUbicacion: function(evento){
            this.x = evento.clientX;
            this.y = evento.clientY;
        },
        sumar: function(cantidad){
            this.contador += cantidad;
        }
    }
})