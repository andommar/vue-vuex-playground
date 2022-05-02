<template>
  <div class="home">
    <h1
      :style="colorContador"
    >{{ titulo }}: {{ contador }}
    </h1>
    <button @click="incrementAction">Aumentar</button>
    <BtnDecrease />
    <hr>
    <BtnAction :status="true"/>
    <BtnAction :status="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BtnDecrease from '../components/BtnDecrease.vue'
import BtnAction from '../components/BtnAction.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    BtnDecrease,
    BtnAction
  },
  data(){
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? { 'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAction'])
  }
}
</script>
