<template>
  <!-- The slideshow is largely based on Alejandro's code, and I did not make many changes functionally. -->
  <div class="slideshow-container">
    <div class="images">
      <figure>
        <!-- added the function to show next image on the image itself as well, in order to have 
        this functionality on the dashboard without cluttering the component with buttons -->
        <button @click="nextImage" aria-label="Vis neste bilde">
          <img
            class="image"
            :src="currentImage.imagePath"
            :alt="currentImage.altText"
          />
        </button>
        <div class="image__date">
          {{ currentImage.date }}
        </div>
      </figure>
    </div>

    <div class="image-buttons">
      <button @click="previousImage">Forrige bilde</button>
      <button @click="nextImage">Neste bilde</button>
    </div>

    <div class="image-nav">
      <button
        @click="goToIndex(index)"
        v-for="(image, index) in images"
        :aria-label="`Gå til bilde ${index + 1}`">
        <!-- The +1 makes the number visually more readable, ie. skips the 0 which is the actual first index -->
        {{ index + 1 }}
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
            altText: "Automatisk prøvetaker (Autosampler)",
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
            altText: "Løsningen varmes opp",
          },
        ],
      };
    },

    /*This variable retrieves the index of the array, and we can then use the index in the template to display the values that each object has. 
      This way we can loop through all the objects and show all the values with one line of code (currentImage.value), and without needing to specify the index, ie. [1] for
      each object. The solution I tried first was based on specifying the index (one button element for each image, the relevant image would only be displayed when clicking the button, the rest would be hidden). It did not work (error was that the index was "referenced during render but not declared"). 
      Possibly this was because I had not initialized the value under return as this code now does. 
      The attempt can be seen in this commit: https://github.com/reiv003/Tema_4/commit/5bbff94d16f094992600e5cf4c09c5429acdd50f */
    computed: {
      currentImage() {
        return this.images[this.index];
      },
    },

    /*These methods uses the index of the array to determine where we are in the array, in order to navigate back and forth and to any given position in the array.
      if the index is at 0, previousImage will go one step back in the array through negating the total length by 1 (ie the starting position when loading the page/component) so
      we can go to the last image in the array. If we are not at 0, ie anywhere else in the array, it will instead negate the current index by -1, stepping backward in a loop. nextImage does the same thing, just adding +1 instead. goToIndex sets the current index based on which dot was clicked, through the use of a loop in the template to create a dot for each index. */
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
    width: 60%;
    height: 80%;
    margin: auto;
    font-size: 0.7em;
  }

  .image-nav {
    display: flex;
    justify-content: center;
  }

  .image-nav button {
    background-color: var(--orange-dark);
    padding: 0.3em;
    margin: 0.5em;
  }

  .image-nav button:hover {
    background: var(--component-orange);
  }

  .image-buttons {
    display: flex;
    justify-content: space-between;
  }

  .image-buttons button {
    margin-top: 0.5em;
    padding: 0.5em;
    color: white;
    background-color: var(--component-orange);
    border-radius: 30%;
    font-size: 0.5em;
  }

  .image-buttons button:hover {
    background-color: var(--orange-dark);
  }

  .images {
    width: 80%;
    margin: auto;
  }
  .images .image {
    width: 100%;
  }
</style>