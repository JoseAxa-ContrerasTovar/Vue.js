<template>
    <div>
        <h2>{{tituloMayusculas()}}</h2>
        <h4>Tareas por hacer: {{numTareas}}</h4>
    </div>
</template>

<script>
export default {
    props: ['titulo'],
    data(){
        return {
            numTareas: 0
        }
    },
    methods: {
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        }
    },
}
</script>