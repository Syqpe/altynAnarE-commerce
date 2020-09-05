<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div @click="window.location.href = 'http://localhost:8000'" class="brand-link logo">
      <a class="brand-text font-weight-light logo_text" @click="$router.push({path: '/'})">
        Алтын
        <span>Анар</span>
      </a>
    </div>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel d-flex">
        <div class="image">
          <div class="user_image_photo">
            <img
              src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="user_image_text"></div>
        </div>
        <div class="info">
          <a href="#" class="d-block">Админ</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt blue"></i>
              <p>Домой</p>
            </router-link>
          </li>
          <!-- <li @click="$router.push({name:'registeredUsers'})" class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-users"></i>
              <p>
                Пользователи
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li @click="$router.push({name:'usersProducts'})" class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-prescription-bottle-alt"></i>
              <p>
                Препараты пользователей
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li @click="$router.push({name:'Pharmacy'})" class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-place-of-worship"></i>
              <p>
                Аптеки
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          </li>
          <li @click="$router.push({name:'pharmProducts'})" class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-prescription-bottle-alt"></i>
              <p>
                Препараты аптеки
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
          </li>-->
          <!-- <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/users" class="nav-link">
                  <i class="fas fa-users yellow nav-icon"></i>
                  <p>Users</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-circle-o nav-icon"></i>
                  <p>Inactive Page</p>
                </a>
              </li>
          </ul>-->
          <!-- </li> -->
          <li @click="$router.push({name:'Order'})" class="nav-item">
            <router-link to="/order" class="nav-link">
              <i class="nav-icon fas fa-exchange-alt"></i>
              <p>Заказы</p>
            </router-link>
          </li>
          <li @click="$router.push({name:'complains'})" class="nav-item">
            <router-link to="/profile" class="nav-link">
              <i class="nav-icon far fa-bookmark"></i>
              <p>Книга жалоб</p>
            </router-link>
          </li>
          <li class="nav-item">
            <div @click="logOut()" class="nav-link">
              <i class="nav-icon fa fa-power-off red"></i>
              <p>Выйти</p>
            </div>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  methods: {
    logOut() {
      this.$auth.destroyToken();
      window.location.href = "http://localhost:8000";
      this.$root.user.data = "";
    }
  }
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: montserrat;
  src: url(/Applications/XAMPP/xamppfiles/htdocs/darihub.kz/resources/sass/montserrat/Montserrat-Light.otf);
}
.main-sidebar {
  width: 16%;
  top: 0;
  position: fixed;
  border-right: 1px solid rgb(170, 25, 255);
}
p {
  font-family: montserrat;
}
.logo {
  font-weight: bold;
  letter-spacing: 1.2px;
  justify-self: center;
  color: #5d897c;
  margin: auto;
  cursor: pointer;
  text-align: center;
  a {
    font-size: 25px;
    font-family: montserrat;
    font-weight: 550;
  }
  span {
    border-radius: 3px;
    color: #fff;
    background: #5d897c;
    padding: 0 8px;
    font-size: 25px;
    font-family: montserrat;
    font-weight: 550;
  }
}
.nav-link {
  display: flex;
  flex-direction: row;
}
.user-panel {
  height: 46px;
  margin: 8px auto;
  .image {
    display: flex;
    flex-direction: row;
    .user_image_photo {
      width: 30%;
      height: 46px;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
    .user_image_text {
      height: 46px;
      width: 70%;
      padding: 0 4px;
      display: flex;
      flex-direction: column;
      span {
        font-size: 12px;
        font-family: montserrat;
        color: #c2c7d0;
      }
    }
  }
}
</style>