<template>
  <section class="container">
    <el-table :data="items" style="width: 100%">
      <el-table-column prop="id" />
      <el-table-column prop="link">
        <template slot-scope="scope">
          <n-link :to="scope.row ? '/dynamic/' + scope.row.link : ''">
            {{ scope.row ? scope.row.link : '' }}
          </n-link>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-input v-model="link" />
      <el-button @click="addLink">add item</el-button>
    </div>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      link: ''
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    ...mapMutations({
      add: 'add'
    }),
    addLink() {
      this.add(this.link)
      this.link = ''
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
