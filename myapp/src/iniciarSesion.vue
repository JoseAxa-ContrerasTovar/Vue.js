<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <template v-slot:titulo>
          <h3>Iniciar sesión</h3>
        </template>
        
        <template v-slot:elementos>
          <div class="form-group">
            <label for="correo">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              id="correo"
              placeholder="Escribe tu correo electrónico"
            />
          </div>
          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="clave"
              placeholder="Escribe tu contraseña"
            />
          </div>
        </template>

        <template v-slot:default>
          <button class="btn btn-primary">Iniciar sesión</button>
        </template>
      </mostrarFormulario>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from "./mostrarFormulario.vue";
export default {
  components: {
    mostrarFormulario: MostrarFormulario,
  },
  data() {},
  destroyed(){
      console.log('El componente fue destruido')
  },
  activated(){
      console.log('El componente fue activado')
  },
  deactivated(){
      console.log('El componente fue desactivado')
  }
};
</script>

<style></style>
