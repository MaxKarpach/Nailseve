<script setup lang="ts">
</script>

<template>
    <div class="person">
        <div class="person__text">
        <p>Привет, меня зовут Катя Елисеева, и я уже 2 года занимаюсь маникюром.</p>
        <p>У меня есть официальный диплом об окончании профессиональных курсов </p>
        <p>и пару десятков довольных клиентов.</p>
        <p>Я тащусь от своей работы.</p>
        </div>
        <img class="person__img" src="/src/assets/person.jpg" alt="">
    </div>
    <div class="address">
        <div class="address__text">
        <p>Приходите ко мне на ул.Камероновская д.2 кв.44.</p>
        <p>Чай и печеньки прилагаются).</p>
        </div>
        <img class="address__img"  src="/src/assets/address.jpg" alt=""></img>
    </div>
</template>

<style scoped lang="css">

  .person{
    display: flex;
    padding-top: 80px;
    width: 1400px;
    height: 400px;
    align-items: center;
    padding-left: 30px;
  }
  .person__img{
    height: 400px;
    width: 400px;
    margin-left: 200px;
  }
  .person__text{
    line-height: 30px;
  }
  .address{
    margin-top: 100px;
    display: flex;
    width: 1400px;
    padding-left: 30px;
    height: 400px;
    align-items: center;
  }
  .address__img{
    height: 400px;
    width: 400px;
    margin-left: 405px
  }
  .address__text{
    line-height: 30px;
  }
</style>
