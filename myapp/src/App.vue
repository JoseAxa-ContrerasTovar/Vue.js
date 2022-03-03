<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <span>
        {{ mensaje | suspensivos | mayusculas}}
      </span>
      <hr>
      <span>
        {{ temperatura | aFarenheit}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mensaje: 'Aprende vue.js facilmente',
      temperatura: 30
    }
  },
  filters: {
  mayuscula (mensaje) {
    return mensaje.toUppercase()
  },
  aFarenheit( temperatura ){
    return (9/5 * temperatura) + 32 + 'F';
  }
}
};
</script>

<style></style>
