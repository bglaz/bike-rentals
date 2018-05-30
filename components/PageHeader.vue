<template>
    <header>
        <h1>{{ title }}</h1>
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
        padding: 0 1rem;
        width: 100%;

        border-bottom: 1px solid #CCC;
        box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.4);
    }
</style>
