<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="wrapper">
    <header>
     <RouterLink class="header__ref" to="/">Главная</RouterLink>
     <RouterLink class="header__ref" to="/booking">Записаться</RouterLink>
     <RouterLink class="header__ref" to="/portfolio">Портфолио</RouterLink>
     <RouterLink class="header__ref" to="/reviews">Отзывы</RouterLink>
    </header>
    <main>
    <RouterView></RouterView>
    </main>
    <footer>
      Все права защищены
    </footer>
    </div>
</template>

<style lang="scss">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  a{
    text-decoration: none;
    color: black;
  }
  input, textarea:focus {
  outline: none;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    header{
     width: 100%;
     height: 100px;
     border-bottom: 1px solid teal;
     display: flex;
     align-items: center;
     padding-left: 30px;
     .header__ref{
      margin-left: 20px;
      &:first-child{
        margin-left: 0;
      }
     }
    }
    footer{
     width: 100%;
     height: 100px;
     border-top: 1px solid teal;
     display: flex;
     align-items: center;
     justify-content: center;
    }
    main{
     height: 1000px;
     display: flex;
     flex-direction: column;
     align-items: center;
    }
  }
</style>
