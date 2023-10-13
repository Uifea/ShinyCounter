<template lang="">
  <current-hunt></current-hunt>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CurrentHunt from '@/components/CurrentHunt.vue'


export default {
  components: {
    CurrentHunt
  },
  data() {
    return {
    }
  },
  methods: mapActions(['fetchPokemon']),
  computed: mapGetters(['aboutPokemon'])
}
</script>
<style>
    
</style>