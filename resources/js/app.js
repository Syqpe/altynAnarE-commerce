/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import VueRouter from "vue-router";
import VueTheMask from "vue-the-mask";

Vue.use(VueRouter);
Vue.use(VueTheMask);

Vue.component("foods", require("./components/Foods.vue").default);
Vue.component("categories", require("./components/Categories.vue").default);
Vue.component("admin_side", require("./admin/AdminSidebar.vue").default);

import Checkout from "./components/Checkout";
import Foods from "./components/Foods";
import Dashboard from "./admin/Dashboard";

/**example-component
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const routes = [
    {
        path: "/",
        component: Foods
    },
    {
        path: "/checkout",
        component: Checkout
    },
    {
        path: "/dashboard",
        component: Dashboard
    }
];
const router = new VueRouter({
    routes // short for `routes: routes`
});
var pathname = window.location.pathname;
if (document.getElementById("app") !== null) {
    const app = new Vue({
        router,
        el: "#app",
        data: {
            foods: "",
            categories: [
                {
                    id: 1,
                    name: "\u0448\u0430\u0448\u043b\u044b\u043a\u0438",
                    photo_url: "",
                    foods: [
                        {
                            id: 1,
                            name: "\u0444\u0430\u0440\u0448",
                            photo_url:
                                "https://e1.edimdoma.ru/data/recipes/0004/0750/40750-ed4_wide.jpg?1468575183",
                            price: 400,
                            category_id: 1
                        },
                        {
                            id: 3,
                            name: "\u0444\u0430\u0440\u0448",
                            photo_url:
                                "https://e1.edimdoma.ru/data/recipes/0004/0750/40750-ed4_wide.jpg?1468575183",
                            price: 400,
                            category_id: 1
                        },
                        {
                            id: 1,
                            name: "\u0444\u0430\u0440\u0448",
                            photo_url:
                                "https://e1.edimdoma.ru/data/recipes/0004/0750/40750-ed4_wide.jpg?1468575183",
                            price: 400,
                            category_id: 1
                        },
                        {
                            id: 3,
                            name: "\u0444\u0430\u0440\u0448",
                            photo_url:
                                "https://e1.edimdoma.ru/data/recipes/0004/0750/40750-ed4_wide.jpg?1468575183",
                            price: 400,
                            category_id: 1
                        }
                    ]
                },
                {
                    id: 2,
                    name:
                        "\u0432\u0442\u043e\u0440\u044b\u0435 \u0431\u043b\u044e\u0434\u0430",
                    photo_url: "",
                    foods: [
                        {
                            id: 2,
                            name: "\u043a\u0443\u043a\u0441\u0438",
                            photo_url:
                                "https://e1.edimdoma.ru/data/recipes/0004/0750/40750-ed4_wide.jpg?1468575183",
                            price: 500,
                            category_id: 2
                        }
                    ]
                }
            ]
        },
        methods: {
            getFoods() {
                axios
                    .get("/api/get/foods", {
                        params: {}
                    })
                    .then(response => {
                        this.categories = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                return false;
            }
        },
        mounted() {
            this.getFoods();
        }
    });
}

if (document.getElementById("admin") !== null) {
    const app = new Vue({
        router,
        el: "#admin",
        data: {
            foods: "",
            categories: ""
        },
        methods: {
            getFoods() {
                console.log("foods");
                axios
                    .get("/api/get/foods", {
                        params: {}
                    })
                    .then(response => {
                        this.categories = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                return false;
            }
        },
        mounted() {
            this.getFoods();
        }
    });
}
