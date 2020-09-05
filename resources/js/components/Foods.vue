<template>
    <div v-if="$route.path == '/'" class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 hidden-sm"></div>
            <div class="col-lg-9 col-md-9 col-sm-12">
                <div class="col-md-12">
                    <!-- slider -->
                    <div class="slider-area">
                        <div class="bend niceties preview-1">
                            <div id="ensign-nivoslider" class="slides">
                                <img
                                    style="width:100%"
                                    src="https://aktau.vashi-sushi.kz/images/besplatnaya-dostavka-1-site.jpg"
                                    alt="AltynAnar"
                                    title="#slider-direction-1"
                                />
                            </div>
                            <!-- direction 1 -->
                        </div>
                    </div>
                    <!-- slider end-->
                </div>
                <div class="col-md-12" v-for="category in $root.categories">
                    <div class="row" :id="category.id" v-if="category.foods.length">
                        <div class="col-xs-12 col-md-12">
                            <!-- Start Product-Menu -->
                            <div class="product-menu">
                                <div class="product-title">
                                    <h3 class="title-group-2 gfont-1">
                                        {{ category.name }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="product carosel-navigation">
                                <div class="tab-content">
                                    <!-- Product = display-1-1 -->
                                    <div role="tabpanel" class="tab-pane fade in active" id="display-1-1">
                                            <div class="active-product-carosel">
                                                <!-- Start Single-Product -->
                                                    <div class="single-product" v-for="food in category.foods">
                                                        <!--                                                        <div class="label_new">&#45;&#45;}}-->
                                                        <!--                                                            <span class="new">new</span>&#45;&#45;}}-->
                                                        <!--                                                        </div>&#45;&#45;}}-->
                                                        <!--                                                        <div class="sale-off">&#45;&#45;}}-->
                                                        <!--                                                            <span class="sale-percent">-55%</span>&#45;&#45;}}-->
                                                        <!--                                                        </div>&#45;&#45;}}-->
                                                        <div class="product-img" >
                                                            <img class="primary-img" :src="food.photo_url" alt="Product"/>
                                                            <!--                                                <img class="secondary-img" src="img/product/mediam/12bg.jpg" alt="Product">-->
                                                        </div>
                                                        <div class="product__desc">
                                                            <a href="#"><p>{{
                                                                food.name
                                                            }} asdasd dasd dasd as das dsadadas das dsad dsa das dsa dsa dsad sadsad sad ad sa dsa  </p></a>
                                                        </div>
                                                        <div class="price-box" style>
                                                            <span class="price" style="margin-top: 5px;color: #0b0b0b"
                                                                >{{
                                                                    food.price
                                                                }}
                                                                тг</span >
                                                            <!--                                                <span class="old-price">$120.00</span>-->
                                                            <div class="product-button">
                                                                <button
                                                                    style="width:95%"
                                                                    @click="
                                                                        addCart(
                                                                            food
                                                                        )
                                                                    "
                                                                >
                                                                    Заказать
                                                                    сейчас
                                                                    <i
                                                                        class="fa fa-shopping-cart"
                                                                    ></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <!--                                            <span class="rating">-->
                                                        <!--																		<i class="fa fa-star"></i>-->
                                                        <!--																		<i class="fa fa-star"></i>-->
                                                        <!--																		<i class="fa fa-star"></i>-->
                                                        <!--																		<i class="fa fa-star"></i>-->
                                                        <!--																		<i class="fa fa-star-o"></i>-->
                                                        <!--																	</span>-->
                                                    </div>
                                                    <div class="row mt-2 mb-2">
                                                        <div
                                                            class="col-md-10"
                                                        ></div>
                                                        <div
                                                            class="col-md-2 text-left"
                                                        >
                                                            <div
                                                                style
                                                                class="modal fade"
                                                                id="cart"
                                                            >
                                                                <div
                                                                    class="modal-dialog modal-dialog-centered modal-lg"
                                                                >
                                                                    <div
                                                                        class="modal-content"
                                                                    >
                                                                        <div
                                                                            class="modal-header"
                                                                        >
                                                                            <h5
                                                                                class="modal-title"
                                                                            >
                                                                                Корзина
                                                                            </h5>
                                                                            <button
                                                                                style="margin-top:-20px"
                                                                                class="close"
                                                                                data-dismiss="modal"
                                                                            >
                                                                                &times;
                                                                            </button>
                                                                        </div>
                                                                        <div
                                                                            class="modal-body"
                                                                        >
                                                                            <table
                                                                                class="table table-striped text-left"
                                                                            >
                                                                                <tbody>
                                                                                    <tr
                                                                                        v-for="(cart,
                                                                                        n) in carts"
                                                                                        v-bind:key="
                                                                                            cart.id
                                                                                        "
                                                                                    >
                                                                                        <td>
                                                                                            <img
                                                                                                style="width: 100px;height:70px"
                                                                                                class="img-responsive"
                                                                                                :src="
                                                                                                    cart.photo_url
                                                                                                "
                                                                                            />
                                                                                        </td>
                                                                                        <td>
                                                                                            {{
                                                                                                cart.name
                                                                                            }}
                                                                                        </td>
                                                                                        <td>
                                                                                            {{
                                                                                                cart.price
                                                                                            }}
                                                                                            тг
                                                                                        </td>
                                                                                        <td
                                                                                        >
                                                                                            <div
                                                                                                class="text_bottom"
                                                                                                style="margin-top:0px"
                                                                                            >
                                                                                                <button
                                                                                                    class="down_count btn btn-info"
                                                                                                    v-on:click="
                                                                                                        substruct(
                                                                                                            cart
                                                                                                        )
                                                                                                    "
                                                                                                    style="background-color:rgba(210, 46, 81, 0.3);border-color:rgba(210, 46, 81, 0.3)"
                                                                                                >
                                                                                                    <i
                                                                                                        class="fa fa-minus"
                                                                                                    ></i>
                                                                                                </button>
                                                                                                <input
                                                                                                    class="counter"
                                                                                                    type="number"
                                                                                                    v-model="
                                                                                                        cart.amount
                                                                                                    "
                                                                                                    @change="
                                                                                                        changeAmount(
                                                                                                            cart
                                                                                                        )
                                                                                                    "
                                                                                                />
                                                                                                <button
                                                                                                    class="up_count btn btn-info"
                                                                                                    v-on:click="
                                                                                                        increase(
                                                                                                            cart
                                                                                                        )
                                                                                                    "
                                                                                                    style="background-color:rgba(210, 46, 81, 0.3);border-color:rgba(210, 46, 81, 0.3)"
                                                                                                >
                                                                                                    <i
                                                                                                        class="fa fa-plus"
                                                                                                    ></i>
                                                                                                </button>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td
                                                                                            width="60"
                                                                                        >
                                                                                            <button
                                                                                                @click="
                                                                                                    removeCart(
                                                                                                        cart
                                                                                                    )
                                                                                                "
                                                                                                class="btn btn-danger btn-sm"
                                                                                            >
                                                                                                <i
                                                                                                    class="fa fa-close"
                                                                                                ></i>
                                                                                            </button>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div
                                                                            class="modal-footer"
                                                                        >
                                                                            Общая
                                                                            Сумма:{{
                                                                                totalprice
                                                                            }}
                                                                            тг
                                                                            &nbsp;
                                                                            <button
                                                                                data-dismiss="modal"
                                                                                style="background: repeating-linear-gradient( -45deg, #a53b33 22px, rgba(0, 0, 0, 0) 48% );
    background-color: #d22e51; border-color: #e95668"
                                                                                @click="
                                                                                    makeOrder()
                                                                                "
                                                                                class="btn btn-primary"
                                                                            >
                                                                                Оформить
                                                                                заказ
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cart-button" style="border-radius:25px;position: fixed; z-index: 2147483647; display: block; bottom: 35px;height: 54px;right: 20px;transition: all 0.3s ease-in-out 0s;width: 54px;" >
                                                        <button
                                                            id="scrollUp"
                                                            style="border-color:#e95668;position: fixed; z-index: 2147483647; display: block;border-radius: 25px;background: repeating-linear-gradient( -45deg, #a53b33 22px, rgba(0, 0, 0, 0) 48% );
    background-color: #d22e51;"
                                                            class="btn btn-primary"
                                                            data-toggle="modal"
                                                            data-target="#cart"
                                                        >
                                                            <img
                                                                src="img/cart.png"
                                                                alt="shopping cart"
                                                            />
                                                        </button>
                                                        <div
                                                            style="position: fixed; z-index: 2147483647; display: block;margin-top:4px;color: white; border-radius: 25px;width: 15px;height:15px;margin-left:35px;text-align: center"
                                                        >
                                                            {{ total_amount }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            foods: "",
            categories: "",
            carts: [],
            cartadd: {
                id: "",
                name: "",
                amount: "",
                price: "",
                photo_url: ""
            },
            badge: "0",
            quantity: "1",
            totalprice: "0",
            total_amount: 0
        };
    },
    methods: {
        makeOrder() {
            this.$router.push({ path: "checkout" });
        },
        substruct(cart) {
            if (cart.amount !== 0) {
                cart.amount--;
            }
            this.changeAmount(cart);
        },
        increase(cart) {
            cart.amount++;
            this.changeAmount(cart);
        },
        changeAmount(pro) {
            pro.amount = parseInt(pro.amount);
            this.totalprice = this.carts.reduce((total, item) => {
                return total + item.amount * item.price;
            }, 0);
            this.storeCart();
        },
        viewCart() {
            console.log("Asd");
            if (localStorage.getItem("carts")) {
                this.carts = JSON.parse(localStorage.getItem("carts"));
                this.total_amount = this.carts.reduce((total, item) => {
                    return total + item.amount;
                }, 0);
                this.totalprice = this.carts.reduce((total, item) => {
                    return total + item.amount * item.price;
                }, 0);
            }
        },
        addCart(pro) {
            let ind;
            let x = 0;
            for (ind in this.carts) {
                if (this.carts[ind].id === pro.id) {
                    this.carts[ind].amount++;

                    x = 1;
                }
            }
            if (x === 0) {
                console.log(x);
                pro.amount = 1;
                this.cartadd.id = pro.id;
                this.cartadd.name = pro.name;
                this.cartadd.price = pro.price;
                this.cartadd.amount = pro.amount;
                this.cartadd.photo_url = pro.photo_url;

                this.carts.push(this.cartadd);
                this.cartadd = {};
            }
            this.storeCart();
        },
        removeCart(pro) {
            this.carts.splice(pro, 1);
            this.storeCart();
        },
        storeCart() {
            let parsed = JSON.stringify(this.carts);
            localStorage.setItem("carts", parsed);
            this.viewCart();
            this.totalprice = this.carts.reduce((total, item) => {
                return total + item.amount * item.price;
            }, 0);
        }
    },
    mounted() {
        this.viewCart();
    }
};
</script>
<style scoped lang="scss">
.single-product {
    min-height: 330px; 
    display: flex;
    flex-direction: column;
}
.product-img {
    width: 100%;
    img {
        max-width: 100%;
    }
}
.product__desc {
    flex: 1 1 auto;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    a {
        color: #1c242a;
    }
}
.price-box {
    margin-bottom: 15px;
    min-width: 100%;
    text-align: center;
}

