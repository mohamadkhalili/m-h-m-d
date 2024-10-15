# Other Page

Here is the component being used:

<script setup>
import { ref } from 'vue'

// If your component is **not** globally registered, uncomment the next line and adjust the path accordingly
// import MyComponent from '@path/to/MyComponent.vue'

const inputValue = ref()
const searchValue = ref()
</script>

<!-- Use the component with v-model binding -->
<Pagination v-model="inputValue" v-model:searchPage="searchValue" size="size-10" border-radius-size="rounded-full" :pageSize="10" :enableSearchPage="true" class="bg-blue-500"/>

You can also write more Markdown content here.

<Pagination v-model="inputValue" v-model:searchPage="searchValue" :pageSize="10" />
