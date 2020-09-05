<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-lg-3 col-xs-6">
                <div class="small-box bg-aqua">
                    <div class="inner">
                        <h3>150</h3>
                        <p>Зарегистрированные пользователи</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                        Подробнее
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-xs-6">
                <div class="small-box bg-green">
                    <div class="inner">
                        <h3>53%</h3>
                        <p>Добавленные препараты</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-cart-plus"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                        Подробнее
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-xs-6">
                <div class="small-box bg-yellow">
                    <div class="inner">
                        <h3>44</h3>
                        <p>Онлайн покупки</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                        Подробнее
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-xs-6">
                <div class="small-box bg-red">
                    <div class="inner">
                        <h3>65</h3>
                        <p>Всего посещени</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                        Подробнее
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <section class="col-lg-7 connectedSortable ui-sortable">
                <div class="box box-info">
                    <div class="box-header">
                        <i class="fa fa-envelope"></i>
                        <h3 class="box-title">Отправить письмо</h3>
                    </div>
                    <div class="box-body">
                        <form action="#" method="post">
                            <div class="form-group">
                                <input
                                    type="email"
                                    name="emailto"
                                    placeholder="Кому"
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Тема"
                                    class="form-control"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    class="Сообщение"
                                    style="width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid rgb(221, 221, 221); padding: 10px;"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="box-footer clearfix">
                        <button
                            type="button"
                            id="sendEmail"
                            class="pull-right btn btn-default"
                        >
                            Отправить
                            <i class="fa fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section class="col-lg-5 connectedSortable ui-sortable">
                <div class="box box-info">
                    <div class="box-header box-header_custom">
                        <div class="header_text">
                            <i class="fas fa-image"></i>
                            <h3 class="box-title">Слайдер</h3>
                        </div>
                        <div class="image_button">
                            <span>
                                <input
                                    type="file"
                                    id="imag"
                                    title
                                    class="input-img"
                                />
                                Добавить картину
                                <i class="fas fa-plus-circle"></i>
                            </span>
                        </div>
                    </div>
                    <div class="box-body">
                        <div class="box_image">
                            <div class="single_image" v-for="image in images">
                                <img :src="image.src" alt />
                                <div class="image_change">
                                    <input
                                        type="file"
                                        :id="image.id"
                                        title
                                        class="input_img"
                                    />
                                    <div class="image_edit">
                                        <i class="fas fa-edit"></i>
                                    </div>
                                    <div class="image_delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {
                    id: "1",
                    src:
                        "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    id: "2",
                    src:
                        "https://www.vilniausrk.lt/wp-content/uploads/lietuva/skirtingos_kredito_rusys_255.jpg"
                },
                {
                    id: "3",
                    src:
                        "https://investor-square.com/wp-content/uploads/2015/02/Dubai-City-Most-Popular-Attractions-Visit.jpg"
                }
            ]
        };
    }
};
</script>
<style scoped lang="scss">
@font-face {
    font-family: montserrat;
    src: url(/Applications/XAMPP/xamppfiles/htdocs/darihub.kz/resources/sass/montserrat/Montserrat-Light.otf);
}
.dashboard {
    width: 76%;
    margin-left: 13%;
    position: absolute;
    margin-top: 24px;
}
h3,
p,
input,
button,
textarea {
    font-family: montserrat;
}
.small-box {
    .inner {
        height: 120px;
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 12px;
        }
    }
}
.box-info {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 3px;
    .box-header {
        display: flex;
        flex-direction: row;
        height: 30px;
        i,
        h3 {
            height: 30px;
            margin: auto 4px;
            font-size: 22px;
        }
        .image_button {
            cursor: pointer;
            overflow: hidden;
            color: #fff;
            background-color: #28a745;
            border-radius: 3px;
            padding: 5px 8px;
            height: 30px;
            span {
                font-size: 14px;
                font-family: montserrat;
            }
            i {
                margin: auto;
                font-size: 14px;
            }
        }
        .image_button input {
            height: 30px;
            width: 160px;
            cursor: pointer;
            position: absolute;
            filter: alpha(opacity=1);
            -moz-opacity: 0;
            opacity: 0;
        }
    }
    .box-header_custom {
        display: flex;
        flex-direction: row;
        .header_text {
            display: flex;
            flex-direction: row;
            width: 60%;
        }
        .image_button {
            width: 40%;
        }
    }
    .box_image {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .input_img {
            height: 24px;
            width: 80px;
            cursor: pointer;
            position: absolute;
            filter: alpha(opacity=1);
            -moz-opacity: 0;
            opacity: 0;
        }
        .single_image {
            height: 154px;
            margin: 5px 4%;
            width: 42%;
            display: flex;
            flex-direction: column;
            border: 1px solid black;
            border-radius: 3px;
            img {
                margin: 0;
                height: 120px;
                width: 100%;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
            }
            .image_change {
                width: 100%;
                padding: 4px;
                display: flex;
                flex-direction: row;
                i {
                    font-size: 16px;
                    margin: auto;
                    color: #4b545c;
                }
                div {
                    margin: 0 4%;
                    width: 42%;
                    border-radius: 2px;
                    text-align: center;
                    cursor: pointer;
                }
                .image_edit {
                    background-color: #ffc107;
                }
                .image_delete {
                    background-color: #dc3545;
                }
            }
        }
    }
}
</style>
