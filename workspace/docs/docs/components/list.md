# list

<script setup lang="ts">
import { ref } from 'vue'
const listValue = ref("");
const listValue2 = ref("");
const listValue3 = ref("");
const listValue4 = ref("");
const listValue5 = ref("");
const custonItems = ref<string[]>(["apple", "benana", "mango", "orange"]);
</script>

## Default List

**Props:**

- `v-model`: Binds the item state of the list.

<p>item in this list: {{listValue}}</p>

<List v-model="listValue"></List>

```vue
<List v-model="listValue"></List>
```

## set herizontal for List

**Props:**

- `herizontal`: Displays the list items in a horizontal layout.

<p>item in this list: {{listValue2}}</p>

<List v-model="listValue2" herizontal></List>

```vue
<List v-model="listValue" herizontal></List>
```

## set tooltip for List

**Props:**

- `tooltip`:  Enables tooltips for list items.

<p>item in this list: {{listValue3}}</p>

<List v-model="listValue3" tooltip></List>

```vue
<List v-model="listValue" tooltip></List>
```

## set items for List

**Props:**

- `items`: Provides the list of items to display.

<p>item in this list: {{listValue4}}</p>

<List v-model="listValue4" :items="custonItems"></List>

```vue
<script setup>
const custonItems = ref<string[]>(["apple", "benana", "mango", "orange"]);
</script>
<List v-model="listValue" :items="custonItems"></List>
```

## set custom class for List

**Props:**

- `activeClass`: Custom class applied to the active list item.
- `onActiveClass`: Custom class applied to non-active list items.

<p>item in this list: {{listValue5}}</p>

<List v-model="listValue5" activeClass="bg-blue-950 hover:bg-blue-900 text-white w-32 h-10" onActiveClass="bg-blue-50 hover:bg-blue-100 w-32 h-10"></List>

```vue
<List v-model="listValue" activeClass="bg-blue-900 hover:bg-blue-800 
text-white w-32 h-10" 
onActiveClass="bg-blue-100 hover:bg-blue-200 w-32 h-10"></List>
```
