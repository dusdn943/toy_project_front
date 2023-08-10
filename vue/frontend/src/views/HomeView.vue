<template>
  <Helloworld />
</template>

<script>
import Helloworld from '../components/HelloWorld.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Helloworld
  },
});
</script>
