<script lang="ts">
import type { IDate } from '../models/date'
import DateItem from './DateItem.vue';
export default {
  components: {
      DateItem
    },
    props: {
    dates: {
      type: Array as () => IDate[],
      required: true
    },
    chosenDate: {
      type: Number,
      required: true
    }
  },
emits: ['set-date']
}
</script>

<template>
    <div class="date">
      <date-item :dates="dates"
      :chosen-date="chosenDate"
      @set-date="$emit('set-date', $event)"
      />
    </div>
</template>

<style scoped lang="scss">

.date{
    width: 500px;
    margin-top: 80px;
    border: 1px solid teal;
    border-radius: 7px;
    padding: 10px 0 10px 10px;
}

</style>