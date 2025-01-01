
<script setup>
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'code', value: 2, content: ''}
];

</script>


## Carousel

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class='   rounded-lg shadow-inner  flex justify-center items-center'>
<Carousel 
:items="['https://flowbite.com/docs/images/examples/image-2@2x.jpg', 
'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
'https://flowbite.com/docs/images/examples/image-3@2x.jpg']" 
arrowsClass="text-gray-300"
variantClass="hidden"
/>
</div>

</template>


  <template #content2>

  ```md
<Carousel 
:items="['image1', 
'image2',
'image3']" 
arrowsClass="text-gray-300"
variantClass="hidden"
/>
```
  </template>
</Tab>


## AutoPlay
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class='   rounded-lg shadow-inner  flex justify-center items-center'>
<Carousel 
:items="['https://flowbite.com/docs/images/examples/image-2@2x.jpg', 
'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
'https://flowbite.com/docs/images/examples/image-3@2x.jpg']" 
arrowsClass="text-gray-300"
variantClass="hidden"
autoPlay
/>
</div>

</template>


  <template #content2>

  ```md
<Carousel 
:items="['image1', 
'image2',
'image3']" 
arrowsClass="text-gray-300"
variantClass="hidden"
autoPlay
/>
```
  </template>
</Tab>

## Variants

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class='   rounded-lg shadow-inner  flex  flex-col gap-2 justify-center items-center'>
<Carousel 
:items="['https://flowbite.com/docs/images/examples/image-2@2x.jpg', 
'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
'https://flowbite.com/docs/images/examples/image-3@2x.jpg']" 
arrowsClass="text-gray-300"
autoPlay
variants="lines" 
/>
<Carousel 
:items="['https://flowbite.com/docs/images/examples/image-2@2x.jpg', 
'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
'https://flowbite.com/docs/images/examples/image-3@2x.jpg']" 
arrowsClass="text-gray-300"
autoPlay
variants="dots" 
/>
<Carousel 
:items="['https://flowbite.com/docs/images/examples/image-2@2x.jpg', 
'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
'https://flowbite.com/docs/images/examples/image-3@2x.jpg']" 
arrowsClass="text-gray-300"
autoPlay
variants="number" 
variantClass="text-gray-200"
/>

</div>

</template>


  <template #content2>

  ```md
<Carousel 
:items="['image1', 
'image2',
'image3',...]" 
autoPlay,
variants="lines" <!--you can change it with dots or number-->
/>
```
  </template>
</Tab>




<Carousel :items="['https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png', 'https://www.getbgd.com/wp-content/uploads/2017/05/placeholder-image.png','https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png']" autoPlay variants="number" />

<Carousel 
    :items="[
      'https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png', 
      'https://www.getbgd.com/wp-content/uploads/2017/05/placeholder-image.png',
      'https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png'
    ]"  
    variants="dots"  
    arrowsClass="bg-green-500 text-green-800"
    autoPlay
  />