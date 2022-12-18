<template>
    ghghfhgf
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/api.js'

const route = useRoute()
const router = useRouter()
const productId = ref('')

onMounted(() => {
    productId.value = route.params.id
    api.getProduct(productId.value)
});
</script>