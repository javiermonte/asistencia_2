
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import Bitacora from "../components/Bitacora.vue"
import Aprendiz from "../components/Aprendices.vue"
import Ficha from "../components/Ficha.vue"
import Usuario from "../components/Usuario.vue"
import InicioMain from "../components/InicioMain.vue"
import Password from "../components/Password.vue"
import Asistencia from "../components/Asistencia.vue"
// import Main from "../components/Main.vue"
// import Informes from "../components/Informes.vue"


import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    { path: "/", component: Login },

    {
        path: "/Home", component: Home, children: [
            { path: "", redirect: "/Home/InicioMain" },
            { path: "InicioMain", component: InicioMain },
            { path: "Bitacora", component: Bitacora },
            { path: "Aprendiz", component: Aprendiz },
            { path: "Ficha", component: Ficha },
            { path: "Usuario", component: Usuario}, 
            // { path: "Informes", component: Informes}, 
           
                 
        ]
    },
    // {path:"/", component:Main},
    {path:"/Password", component: Password},
    {path: "/Asistencia", component: Asistencia}

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})