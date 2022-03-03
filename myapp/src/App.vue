<template>
  <div class="container">
    <div class="jumbotron">
      <span v-decorar:grande.italico.negrilla="{familia: 'helvetica', color: 'red'}">Aprende Vue.js 2 fácilmente</span>
    </div>
  </div>
</template>

<script setup>

const vDecorar = {
  mounted: (el, binding) => {
    el.style.fontFamily = binding.value.familia
    el.style.color = binding.value.color

    if(binding.arg == 'grande'){
      el.style.fontSize = '50px'
    }

    if(binding.arg == 'chico'){
      el.style.fontSize = '10px'
    }

    if(binding.modifiers['negrilla']){
      el.style.fontWeight = 'bold'
    }

    if(binding.modifiers['italico']){
      el.style.fontStyle = 'italic'
    }
  }
}
</script>

<style></style>