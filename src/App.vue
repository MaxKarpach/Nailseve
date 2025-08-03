<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="wrapper">
    <header>
     <p class="header__ref">Главная</p>
     <p class="header__ref">Записаться</p>
     <p class="header__ref">Портфолио</p>
     <p class="header__ref">Отзывы</p>
    </header>
    <main>
    <RouterView></RouterView>
    </main>
    <footer>
      Все права защищены
    </footer>
    </div>
</template>

<style lang="css">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 1200px;
    align-items: center;
  }
  header{
  width: 100%;
  height: 100px;
  border-bottom: 1px solid teal;
  display: flex;
  align-items: center;
  padding-left: 30px;
  }
  .header__ref{
    margin-left: 20px;
  }
  .header__ref:first-child{
    margin-left: 0;
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
  }
</style>
