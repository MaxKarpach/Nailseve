<script lang="ts">
import Portfoliolist from '../components/PortfolioList.vue';
import type { IPortfolioItem } from '../models/portfolioItem';
import axios from 'axios'

export default {
  components: {
    Portfoliolist
  },
  data() {
    return {
      works: [ ] as IPortfolioItem[]
    }
  },
  methods: {
      async loadWorks(): Promise<void> {
          try {
              const response = await axios.get<IPortfolioItem[]>('http://localhost:8000/api/worksWithDescriptions')
              this.works = response.data
          } catch (error) {
              console.error('Ошибка загрузки работ:', error)
          }
      }
    },
    mounted() {
        this.loadWorks()
    }  
}
</script>

<template>
      <portfoliolist :works="works"/>
</template>

<style scoped lang="scss">
</style>
