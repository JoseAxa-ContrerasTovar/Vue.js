<template>
  <ul class="list-group">
    <li
      v-for="(tarea, indice) of tareas"
      class="list-group-item"
      :class="{ terminada: tarea.terminada }"
    >
      {{ tarea.texto }}
      <span class="float-end">
        <button
          type="button"
          class="btn btn-success"
          @click="tarea.terminada = !tarea.terminada"
        >
          ✓
        </button>
        <button type="button" class="btn btn-danger" @click="borrar(indice)">
          x
        </button>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tareas"],
  methods: {
    borrar: function (indice) {
      this.tareas.splice(indice, 1);
    },
  },
};
</script>

<style>
.terminada {
  color: gray;
  text-decoration: line-through;
}
</style>
