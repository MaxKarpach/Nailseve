<script lang="ts">
import type { ITime } from '../models/time'
import TimeItem from './TimeItem.vue';
export default {
  components: {
      TimeItem
    },
    props: {
    times: {
      type: Array as () => ITime[],
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
    <div class="date">
      <time-item :times="times"
      :chosen-time="chosenTime"
      @set-time="$emit('set-time', $event)"/>
    </div>
</template>

<style scoped lang="scss">

.date{
    width: 700px;
    margin-top: 80px;
    border: 1px solid teal;
    border-radius: 7px;
    padding: 10px 0 10px 10px;
}

</style>