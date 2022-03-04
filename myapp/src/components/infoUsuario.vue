<template>
  <div>
    <h3>Info del usuario</h3>
    <div>
      <p><strong>Nombre: </strong> {{ nombre }}</p>
      <p><strong>Email: </strong> {{ email }}</p>
    </div>
    <button class="btn btn-success" @click="volver">Volver</button>
  </div>
</template>

<script>
export default {
    data() {
        return{
            nombre: '',
            email: '',
            id:''
        }
    },
    methods:{
        volver(){
            this.$router.push({name: 'usuarios'})
        }
    },
    created(){
        let id = this.$route.params.id;
        axios
            .get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => {
                this.nombre = response.data.name;
                this.email = response.data.email;
            })
    }
}
</script>