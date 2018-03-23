<template>
  <div id="new">
    <h2>Write a New Review</h2>
    <br>
    <form action="" class="form" @submit.prevent="newReview">

      <input 
      type="text"
      name="title"
      v-model="title"
      required
      placeholder="Title">

      <input 
      type="text"
      name="author"
      v-model="author"
      required
      placeholder="Author">

      <input 
      type="text"
      name="cover"
      v-model="coverUrl"
      required
      placeholder="Cover Url">

      <img :src="coverUrl" alt=""><i>Cover Preview</i>
      <br>
      <textarea 
      type="text"
      name="review"
      v-model="review"
      required
      placeholder="Enter your Book Review"
      rows="10" cols="70" >
      </textarea>

      <input 
      type="number"
      name="rating"
      v-model="rating"
      required
      placeholder="Enter your Rating"
      min="1"
      max="5">

      <button id="btn" @click.prevent="newReview" :disabled="!formIsValid">Submit</button>

    </form>

  </div>
</template>


<script>
import router from '../../router'

export default {
  data () {
    return {
      title: '',
      author: '',
      coverUrl: '',
      review: '',
      rating: null
    }
  },
  computed: {
    formIsValid () {
      return (
      this.title !== '' &&
      this.author !== '' &&
      this.coverUrl !== '' &&
      this.review !== '' &&
      this.rating !== null
      )
    }
  },
  methods: {
    newReview () {
      this.$store.dispatch('newReview', {
        title: this.title,
        author: this.author,
        coverUrl: this.coverUrl,
        review: this.review,
        rating: this.rating
      })
      router.push('/reviews')
    }
  }
}
</script>


<style scoped>

.form {
  display: flex;
  flex-direction: column;
}

#btn:disabled {
  background: silver;
  cursor:not-allowed;
}

img {
  width: 200px;
  margin: 20px auto;
}

</style>
