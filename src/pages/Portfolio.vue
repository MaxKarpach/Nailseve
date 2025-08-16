<script lang="ts">
import Portfoliolist from '../components/PortfolioList.vue';
import type { IPortfolioItem } from '../models/portfolioItem';

export default {
  components: {
    Portfoliolist
  },
  data() {
    return {
      works: [
        { id: 1, img: '/src/assets/n1.jpg', price: 500, description: [{ id: 1, text: 'Повседневный' }, { id: 2, text: 'French' }] },
        { id: 2, img: '/src/assets/n2.jpg', price: 300, description: [{ id: 3, text: 'Летний' }, { id: 4, text: 'Минимализм' }] },
        { id: 3, img: '/src/assets/n3.jpg', price: 1000, description: [{ id: 3, text: 'Летний' }, { id: 5, text: 'Худ. роспись' }] }                
      ] as IPortfolioItem[]
    }
  }
}
</script>

<template>
      <portfoliolist :works="works"/>
</template>

<style scoped lang="scss">
</style>
