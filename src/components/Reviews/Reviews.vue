<template>
  <div id="reviews">
    <section class="question">
      <div style="fontSize: 18px; fontWeight: bold">Are you ready to write a new review? <router-link to="/new" id="btn" style="textDecoration: none">Click here</router-link></div>
    </section>
    <br><br>
    <section class="showcase">
      <div class="bookTitle">
        <p>Bullet Park, by John Cheever</p>
      </div>

      <div class="bookCover">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51zGIkRQiHL._SX324_BO1,204,203,200_.jpg" alt="">
      </div>
      
      <div class="bookReview">
        <p>Your Review says:</p>
        <p style="fontStyle: italic">Here goes the Book Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem quis doloremque nesciunt dolores ad incidunt ipsam consequuntur vero numquam perferendis libero assumenda ut mollitia repellendus sit eos, repellat atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas distinctio deleniti unde quam, ipsa aut modi ex quasi ut alias, optio consectetur magnam officia adipisci nobis quia delectus explicabo!
        </p>
      </div>

      <div class="bookRating">
        <i>Your Rating is: </i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </section>
    <br><br>
    


  </div>
</template>

<script>
export default {
  computed: {
    reviewsPageTitle () {
      return this.$store.state.reviewsPageTitle
    }
  }
}
</script>

<style scoped>

.showcase {
  box-shadow: 1px 1px 2px 1px lightgray;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 80%;
  grid-template-areas: "title rating"
                       "cover review";
  padding: 30px;
  align-items: start;
  max-width: 1000px
  
}

.bookTitle {
  grid-area: title;
  font-size: 22px;
  font-weight: bold;
  justify-self: start
}
.bookCover {
  grid-area: cover;
  justify-self: start  
}
.bookReview {
  grid-area: review;
  font-size: 17px;
  justify-self: stretch    
}
.bookRating {
  grid-area: rating;
  font-size: 17px;
  justify-self: stretch  
}

.bookRating .fa-star {
  color: gold;
  font-size: 18px
}

#btn {
  background: pink;
  box-shadow: 1px 1px 1px 1px pink;
  border-radius: 5pt
}

#btn:active {
  background: rgb(233, 168, 179);
  box-shadow: rgb(233, 168, 179);
}

</style>
