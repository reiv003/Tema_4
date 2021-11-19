<template>
  <header>
    <RouterLink :to="{ name: 'tabell' }">Go to tabell</RouterLink>
    <br />
    <RouterLink :to="{ name: 'quiz' }">Go to quiz</RouterLink>
    <br />
    <RouterLink :to="{ name: 'dashboard' }">Go to dashboard</RouterLink>
    <br />
    <RouterLink :to="{ name: 'contact_us' }">Go to contact_us</RouterLink>
  </header>
</template>

<script>
export default {};
</script>

<style>
header .router-link-active {
  background: yellow;
}

header {
  font-size: 24px;
}
</style>