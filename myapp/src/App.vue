<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary" @click="componenteSeleccionado = 'iniciarSesion'">Iniciar sesión</button>
      <button class="btn btn-primary" @click="componenteSeleccionado = 'cambiarClave'">Cambiar contraseña</button>

      <keep-alive>
        <component :is="componenteSeleccionado"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from "./mostrarFormulario.vue";
import IniciarSesion from "./iniciarSesion.vue";
import CambiarClave from "./cambiarClave.vue";

export default {
  components: {
    mostrarFormulario: MostrarFormulario,
    iniciarSesion: IniciarSesion,
    cambiarClave: CambiarClave
  },
  data() {
    return{
      componenteSeleccionado: 'iniciarSesion'
    }
  },
};
</script>

<style></style>
