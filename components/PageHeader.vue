<template>
    <header>
        <nuxt-link to="/">
            <h1>{{ title }}</h1>
        </nuxt-link>
    </header>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        padding: 0 1rem;
        width: 100%;

        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,cccccc+100 */
        background: #ffffff; /* Old browsers */
        background: -moz-linear-gradient(top, #ffffff 0%, #cccccc 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #ffffff 0%,#cccccc 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #ffffff 0%,#cccccc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#cccccc',GradientType=0 ); /* IE6-9 */

        border-bottom: 1px solid #CCC;
        box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.4);

        a {
            text-decoration: none;
            color: inherit;
        }
    }
</style>
