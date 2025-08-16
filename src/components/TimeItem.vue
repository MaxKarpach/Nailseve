<script lang="ts">
import type { IDate } from '../models/date'
export default {
    props: {
    times: {
      type: Array as () => IDate[],
      required: true
    },
    chosenTime: {
      type: Number,
      required: true
    }
  },
emits: ['set-time']
}
</script>

<template>
        <p class="date__title">
            Выберите время
        </p>
        <div class="date__container">
            <div class="date__container__item"  v-for="time in times" :key="time.id"
              @click="$emit('set-time', time.id)"            
            :class="{ active: chosenTime === time.id }">
                {{time.date}}
        </div>
    </div>
</template>

<style scoped lang="scss">

.date__title{
        font-size: 20px;
    }
.date__container{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 70px 70px 70px 70px 70px 70px;
    grid-template-rows: auto auto;
    gap: 10px;
    &__item{
        cursor: pointer;
        border: 1px solid teal;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        width: 70px;
        height: 30px;
        &.active {
        background-color: teal;
        color: white;
        border-color: teal;
      }
    }
}

</style>