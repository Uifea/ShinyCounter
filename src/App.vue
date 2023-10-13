<template>
    <nav class="navigation">
      <RouterLink to="/" class="navigation__item">Счетчик</RouterLink>
      <RouterLink to="/setup" class="navigation__item">Настройки поиска</RouterLink>
    </nav>
    <router-view></router-view>
</template>

<script>

export default {
 


}
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.navigation {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 15px;
    padding-bottom: 20px;

    .navigation__item {
      font-family: 'Comfortaa';
        font-size: 24px;
        font-weight: bold;
        color: #7959c5;
        margin-right: 15px;
        text-decoration: underline;
        cursor: pointer;
    }
    a.router-link-exact-active {
        color: #42b983;
    }
}

/* .counter__number {
  
} */
</style>
