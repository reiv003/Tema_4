<template>
  <div class="list-item">
    <button class="list-item__done" aria-label="Done">O</button>
    <div class="list-item__task">{{ text }}</div>
    <button class="list-item__remove" @click="remove" aria-label="Remove">
      X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "New task" },
    done: { type: Boolean, default: false },
  },

  methods: {
    remove() {
      // @TODO: emit event til parent komponent!
    },
  },
};
</script>

<style>
.list-item {
  display: flex;
  flex-flow: row nowrap;
  background: white;
  margin-bottom: 0.25em;
  padding: 0.5em;
  border-radius: var(--border-radius);
  justify-content: space-between;
}
</style>