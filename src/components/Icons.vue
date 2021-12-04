<template>
  <svg
    class="todo-icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-if="icon === 'done'">
      <circle cx="7.29" cy="7.29" r="6.29" stroke="black" stroke-width="2" />
    </g>

    <g v-else-if="icon === 'add'">
      <line
        x1="7.55945"
        y1="0.307373"
        x2="7.55945"
        y2="14.8839"
        stroke="black"
        stroke-width="2"
      />
      <line
        y1="7.32446"
        x2="14.5765"
        y2="7.32446"
        stroke="black"
        stroke-width="2"
      />
    </g>

    <g v-else-if="icon === 'remove'">
      <line
        x1="5.34529"
        y1="4.96184"
        x2="15.6524"
        y2="15.269"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="4.96184"
        y1="15.269"
        x2="15.269"
        y2="4.96182"
        stroke="black"
        stroke-width="2"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: { type: String },
  },
};
</script>

<style>
.todo-icon {
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
}

.todo-icon line,
.todo-icon circle {
  stroke: black;
}
</style>
