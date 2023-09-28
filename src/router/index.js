// import { createRouter, createWebHistory } from 'vue-router'
// import axios from 'axios'
// import Main from '../views/Main.vue'


// const routes = [
//   {
//     path: '/',
//     name: 'Main',
//     component: Main,
//     meta: { guest: true },
//   },
// ]
// console.log(process.env.BASE_URL)
// const router = createRouter({
//   mode: "history",
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
// router.beforeEach((to, from, next) => {
//   if (to.name === 'Home') {
//     let authData = Telegram.WebApp.initData || "";

//     axios.post(process.env.BACKEND_URL + "/check", {
//       _auth: authData
//     }).then(e => {
//       if (e.data.register)
//         return next({ name: 'Registration' })
//       else next()
//     }).catch(c => {
//       alert(c)
//     })

//   }
//   else next()
// })

// export default router