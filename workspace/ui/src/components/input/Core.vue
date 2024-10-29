<script setup>
import { ref } from 'vue';


import Ui from './Ui.vue'
const title =ref(0);
</script>

<template>


<Ui   :title="title">

    <slot class="bg-gray-950"></slot>

</Ui>


</template>


