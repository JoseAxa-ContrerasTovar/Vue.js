var app = new Vue ({
    el: '#vm',
    data:{
        texto: '<em><strong>¡Bienvenido!<strong/><em/>',
        imagen: 'https://loremflickr.com/300/200',
        mostrar: false,
        parrafo: 3,        
        paises: [
            {nombre: 'México'}, {nombre: 'España'}, {nombre: 'Colombia'}
        ],
        empleado:{
            nombre: 'Axa Contreras',
            edad: '23 años',
            nacionalidad: 'Mexicana',
            profesión: 'Programador',
            empresa: 'CCEO',
            telefono: '4494486724'
        }
    }
})