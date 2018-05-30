<template>
    <div>
        <section>
            <nuxt-link to="/">&lt; Return Home</nuxt-link>
        </section>
        <section class="product-container">
            <div class="product-meta">
                <h2>{{ item.name }}</h2>
                <img :src="item.image" :alt="item.name" />
                <div class="price">${{ item.price.toFixed(2) }}</div>
            </div>
            <div class="product-desc">
                <h2>{{ item.name }} Details</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque cumque reprehenderit molestias error officiis repellendus eveniet deserunt eaque laboriosam. Nihil sint at mollitia nobis voluptas earum ea aut. Quo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quam, ab omnis molestias vitae nulla eos voluptatem eligendi esse est! Distinctio voluptas molestiae nostrum amet magnam! Exercitationem harum alias praesentium.</p>
                <a class="button" v-if="! reserveClicked" @click.prevent="handleReserveClick">Reserve Now</a>

                <div v-if="reserveClicked">
                    <!-- TODO: refactor into component -->
                    <table>
                        <thead>
                            <tr>
                                <th colspan="3">Add Accessories ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="accessory in accessories" :key="accessory.id">
                                <td>
                                    <label :for="`acc_${accessory.name}`">{{ accessory.name }}</label>
                                </td>
                                <td><span class="price">${{ accessory.price.toFixed(2) }}</span></td>
                                <td>
                                    <input type="checkbox" :value="accessory.id" v-model="selectedAccessoryIds" :id="`acc_${accessory.name}`">
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- TODO: refactor into component -->
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">Additional Add-ons</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="addon in addons" :key="addon.id">
                                <td>
                                    <label :for="`acc_${addon.name}`">{{ addon.name }}</label>
                                </td>
                                <td><span class="price">${{ addon.price.toFixed(2) }}</span></td>
                                <td>
                                    <input type="checkbox" :value="addon.id" v-model="selectedAddonIds" :id="`acc_${addon.name}`">
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <b>Total Price: </b> <span class="price">${{  totalPrice.toFixed(2) }}</span>
                    </div>

                    <a @click.prevent="handleConfirmationClick" class="button">Confirm Reservation</a>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ProductJSON from '~/static/bikerentals.json';
    import _ from 'lodash';
    import Swal from 'sweetalert2';

    export default {
        validate ({ params }) {
            return /^\d+$/.test(params.id)
        },

        asyncData: (context) => {
            const item = _.find(ProductJSON.products, (product) => product.id === parseInt(context.params.id, 10) ),
                accessories = _.filter(ProductJSON.products, (product) => product.product_type === 'accessory'),
                addons = _.filter(ProductJSON.products, (product) => product.product_type === 'addon')
            return {
                item,
                mainItemPrice: item.price,
                accessories: _.mapKeys(accessories, (val) => val.id),
                addons: _.mapKeys(addons, (val) => val.id),
            };
        },

        data: () => {
            return {
                reserveClicked: false,
                selectedAccessoryIds: [],
                selectedAddonIds: []
            }
        },

        methods: {
            handleReserveClick() {
               this.reserveClicked = true;
            },

            handleConfirmationClick() {
                const vm = this;

                Swal({
                    title: 'Reservation Complete',
                    html: `You're all set. You will be charged <b>$${vm.totalPrice.toFixed(2)}</b>`,
                    type: 'success',
                    confirmButtonText: 'Return Home'
                }).then( (result) => {
                   vm.$router.push('/');
                })
            }
        },

        computed: {
            totalPrice() {
                const vm = this;

                return vm.mainItemPrice + 
                vm.selectedAccessoryIds.reduce((prev, curr) => { return prev + vm.accessories[curr].price }, 0) +
                vm.selectedAddonIds.reduce((prev, curr) => { return prev + vm.addons[curr].price }, 0);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .price {
        color: green;
        font-weight: bold;
    }

    .product-meta {
        margin-bottom: 1rem;
    }

    .button
    {
        max-width: 250px;
    }

    @media all and(min-width: 800px) {
        .product-container {
            display: flex;
        }

        .product-meta {
            width: 28%;
            margin-bottom: 0;
        }

        .product-desc {
            width: 68%;
        }
    }
</style>
