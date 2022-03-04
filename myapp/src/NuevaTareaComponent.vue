<template>
  <div class="input-group">
    <input
      type="text"
      placeholder="Escribe una nueva tarea"
      v-model="nuevaTarea"
      class="form-control"
      @keyup.enter="agregarTarea"
    />
    <span class="input-group-btn">
      <button type="button" @click="agregarTarea" class="btn btn-primary">
        Agregar
      </button>
    </span>
  </div>
</template>

<script>
import VueResources from 'vue-resource'
export default {
  data() {
    return {
      nuevaTarea: "",
    };
  },
  props: ["tareas"],
  methods: {
    agregarTarea() {
      var texto = this.nuevaTarea.trim();
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false,
        });
      }
      this.nuevaTarea = "";
      this.$http.post('https://tareas-4b193-default-rtdb.firebaseio.com/tareas.json',{
        texto: texto,
        terminada: false
      }).then(respuesta => console.log(respuesta));
    },
  },
};
</script>
