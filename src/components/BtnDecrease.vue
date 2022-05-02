<template>
  <button @click="decreaseAction(50)">Decrease</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['decreaseAction'])
    }
}
</script>

<style>

</style>