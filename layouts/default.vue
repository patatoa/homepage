<template>
<div>
    <Header></Header>
    <section class="grid-container">
        <nuxt/>
    </section>
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