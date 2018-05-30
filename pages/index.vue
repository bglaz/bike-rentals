<template>
    <div>
      <section>
          <p>Welcome to Bikes R' Us</p>
      </section>
      <product-list title="Bicycles For Rent" :products="products" />
    </div>
</template>

<script>

import ProductList from '~/components/ProductList.vue';
import ProductJSON from '~/static/bikerentals.json';
import _ from 'lodash';

export default {
  asyncData: (context) => {
    return {
      products: _.filter(ProductJSON.products, (product) => product.product_type === 'bike')
    }
  },
  components: {
    ProductList
  }
}

</script>

<style>

</style>
