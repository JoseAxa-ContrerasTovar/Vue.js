<template>
  <div id="app" class="container">
    <div class="jumbotron">
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
      tareas: [],
      nuevaTarea:''
    };
  },
  created(){
    this.$http.get('https://tareas-4b193-default-rtdb.firebaseio.com/tareas.json')
    .then(respuesta => {
      return respuesta.json()
    })
    .then(respuestaJSON => {
      for(id in respuestaJSON){
        this.tareas.push(respuestaJSON[id])
      }
    })
  }
};
</script>

<style></style>