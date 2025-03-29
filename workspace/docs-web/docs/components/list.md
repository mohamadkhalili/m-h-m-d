# list

## Default List

**Props:**

- `v-model`: Binds the item state of the list.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <p>item in this list: {{ listValue }}</p>
  <List v-model='listValue'></List>
</div>
"
scriptCode="
export default {
data() {
    return {
      listValue : '',
    }
  }
}
"
/>

## set herizontal for List

**Props:**

- `herizontal`: Displays the list items in a horizontal layout.
<CodeTabs
  templateCode="

<div class='flex flex-col items-center justify-center'>
  <p>item in this list: {{ listValue }}</p>
  <List v-model='listValue' herizontal></List>
</div>
"
scriptCode="
export default {
data() {
    return {
      listValue : '',
    }
  }
}
"
/>

## set tooltip for List

**Props:**

- `tooltip`:  Enables tooltips for list items.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <p>item in this list: {{ listValue }}</p>
  <List v-model='listValue' tooltip></List>
</div>
"
scriptCode="
export default {
data() {
    return {
      listValue : '',
    }
  }
}
"
/>

## set items for List

**Props:**

- `items`: Provides the list of items to display.
<CodeTabs
  templateCode="

<div class='flex flex-col items-center justify-center'>
  <p>item in this list: {{ listValue }}</p>
  <List v-model='listValue' :items='customItems'></List>
</div>
"
  scriptCode="
export default {
  data() {
    return {
      listValue: '',
      customItems: ['apple', 'banana', 'mango', 'orange']
    };
  }
}
"
/>

## set custom class for List

**Props:**

- `activeClass`: Custom class applied to the active list item.
- `onActiveClass`: Custom class applied to non-active list items.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <p>item in this list: {{ listValue }}</p>
  <List v-model='listValue' activeClass='bg-indigo-700 hover:bg-indigo-600 text-white w-32 h-10' onActiveClass='bg-indigo-200 hover:bg-indigo-300 w-32 h-10'></List>
</div>
"
  scriptCode="
export default {
  data() {
    return {
      listValue: '',
      customItems: ['apple', 'banana', 'mango', 'orange']
    };
  }
}
"
/>
