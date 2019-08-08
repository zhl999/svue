<template>
<div>
  <span>123324567890-</span>
  <div id="app-6">
    <input v-model="num1"> +
    <input v-model="num2"> =
    {{ parseInt(num1) + parseInt(num2) }}
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      num1: '2',
      num2: '2'
    }
  }
    // methods: {
    //     reversedMessage: function () {
    //         return this.message.split('').reverse().join('')
    //     }
    // }
}
</script>
<style scoped>
</style>
