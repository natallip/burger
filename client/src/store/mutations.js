let mutations = {
  setSections (state, payload) {
    state.sections = payload
  },
  setSection (state, payload) {
    state.activeSection = payload
  },
  mailSent (state, payload) {
    state.statusMailSend = payload
  }
}

export default mutations
