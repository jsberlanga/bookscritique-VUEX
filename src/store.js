import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appTitle: 'La Booktique',
    user: null,
    error: null
  },
  getters: {
    isAuthenticated: state => state.user !== null && state.user !== undefined 
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    userRegistration ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        // commit('setUser', {email: firebaseUser.email})
        router.push('/login')
        commit('setError', null)
      })
      .catch(error => {
        commit('setError', error.message)
      })
    },
    userLogin ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.email})
        commit('setError', null)
        router.push('/reviews')
      })
      .catch(error => {
        commit('setError', alert(error.message))
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut()      
      commit('setUser', null)
      router.push('/')
    }
  }
});