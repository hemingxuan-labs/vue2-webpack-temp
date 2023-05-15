<template>
    <header>
        <router-link to="/">Home</router-link>
        <div class="line">|</div>
        <router-link to="/about">About</router-link>
    </header>
</template>

<script>
export default {
    name: 'headers',
    props: {
        msg: String
    },
    created() {
        this.$store.dispatch('products/getAllProducts')
    }
}
</script>
<style scoped lang="scss">
header {
    height: 50px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
        margin: 0 20px;
    }
}
</style>
