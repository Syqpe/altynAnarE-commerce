<template>
    <div v-if="$route.path == '/'">
        <div>
            <!-- Category slider area start -->
            <div class="category-slider-area">
                <div class="category-slider-area__container">
                    <!-- CATEGORY-MENU-LIST START -->
                    <div class="left-category-menu">
                        <div class="left-product-cat">
                            <div class="category-heading">
                                <h2>Категории</h2>
                            </div>
                            <div class="category-menu-list">
                                <ul>
                                    <!-- Single menu start -->
                                    <li
                                        v-for="category in $root.categories"
                                        class="arrow-plus"
                                    >
                                        <a :href="'#' + category.id">{{
                                            category.name
                                        }}</a>
                                        <!--  MEGA MENU START -->

                                        <!-- MEGA MENU END -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- END CATEGORY-MENU-LIST -->
                </div>
            </div>
            <!-- Category slider area End -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            foods: "",
            categories: "[sushi, burger]"
        };
    },
    methods: {},
    mounted() {
        //this.getFoods();
    }
};
</script>
<style scoped lang="scss">
.category-slider-area {
    &__container {
        max-width: 1170px;
        margin: 0 auto;
    }
}
.left-category-menu {
    position: fixed;
    width: 308px;
}
.single-product:hover {
    -webkit-box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
    -moz-box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
    box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
}
@media (max-width: 1130px) {
    .left-category-menu {
        margin-left: 30px;
        width: 240px;
    }
}
@media (max-width: 992px) {
    .category-slider-area {
        display: none;
    }
}
/*.cart-button:hover {*/
/*    background: #e95668 none repeat scroll 0 0;*/
/*    z-index:2147483648;*/
/*    border-radius:25px;*/
/*}*/
</style>