.single-product:hover {
    -webkit-box-shadow: 1px 1px 14px 1px #bc5171;
    -moz-box-shadow: 1px 1px 14px 1px #bc5171;
    box-shadow: 1px 1px 14px 1px #bc5171;
}
.cart-button:hover {
    -webkit-box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
    -moz-box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
    box-shadow: 1px 2px 23px 0px rgb(210, 46, 81, 1);
    background: #e95668 none repeat scroll 0 0;
    z-index: 2147483647;
}
.btn:hover {
    background-color: rgb(233, 86, 104);
}
.text_bottom {
    display: flex;
    flex-direction: row;
    max-height: 37px;
    width: 30%;
    margin-top: 20px;
    .counter {
        width: 50px;
        text-align: center;
        height: 37px;
        border: 1px solid rgba(210, 46, 81, 0.3);
    }
    .up_count {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .down_count {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
}
@media (max-width: 992px) {
    .container {
        padding: 0;
    }
}
@media (max-width: 768px) {
    .single-product {
        flex: 0 1 49%;
    }
}
@media (max-width: 576px) {
    .single-product {
        flex: 0 1 98%;
    }

    .modal-body {
        tr {
            td:nth-child(1) {
                display: none;
            }
        }
    }
}
@media (max-width: 320px) {
    .modal-body {
        tr {
            td:nth-child(1) {
                display: none;
            }
            td:nth-child(4) {
                button {
                    padding: 5px;
                }
                input {
                    width: 35px;
                }
            }
        }
    }
}
</style>
