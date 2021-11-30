<template>
  <div class="container">
    <h2>Slideshow</h2>

    <!-- <div class="slideshow__images"> -->
    <!-- <img :src="`../assets/${images[i].image}`" /> -->
    <div
      class="images"
      v-for="image in images"
      :class="{ notVisible: !image.isVisible, visible: image.isVisible }"
    >
      <img :src="`../assets/${image.image}`" />
      <!-- <div class="caption">
        {{ image.caption }}
      </div> -->
    </div>
  </div>
  <div>
    <button @click="display_image(0)">1</button>
    <button @click="display_image(1)">2</button>
    <button @click="display_image(2)">3</button>
    <button @click="display_image(3)">4</button>
    <button @click="display_image(4)">5</button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        images: [
          {
            Id: 1,
            name: "Autosampler",
            image: "autosampler.jpg",
            caption: "NMR autosampler for academic research.",
            isVisible: "none",
          },
          {
            Id: 2,
            name: "Chemicals",
            image: "chemicals.jpg",
            caption: "Flasker med forskjellige løsninger",
            isVisible: "none",
          },
          {
            Id: 3,
            name: "Glass sketch",
            image: "glass_sketch.jpg",
            caption: "Work up of a reaction sketched on fume hood sash glass",
            isVisible: "none",
          },
          {
            Id: 4,
            name: "Plants beaker",
            image: "plants_beakers.jpg",
            caption: "Plants in beakers",
            isVisible: "none",
          },
          {
            Id: 5,
            name: "Reaction",
            image: "reaction.jpg",
            caption: "Reaction is stirred and heated with an oil bath.",
            isVisible: "none",
          },
        ],
      };
    },

    // computed: {
    //   display_image: function () {
    //     let x = 0;
    //     ++x;
    //     console.log(x);
    //     return x;
    //   },

    //   currentImage: 0,

    methods: {
      display_image(n) {
        // for (let i = 0; i < images.length; i++) {
        //   currentImage = this.images[i];
        // }

        // console.log(this.images[n].name);
        // let currentImage = this.images[0].Id;
        // ++this.currentImage;
        // this.images[n].isVisible = "block";
        console.log(this.images[n].image);
        // return this.images[n].isVisible;

        // this.images[n].isVisible = !this.images[n].isVisible;
      },
    },
  };
</script>

<style>
  .container {
    width: 70vw;
    background: palegreen;
    margin: auto;
  }

  .images img {
    width: 40rem;
    margin-left: 20rem;
  }

  .visible {
    display: block;
  }

  .notVisible {
    display: none;
  }
</style>