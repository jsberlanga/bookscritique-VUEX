<template>
  <div id="reviews">
    <section class="question">
      <div style="fontSize: 18px; fontWeight: bold">Are you ready to write a new review?
        
        <router-link to="/review/new" id="btn" style="textDecoration: none">Click here</router-link></div>
    </section>
    <br><br>
    <section class="showcase" v-for="(review, index) in reviews" :key="index">
      <div class="bookTitle">
        <p>{{review.title}}</p>
      </div>

      <div class="bookAuthor" style="textDecoration: italic">
        <p>by {{review.author}}</p>
      </div>

      <div class="bookCover">
        <img :src="review.coverUrl">
      </div>
      
      <div class="bookReview">
        <p style="fontStyle: italic">{{review.review}}</p>
      </div>

      <div class="bookRating">
        <i>Your Rating is: </i>
        <div class="stars-outer">
            <div class="stars-inner" :style="{width: (review.rating * 25) + 'px'}"></div>
        </div>
      </div>
    </section>
    <br><br>

  </div>
</template>

<script>
export default {
  computed: {
    reviews () {
      return this.$store.getters.loadedReviews
    }
  }
}
</script>

<style scoped>

.showcase {
  box-shadow: 1px 1px 2px 1px lightgray;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 65%;
  grid-template-areas: "title rating"
                       "author rating"
                       "cover review";
  padding: 30px;
  align-items: start;
  max-width: 1000px;
  min-height: 500px ;
}

img {
  width: 300px;
  margin: 5px auto;
}

.bookTitle {
  grid-area: title;
  font-size: 22px;
  font-weight: bold;
  justify-self: start;
}
.bookAuthor {
  grid-area: author;
  font-size: 22px;
  /* font-weight: bold; */
  justify-self: start;
  font-style: italic;
  margin: 7px 0;
}
.bookCover {
  grid-area: cover;
  justify-self: start  
}
.bookReview {
  grid-area: review;
  font-size: 17px;
  justify-self: start;
  text-align: justify;  
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

.stars-outer {
  position: relative;
  display: inline-block;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.stars-outer::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #ccc;
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: gold;
}

@media (max-width: 1190px) {
  .showcase {
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 65%;
  grid-template-areas: "title rating"
                       "author rating"
                       "cover review";
  }

  img {
  width: 240px;
  }
}

@media (max-width: 1000px) {
  .showcase {
  grid-template-columns: 100%;
  grid-template-rows: 10% 10% 40% 30% 20%;
  grid-template-areas: "title"
                       "author"
                       "cover"
                       "review"
                       "rating";
  }
  .bookTitle,
  .bookAuthor,
  .bookCover,
  .bookReview,
  .bookRating {
    justify-self: center;
    margin: 5px 0px
  }
  .question { 
    display: none
  }
}

</style>
