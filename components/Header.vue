<template>
    <header class="grid-x">
    <div class="large-12 medium-12 columns">
        <h1 v-text="headline"></h1>
    </div>
    </header>
</template>
<script>
    export default {
        data () {
            const home = ["Home", "First things first, Amarilliss", "Good morning, Batman", "I give it a light to decent 4",
                "Only the dead can know peace from this fun", "Call your mom", "G'day, mate"];
            let title = home[Math.floor(Math.random() * home.length)];
            return {
                headline: title
            };
        }
    }
</script>