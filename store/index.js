export const state = () => ({
  items: [
    {
      id: 1,
      link: 'test'
    }
  ],
  currentIndex: 1
})

export const mutations = {
  add(state, newItem) {
    state.currentIndex += 1
    state.items.push({
      id: state.currentIndex,
      link: newItem
    })
  }
}
