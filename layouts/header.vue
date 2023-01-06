<template>
    <div class="navbar">
        <h3><NuxtLink to="/" active-class="active">HOME</NuxtLink></h3>
        <NuxtLink to="/products" active-class="active"><h3>PRODUCTS</h3></NuxtLink>
        <NuxtLink to="/about" active-class="active"><h3>ABOUT</h3></NuxtLink>
        <NuxtLink to="/account" active-class="active"><h3>ACCOUNT</h3></NuxtLink>
    </div>
    <hr>
</template>

<style>
    .navbar{
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    }
    .active{
        color: var(--bun) !important;
        border-bottom: 1px solid var(--bun);
    }
    hr{
        border: 1px solid var(--pale-peech);
    }
    a {
        text-decoration: none;
        color: var(--bun);
    }
</style>