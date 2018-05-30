<template>
  <main>
    <section>
        <p>Welcome to Bikes R' Us</p>
    </section>
    <product-list title="Bicycles For Rent" :products="filteredProducts" />
  </main>
</template>

<script>

import ProductList from '~/components/ProductList.vue';
import ProductJSON from '~/static/bikerentals.json';
import _ from 'lodash';

export default {
  data: () => {
    return {
      products: ProductJSON.products
    }
  },
  components: {
    ProductList
  },
  computed: {
        filteredProducts() {
            return _.filter(this.products, (product) => product.product_type === 'bike');
        }
    }
}

</script>

<style>

</style>
