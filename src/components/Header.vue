<template>
  <header>
    <div class="item table">
      <RouterLink :to="{ name: 'tabell' }">Go to tabell</RouterLink>
    </div>
    <br />
    <div class="item quiz">
      <RouterLink :to="{ name: 'quiz' }">Go to quiz</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'contact_us' }">Go to contact_us</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'dashboard' }">Go to dashboard</RouterLink>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  font-size: 24px;
}

.item {
  background: cadetblue;
}
</style>