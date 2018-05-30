<template>
    <section class="product-list">
        <h2>{{ title }}</h2>
        <div class="product-container">
            <product-list-item v-for="item in products" :item="item" :key="item.id" />
        </div>
    </section>
</template>

<script>

import ProductListItem from '~/components/ProductListItem';

export default {
    components: {
        ProductListItem
    },
    props: {
        title: String,
        products: Array
    }
}

</script>

<style lang="scss" scoped>
    .product-container {
        margin: 1rem 0;
    }

    h2 {
        border-bottom: 1px solid #CCC;
        padding-bottom: 0.5rem;
    }

    @media all and (min-width: 550px) {
        .product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>
