<script setup>
    defineProps({
        imageUrl: {
            type: String,
            required: true
        }
    })
</script>

<template>
  <article>
    <img :src="imageUrl"/>
  </article>
</template>

<style scoped>
    article{
        width: 100%;
        max-width: 190px;
        height: 260px;
        border: 4px solid #fff;
        border-radius: 21%;
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 21%;
    }

</style>
