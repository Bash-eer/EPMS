import { createApp } from 'vue'
import App from './App.vue'
import store from './store';


// Prime vue
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";


import router from "./router";

// Common components
import Button from "./components/Button.vue";
import TextField from "./components/TextField"
import Avatar from "./components/Avatar"

const app = createApp(App);
app.use(store)
app.use(PrimeVue);
app.use(router)



app.component("ButtonComponent", Button);
app.component("TextFieldComponent", TextField)
app.component("AvatarComponent", Avatar)


app.mount("#app");
