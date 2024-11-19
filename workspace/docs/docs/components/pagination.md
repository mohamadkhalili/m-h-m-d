# Pagination

<script setup>
import { ref } from 'vue'

// If your component is **not** globally registered, uncomment the next line and adjust the path accordingly
// import MyComponent from '@path/to/MyComponent.vue'

const inputValue1 = ref()
const inputValue2 = ref()
const inputValue3 = ref()
const inputValue4 = ref()
const inputValue5 = ref()
const inputValue6 = ref()
const inputValue7 = ref()
const inputValue8 = ref()
const inputValue9 = ref()
const inputValue10 = ref()
const searchValue = ref()
const isEditingSearchPage = ref()
</script>

this is default pagination:
<Pagination v-model="inputValue1" v-model:searchPage="searchValue" v-model:isEditingSearchPage="isEditingSearchPage"/>

```vue
<Pagination v-model="inputValue" v-model:searchPage="searchValue" 
v-model:isEditingSearchPage="isEditingSearchPage"/>
```

with ltr:
<div class="ml-44">
<Pagination v-model="inputValue2" :enableSearchPage="false" :rtl="false"/>
</div>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :rtl="false"/>
```

search page is not active:

<Pagination v-model="inputValue3" :enableSearchPage="false"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false"/>
```

set page size:

<Pagination v-model="inputValue4" :enableSearchPage="false" :pageSize="10"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :pageSize="10"/>

```

set color:

<Pagination v-model="inputValue5" :enableSearchPage="false" :color="'bg-black'" :activeColor="'bg-indigo-100'" :textColor="'text-indigo-300'" :activeTextColor="'text-black'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:color="'bg-black'" :activeColor="'bg-indigo-100'" 
:textColor="'text-indigo-300'" :activeTextColor="'text-black'"/>
```

set page size:

<Pagination v-model="inputValue6" :enableSearchPage="false" :size="'size-8'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:size="'size-8'"/>
```

set page rounded:

<Pagination v-model="inputValue7" :enableSearchPage="false" :borderRadiusSize="'rounded'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:borderRadiusSize="'rounded'"/>
```

set page border:

<Pagination v-model="inputValue8" :enableSearchPage="false" :borderStyle="'border-emerald-600 border-2'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:borderStyle="'border-emerald-600 border-2'"/>
```