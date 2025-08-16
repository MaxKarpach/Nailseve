<script lang="ts">
import type { IService } from '../models/service'
import ServiceItem from './ServiceItem.vue';
export default {
  components: {
      ServiceItem
    },
    props: {
    services: {
      type: Array as () => IService[],
      required: true
    },
    chosenServices: {
      type: Array as () => number[],
      required: true
    }
  },
emits: ['change-service']
}
</script>

<template>
    <div class="services">
      <service-item :chosen-services="chosenServices" :services="services"
      @change-service="$emit('change-service', $event)"/>
    </div>

</template>

<style scoped lang="scss">

.services{
    width: 1300px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
}

</style>