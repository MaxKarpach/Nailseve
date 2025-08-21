<script lang="ts">
import { ref } from 'vue'
import type { IReview } from '../models/review'

export default {
  emits: ['send-review'],
  setup(_, { emit }) {
    const name = ref('')
    const mark = ref<number | null>(null)
    const text = ref('')

    const submit = () => {
      if (!name.value || !mark.value || !text.value) return
      const newReview: IReview = {
        id: 0, // временно, бэк вернет реальный id
        name: name.value,
        mark: mark.value,
        text: text.value
      }
      emit('send-review', newReview)

      // очистим форму
      name.value = ''
      mark.value = null
      text.value = ''
    }

    return { name, mark, text, submit }
  }
}
</script>

<template>
  <form class="add" @submit.prevent="submit">
    <input v-model="name" type="text" class="add__name" placeholder="Ваше имя"/>
    <input v-model.number="mark" type="number" class="add__rating" placeholder="Оценка(1-5)" min="1" max="5"/>
    <textarea v-model="text" class="add__text" placeholder="Комментарий"></textarea>
    <button type="submit" class="add__button">Отправить</button>
  </form>
</template>



<style scoped lang="scss">
  .add{
    margin-top: 80px;
    height: 340px;
    width: 600px;
    border: 1px solid teal;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    input{
        height: 50px;
        padding-left: 10px;
        border: 1px solid teal; 
        border-radius: 7px;
        width: 90%;
        &::placeholder{
            color: black;
        }
    }
    &__text{
        padding-left: 10px; 
        padding-top: 10px;
        width: 90%;
        height: 140px;
        resize: none;
        border: 1px solid teal; 
        border-radius: 7px;
        &::placeholder{
            color: black;
        }
    }
    button{
        border-radius: 7px;
        border: 1px solid teal;
        height: 40px;
        background-color: inherit;
        width: 30%;
    }
 }
</style>