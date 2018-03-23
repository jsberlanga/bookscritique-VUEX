import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'

import firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    appTitle: 'La Booktique',
    reviewsPageTitle: 'La Bootique Reviews',
    user: null,
    error: null,
    loadedReviews: [
      {
      title: 'Bullet Park',
      author: 'John Cheever',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51zGIkRQiHL._SX324_BO1,204,203,200_.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem quis doloremque nesciunt dolores ad incidunt ipsam consequuntur vero numquam perferendis libero assumenda ut mollitia repellendus sit eos, repellat atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 5
    },
    {
      title: 'La Familia de Pascual Duarte',
      author: 'Camilo Jose Cela',
      coverUrl: 'https://www.portalsolidario.net/ocio/images/criticaliteraria/images/1040383401.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem quis doloremque nesciunt dolores ad incidunt ipsam consequuntur vero numquam perferendis libero assumenda ut mollitia repellendus sit eos, repellat atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 4
    }
  ]
  },
  getters: {
    isAuthenticated: state => state.user !== null && state.user !== undefined,
    loadedReviews (state) {
      return state.loadedReviews.sort((reviewA, reviewB) => {
        return reviewA.title > reviewB.title
      })
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    newReview (state, payload) {
      state.loadedReviews.push(payload)
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
        console.log(firebaseUser)
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
    },
    newReview({commit}, payload) {
      const review = {
        title: payload.title,
        author: payload.author,
        coverUrl: payload.coverUrl,
        review: payload.review,
        rating: payload.rating
      }
      firebase.database().ref('reviews').push(review)
      .then((data) => {
        const key = data.key
        commit('newReview', {
          ...review,
          id: key
        })
      })
      .catch((err) => console.log(err))
    }
  }
});