<script lang="ts">
import type { IPortfolioItem } from '../models/portfolioItem'
import PortfolioItem from './PortfolioItem.vue';

export default {
  components: { PortfolioItem }, 
  props: {
    works: {
      type: Array as () => IPortfolioItem[],
      required: true
    }
  }
}
</script>

<template>
      <div class="portfolio">
        <portfolio-item :works="works"/>
        </div>
</template>

<style scoped lang="scss">
  .portfolio{
    width: 1300px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
  }
</style>