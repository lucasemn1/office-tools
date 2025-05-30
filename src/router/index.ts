import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import AppLayout from "../layouts/app.vue";
import PhoneParserPage from "../pages/phone-parser/index.vue";
import CpfAndCnpjParser from "../pages/cpf-and-cnpj-parser/index.vue";

const appRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    redirect: { name: "phone-parser" },
  },
  {
    path: "/phone-parser",
    name: "phone-parser",
    meta: { title: "Formatador de telefone" },
    component: PhoneParserPage,
  },
  {
    path: "/cpf-and-cnpj-parser",
    name: "cpf-and-cnpj-parser",
    meta: {
      title: "Formatador e validador de CPF e CNPJ",
    },
    component: CpfAndCnpjParser,
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    children: appRoutes,
  },
];

export const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to) => {
  document.title = `Office Tools - ${to.meta.title}`;
});
