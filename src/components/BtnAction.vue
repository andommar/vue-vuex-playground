<template>
  <button @click="actionBtn({status: status, number: 40})">{{ textButton }}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        status: Boolean
    },
    computed:{
        textButton(){
            return this.status ? 'Increase' : 'Decrease'
        }
    },
    methods:{
        ...mapActions(['actionBtn'])
    }

}
</script>

<style>

</style>