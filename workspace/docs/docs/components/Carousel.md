
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



## Customize and example
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
:items="['https://npr.brightspotcdn.com/dims4/default/3117f50/2147483647/strip/true/crop/6016x3705+0+311/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff1%2F20%2Fa6084dbd440bbe754fd204e14a1d%2F7-15-23-rsp-telescope-2.jpg', 
'https://media.q4launch.website/uploads/sites/25/2021/02/Redfish-Shot-3-Heyburn-MW-Core-hero.jpg',
'https://omdarksky.com/site/wp-content/uploads/2020/05/om6-1-of-1.jpg',
'https://thelovat.com/media/x0vivjkb/wil-stewart-t26kcgcpsci-unsplash.jpg?center=0.70544279901057094,0.46146597431783237&mode=crop&quality=60&width=2000&height=1530&rnd=133221445229470000']" 
arrowsClass="text-gray-400 bg-transparent "
imageClass="w-full h-[400px]"
autoPlay
variants="number" 
variantClass="text-white"
class="rounded-xl shadow-inner"
/>
</div>

</template>


  <template #content2>

  ```md
<Carousel 
:items="['image1', 
'image2',
'image3']" 
arrowsClass="ring-2 ring-yellow-500 bg-black text-yellow-200"
variantClass="ring-2 ring-yellow-500 "
autoPlay
/>
```
  </template>
</Tab>

