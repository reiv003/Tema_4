<template>
  <div class="slideshow-container">
    <div class="images">
      <figure>
        <img
          class="image"
          :src="currentImage.imagePath"
          :alt="currentImage.altText"
        />
        <figcaption class="image__date">
          {{ currentImage.date }}
        </figcaption>
      </figure>
    </div>

    <div class="image_buttons">
      <button @click="previousImage">Forrige</button>
      <button @click="nextImage">Neste</button>
    </div>

    <div class="image_nav">
      <button
        @click="goToIndex(index)"
        v-for="(image, index) in images"
        :aria-label="`Gå til bilde ${index + 1}`"
      >
        -
      </button>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        index: 0,
        images: [
          {
            name: "Autosampler",
            imagePath: "../images/autosampler.jpg",
            date: "2022-01-28",
            altText: "Autosampler",
          },
          {
            name: "Chemicals",
            imagePath: "../images/chemicals.jpg",
            date: "2022-02-17",
            altText: "Løsninger i flasker",
          },
          {
            name: "Glass sketch",
            imagePath: "../images/glass_sketch.jpg",
            date: "2022-03-28",
            altText: "Skisse på glasstavle",
          },
          {
            name: "Plants beaker",
            imagePath: "../images/plants_beakers.jpg",
            date: "2022-01-28",
            altText: "Planter i flasker",
          },
          {
            name: "Reaction",
            imagePath: "../images/reaction.jpg",
            date: "2022-01-16",
            altText: "Løsning varmes opp",
          },
        ],
      };
    },

    computed: {
      currentImage() {
        return this.images[this.index];
      },
    },

    methods: {
      previousImage() {
        this.index = this.index === 0 ? this.images.length - 1 : this.index - 1;
      },

      nextImage() {
        this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;
      },

      goToIndex(index) {
        this.index = index;
      },
    },
  };
</script>

<style>
  .slideshow-container {
    position: relative;
    width: 60%;
    height: 80%;
    margin: auto;
  }

  .image_nav {
    display: flex;
    justify-content: center;
  }

  .image_nav button {
    background-color: aquamarine;
    border: rgb(65, 202, 161) 2px solid;
    padding: 0.3em;
    margin: 0.5em;
  }

  .image_nav button:hover {
    background: cadetblue;
  }

  .image_buttons {
    display: flex;
    justify-content: space-between;
  }

  .image_buttons button {
    margin-top: 0.5em;
    padding: 0.5em;
    color: blue;
  }

  .images {
    width: 80%;
    height: 80%;
    margin: auto;
  }
  .images .image {
    width: 100%;
    height: 100%;
  }
</style>