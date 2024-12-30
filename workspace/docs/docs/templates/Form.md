# Forms

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''}
];
const footerEnable = ref(true);
</script>

## Sign Up


<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">

<Card class="max-w-md mx-auto py-8 p-2 px-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Sign Up</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <Input
        type="text"
        placeholder="Full Name"
        prefix="👤"
        InputClass="w-full rounded-lg ring-none  ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="email"
        placeholder="Email Address"
        prefix="📧"
        InputClass="w-full rounded-lg ring-0 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        prefix="🔒"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        prefix="🔒"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        prefix="📱"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
      />
      <Button
        type="submit"
        buttonClass="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </Button>
    </form>
  </Card>
</div>
</template>

<template #content2>

 ```md
Card class="max-w-md mx-auto py-8 p-2 px-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Sign Up</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <Input
        type="text"
        placeholder="Full Name"
        prefix="👤"
        InputClass="w-full rounded-lg ring-none  ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="email"
        placeholder="Email Address"
        prefix="📧"
        InputClass="w-full rounded-lg ring-0 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        prefix="🔒"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        prefix="🔒"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        prefix="📱"
        InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
      />
      <Button
        type="submit"
        buttonClass="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </Button>
    </form>
  </Card>
</div>
</template>

```
</template>

<template #content3>
```md
```
</template>
</Tab>  
  
  
  
  
  
  
  
  
  

## Log In

<Tab 
    class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
 <Card class="max-w-sm mx-auto py-10 px-8 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-2xl shadow-2xl">
    <h2 class="text-3xl font-bold text-center mb-8">Welcome Back</h2>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <Input
        type="email"
        placeholder="Enter your email"
        suffix="📧"
        InputClass="w-full rounded-full px-4 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        required
      />
      <Input
        type="password"
        placeholder="Enter your password"
        suffix="🔒"
        InputClass="w-full rounded-full px-4 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
      <Button
        type="submit"
        buttonClass="w-full bg-gray-500  rounded-full font-bold ring-2 hover:shadow-lg hover:bg-purple-500 transition-all duration-300"
      >
        Log In
      </Button>
    </form>
    <div class="mt-6 text-center text-sm ">
      <p>
        Don't have an account? 
        <p  class="font-bold text-yellow-300 hover:cursor-pointer">Sign Up</p>
      </p>
    </div>
  </Card>
    </div>

</template>

<template #content2>

 ```md
<Card class="max-w-md mx-auto py-8 p-2 px-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Log In</h2>
    <form @submit.prevent="handleLogin" class="space-y-4">
     <Input
       type="email"
       placeholder="Email Address"
       prefix="📧"
       InputClass="w-full rounded-lg ring-0 ring-gray-300 dark:ring-gray-600"
       required
     />
     <Input
       type="password"
       placeholder="Password"
       prefix="🔒"
       InputClass="w-full rounded-lg ring-2 ring-gray-300 dark:ring-gray-600"
       required
     />
     <Button
       buttonClass="w-full py-2 px-4  text-white font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
     >
       Log In
     </Button>
    </form>
  </Card>
</div>
</template>

<template #content3>
```md
```
</template>
</Tab>