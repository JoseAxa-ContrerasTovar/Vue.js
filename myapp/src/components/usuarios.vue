<template>
  <div>
    <p>Lista de Usuarios</p>
    <ul class="list-group">
        <router-link tag="li" :to="{name: 'id', params: {id: usuario.id}}" class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
            {{usuario.name}}
        </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default{
    data(){
        return {
            usuarios: {},
            id: this.$route.params.id
        }
    },
    created(){
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.usuarios = response.data;
            })
    }
}
</script>
