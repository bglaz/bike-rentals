<template>
    <div class="product">
        <h4>{{ item.name }}</h4>
        <div class="img-holder">
            <img :src="item.image" :alt="item.name" />
        </div>
        <div class="price">${{ item.price.toFixed(2) }}</div>
        <nuxt-link class="button" :to="`/products/${item.id}`">
           View Details
        </nuxt-link>
    </div>
</template>

<script>

    export default {
        props: {
            item: Object,
        }
    }
    
</script>

<style lang="scss" scoped>
    .product {
        border: 1px solid #CCC;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem 0;

        h4 {
            margin-bottom: 0.25rem;
        }

        .img-holder {
            text-align: center;
            margin: 0.5rem 0;
        }

        .price {
            color: green;
            font-weight: bold;
        }
    }

    @media all and (min-width: 550px) {
        .product {
            width: 48%;
        }
    }

    @media all and (min-width: 800px) {
        .product {
            width: 31%;
        }
    }
</style>
