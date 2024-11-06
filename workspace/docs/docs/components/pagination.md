# Pagination

<script setup>
import { ref } from 'vue'

// If your component is **not** globally registered, uncomment the next line and adjust the path accordingly
// import MyComponent from '@path/to/MyComponent.vue'

const inputValue1 = ref()
const inputValue2 = ref()
const searchValue = ref()
const isEditingSearchPage = ref()
</script>

<!-- Use the component with v-model binding -->
<Pagination v-model="inputValue1" v-model:searchPage="searchValue" size="size-10" border-radius-size="rounded-full" :pageSize="10" :enableSearchPage="false"/>

You can also write more Markdown content here.

<Pagination v-model="inputValue2" v-model:searchPage="searchValue" v-model:isEditingSearchPage="isEditingSearchPage" :pageSize="10" />
