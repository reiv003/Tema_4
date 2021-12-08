<template>
  <div class="slideshow-container">
    <h2>Mine bilder</h2>
    <div class="image_buttons">
      <button @click="previousImage">Forrige</button>
      <button @click="nextImage">Neste</button>
    </div>

    <div class="images">
      <figure>
        <img
          class="image"
          :src="currentImage.imagePath"
          :alt="currentImage.caption"
        />
        <figcaption class="image__caption">
          {{ currentImage.caption }}
        </figcaption>
      </figure>
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
            imagePath: "../assets/autosampler.jpg",
            caption: "NMR autosampler for academic research.",
          },
          {
            name: "Chemicals",
            imagePath: "../assets/chemicals.jpg",
            caption: "Flasker med forskjellige løsninger",
          },
          {
            name: "Glass sketch",
            imagePath: "../assets/glass_sketch.jpg",
            caption: "Work up of a reaction sketched on fume hood sash glass",
          },
          {
            name: "Plants beaker",
            imagePath: "../assets/plants_beakers.jpg",
            caption: "Plants in beakers",
          },
          {
            name: "Reaction",
            imagePath: "../assets/reaction.jpg",
            caption: "Reaction is stirred and heated with an oil bath.",
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
    width: 80vw;
    height: 80vh;
    background: var(--component-orange);
    margin: auto;
  }

  .image_nav {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    display: flex;
    justify-content: center;
    padding: 0.5em;
    width: 100%;
  }

  .image_nav button {
    background-color: aquamarine;
    border: rgb(65, 202, 161) 2px solid;
    padding: 0.3em;
    margin: 10px;
  }

  .image_nav button:hover {
    background: cadetblue;
  }

  .image_buttons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
  }

  .image_buttons button {
    padding: 0.5em;
    color: blue;
  }

  .images {
    position: absolute;
    top: 50;
    width: 100%;
    height: 80%;
  }
  .images .image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .image__caption {
    transform: translateY(1250%);
  }

  .visible {
    display: block;
  }

  .notVisible {
    display: none;
  }
</style>