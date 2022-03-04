<template>
  <div id="app" class="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Encabezado from "./components/encabezado.vue";
import InicioComponent from './components/inicio.vue'
export default {
  components: {
    encabezado: Encabezado,
    inicioComponent: InicioComponent,
  },
  mounted() {
    console.log(this.$router.getRoutes());
  },
};
</script>

<style></style>
