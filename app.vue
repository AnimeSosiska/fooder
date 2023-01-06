<template>
  <div class="wrapper">
    <NuxtLayout :name="header">
      <NuxtPage/>
    </NuxtLayout>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
  :root{
    --peech: #ffe2b6;
    --pale-peech: #f5a875;
    --bun: #da8750;
    --dark-bun: #ad4223;
  }

  *{
    font-family: Rockwell;
    background-color: var(--peech);
    padding: 0;
    margin: 0;
  }
  .wrapper{
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

<script setup>
  import {ref} from 'vue';
  const header = "header";
</script>