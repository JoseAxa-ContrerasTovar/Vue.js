<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <template v-slot:titulo>
          <h3>Cambiar contraseña</h3>
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
        </template>

        <template v-slot:default>
          <button class="btn btn-primary">Cambiar contraseña</button>
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
};
</script>

<style></style>