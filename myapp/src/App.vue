<template>
  <div id="app" class="container">
    <div class="card-body">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas" :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from "./TituloComponent.vue";
import NuevaTarea from "./NuevaTareaComponent.vue";
import ListaTareas from "./ListaTareasComponents.vue";

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo: "*Mi lista de tareas*",
      tareas: [
        {
          texto: "Aprender vue.js",
          terminada: false,
        },
        {
          texto: "Aprender Angular 2",
          terminada: false,
        },
        {
          texto: "Aprender Ionic 2",
          terminada: false,
        },
      ],
    };
  },
  methods:{
    actualizarContador(){
      this.numTareas++
    }
  }
};
</script>

<style></style>
