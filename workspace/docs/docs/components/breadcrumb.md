# Breadcrumb
<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref("");
const isModalOpen2 = ref("");
</script>

<br>
<br>
<br>
<Breadcrumb v-model="isModalOpen"/>
<br>
<Breadcrumb v-model="isModalOpen2"><template #separator> &nbsp> </template></Breadcrumb>
