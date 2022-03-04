import { createRouter, createWebHistory } from "vue-router";
import InicioComponent from "../components/inicio.vue";
import UsuarioComponent from "../components/usuarios.vue";
import InfoUsuario from "../components/infoUsuario.vue";

/*const UsuarioComponent = resolve =>{
  require.ensure(["../components/usuarios.vue"], () =>{
    resolve(require("../components/usuarios.vue"));
  })
};*/

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioComponent,
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: UsuarioComponent,
  } ,
  {
    path: "/usuarios/:id",
    name: "id",
    component: InfoUsuario,
  },
  {
    path: "/users",
    redirect: "/usuarios"
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
  /*
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" '../views/About.vue')
      }*/,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
