<template>
    <div class="logo">
        <img src="~/assets/fooder_logo.png" alt="logo"/>
        <span><h2>Welcome to our cozy home store!</h2></span>
    </div>
    <div class="box">
        <div class="card" :style="{backgroundImage: `url(${bakery})`}">
            <span>BAKERY</span>
            <!-- <img src="~/assets/bakery_donut.png" alt="bakery"> -->
        </div>
        <div class="card" :style="{backgroundImage: `url(${production})`}">
            <span>HOME MADE</span>
        </div>
        <div class="card" :style="{backgroundImage: `url(${delivery})`}">
            <span>DELIVERY</span>
        </div>
        <div class="card" :style="{backgroundImage: `url(${petfood})`}">
            <span>PET FOOD</span>
        </div>
    </div>
</template>

<script setup>
    import bakery from "assets/bakery_donut.png"
    import production from "assets/own_production.png"
    import delivery from "assets/food_delivery.png"
    import petfood from "assets/pet_food.png"
</script>

<style>
    .logo{
        width: 25rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        color: var(--dark-bun);
        text-shadow: 0 0 5px var(--bun);
    }

    .logo img{
        height: 20rem;
        width: 20rem;
        margin: 0 auto;
    }

    .box{
        display: flex;
        justify-content: space-around;
        margin: 2rem 0;
    }

    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 20rem;
        border-radius: 20px;
        box-shadow: 0 0 10px rgb(101, 34, 6);  
        background-position: center;
        background-size: auto 120%;
        background-repeat: no-repeat;
        transition: all 0.4s ease;
    }
    
    .card:hover{
        background-size: auto 140%;
        box-shadow: 0 0 20px rgb(101, 34, 6);  
        opacity: 0.8;
    }
    .card:hover span{
        font-size: 170%;
    }
    
    .card span{
        display: block;
        background: transparent;
        text-align: center;
        color: var(--peech);
        text-shadow: 0 0 5px black;
        font-size: 150%;
        transition: all 0.4s ease;
    }
</style>
