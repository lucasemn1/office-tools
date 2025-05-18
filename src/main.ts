import "./styles/index.scss";

import App from "./app.vue";
import { router } from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

import {
  IoCopy,
  BiLinkedin,
  BiGithub,
  BiSunFill,
  BiMoonStarsFill,
} from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(IoCopy, BiLinkedin, BiGithub, BiSunFill, BiMoonStarsFill);

createApp(App)
  .use(router)
  .use(createPinia())
  .component("v-icon", OhVueIcon)
  .mount("#app");
