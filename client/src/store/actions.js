let actions = {
  setSections ({ commit }, payload) {
    commit('setSections', payload)
  },
  setSection ({ commit }, payload) {
    commit('setSection', payload)
  },
  sendOrder ({ commit }, payload) {
    // return fetch('/api/send-order', {
    return fetch('http://localhost:8081/api/send-order', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('mailSent', data)
      })
  }
}
export default actions
