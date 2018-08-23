<template>
<div>
    <Header></Header>
    <section class="grid-container">
        <nuxt/>
    </section>
    <span class="weather"></span>
</div>
</template>

<script>
    import Header from '@/components/Header';

    export default {
        components: {
            Header,
        }
    }
</script>