<template>
  <div class="hello">
    <code class="title">{{ text }}</code> <br>
    <input type="msg" v-model="msg">
    <button @click="addText(msg)">+</button>
    <button @click="delText()">-</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters([
      'text'
    ])
  },
  methods: {
    ...mapActions([
      'addText'
    ]),
    ...mapActions({
      delText: 'delText' // blinding action
    }),
    addText (text) {
      this.$store.dispatch('addText', text) // 'addText (1)'
      console.log(text)
    },
    delText () {
      this.$store.dispatch('delText')
      this.msg = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.title {
  color: red;
}
</style>
