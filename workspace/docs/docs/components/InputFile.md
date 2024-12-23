

<script setup>
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];

</script>

## Input File

A simple example of the `Input File` component

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
<InputFile 
  label="Choose File" 
  accept=".pdf,.doc,.docx" 
  @change="handleFileChange"
/>

</div>

</template>

  <template #content2>

  ```md
<InputFile label="Choose File">
          <template #icon>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </template>
          <template #button>
            <span class="text-blue-500">Select Files</span>
          </template>
          <template #fileName="{ name }">
            <span class="italic">{{ name }}</span>
          </template>
        </InputFile>
</template>

```
  </template>
    <template #content3>

```md
<InputFile   />
```
  </template>

</Tab>


## Multiple

you can use `multi` prop  for send multi files
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="  p-6 rounded-lg shadow-inner  flex justify-center items-center ">
<InputFile multiple label="multi file upload" />
</div>

</template>

  <template #content2>

  ```md
<InputFile label="Choose File" multiple>
          <template #icon>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </template>
          <template #button>
            <span class="text-blue-500">Select Files</span>
          </template>
          <template #fileName="{ name }">
            <span class="italic">{{ name }}</span>
          </template>
        </InputFile>

```
  </template>
    <template #content3>

```md
<InputFile  multiple   label='multi file upload'/>
```
  </template>

</Tab>

## Drop Zone

you can use `DropZone Variant`   for Different input File style
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="  p-6 rounded-lg shadow-inner  flex justify-center items-center ">
<InputFile 
  variant="dropzone"
  label="Upload Files"
  multiple
  text="Drop your files here or click to browse"
  class="w-full"
/>


</div>

</template>

  <template #content2>

  ```md
<InputFile variant="dropzone" multiple>
  <template #icon>
    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 16">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
    </svg>
  </template>
  <template #text>
    <p class="mb-2 text-gray-400">Drop your files here or click to browse</p>
  </template>
</InputFile>


```
  </template>
    <template #content3>

```md
<InputFile 
  variant="dropzone"
  label="Upload Files"
  multiple
  text="Drop your files here or click to browse"
  class="w-full"


/>
```
  </template>

</Tab>


## Icon

you can use `icon` prop  for changing icon
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class=" rounded-lg shadow-inner  flex justify-center items-center ">
<InputFile 
  variant="dropzone"
  label="Upload Files"
  multiple
  class="w-full"
  text="Drop your files here or click to browse"
  icon="📤"
/>


</div>

</template>

  <template #content2>

  ```md
<InputFile variant="dropzone" multiple>
  <template #icon>
  📤
  </template>
  <template #text>
    <p class="mb-2 text-gray-400">Drop your files here or click to browse</p>
  </template>
</InputFile>


```
  </template>
    <template #content3>

```md
<InputFile 
  variant="dropzone"
  label="Upload Files"
  multiple
  text="Drop your files here or click to browse"
  icon="📤"
  class="w-full"

/>
```
  </template>

</Tab>

## Accept

You can use the `accept` prop to specify the types of files allowed for upload. For example, if you want to only allow PDF files, you can set the prop like this:


```html
<InputFile label="Choose PDF" accept=".pdf" />
```

You can also specify multiple types of files:

```html
<InputFile label="Choose Image or PDF" accept=".jpg,.jpeg,.png,.pdf" class=' mx-auto' />
```
<br/>



###  **Handling File Size Limit**


You can limit the file size by listening to the `change` event and validating the file size. For example:

```md
<InputFile label="Choose File" @change="handleFileChange" />
```

<br/>


###  **Custom File Preview**

You can add a custom file preview to show a thumbnail or file details after selecting the file:





<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="[ { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''}]"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="p-4 rounded-lg shadow-inner  flex justify-center items-center ">
<InputFile label="Upload Image">
  <template #fileName="{ name }">
    <span class="italic">{{ name }}</span>
  </template>
  <template #preview>
    <img src="https://blog.idrsolutions.com/app/uploads/2017/02/JPEG-1.png" alt="File Preview" class="w-20 h-20" />
    
  </template>
</InputFile>


</div>

</template>

  <template #content2>

  ```md
<InputFile label="Upload Image">
  <template #fileName="{ name }">
    <span class="italic">{{ name }}</span>
  </template>
  <template #preview>
    <img src="https://blog.idrsolutions.com/app/uploads/2017/02/JPEG-1.png" alt="File Preview" class="w-20 h-20" />
    
  </template>
</InputFile>


```
  </template>
    <template #content3>

```md
<InputFile 
  variant="dropzone"
  label="Upload Files"
  multiple
  text="Drop your files here or click to browse"
  icon="📤"
  class="w-full"

/>
```
  </template>

</Tab>