## Input File

A simple example of the `Input File` component

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile
    label='Choose File'
    accept='.pdf,.doc,.docx'
    @change='handleFileChange'
  />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        handleFileChange: undefined,
      };
    }
  }
  "
/>

## Multiple

you can use `multi` prop  for send multi files

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile multiple label='multi file upload' />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## Drop Zone

you can use `DropZone Variant`   for Different input File style

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile
    variant='dropzone'
    label='Upload Files'
    multiple
    text='Drop your files here or click to browse'
    class='w-full'
  />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## Customize

you can use `icon` prop  for changing icon

<CodeTabs
  templateCode="
<div class='rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile
    variant='dropzone'
    label='Upload Files'
    multiple
    class='w-full bg-indigo-800 rounded-xl hover:bg-indigo-700 transition-all duration-300 text-indigo-200 border-indigo-400 border-4 border-dashed'
    text='Drop your files here or click to browse'
    icon='📤'
  />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## Accept

You can use the `accept` prop to specify the types of files allowed for upload. For example, if you want to only allow PDF files, you can set the prop like this:

```html
<InputFile label="Choose PDF" accept=".pdf" />
```

You can also specify multiple types of files:

```html
<InputFile label="Choose Image or PDF" accept=".jpg,.jpeg,.png,.pdf" />
```

<br/>

## **Handling File Size Limit**

You can limit the file size by listening to the `change` event and validating the file size. For example:

```md
<InputFile label="Choose File" @change="handleFileChange" />
```

<br/>

## **Custom File Preview**

You can add a custom file preview to show a thumbnail or file details after selecting the file:

<CodeTabs
  templateCode="
<div class='p-4 rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile label='Upload Image'>
    <template #fileName='{ name }'>
      <span class='italic'>{{ name }}</span>
    </template>
    <template #preview>
      <img src='https://blog.idrsolutions.com/app/uploads/2017/02/JPEG-1.png' alt='File Preview' class='w-20 h-20' />
    </template>
  </InputFile>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## **Custom File Preview**

You can add a custom file preview to show a thumbnail or file details after selecting the file:

<CodeTabs
  templateCode="
<div class='p-4 rounded-lg shadow-inner flex justify-center items-center'>
  <InputFile label='Upload Image'>
    <template #fileName='{ name }'>
      <span class='italic'>{{ name }}</span>
    </template>
    <template #preview>
      <img src='' alt='File Preview' class='w-20 h-20' />
    </template>
  </InputFile>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## **Loading State**

You can show a loading indicator while the file is being uploaded by using a custom loading state:

```html
<InputFile label="Choose File" @change="uploadFile">
  <template #button>
    <span v-if="isLoading">Uploading...</span>
    <span v-else>Choose File</span>
  </template>
</InputFile>

```

## InputFile Component Features

| **Feature**              | **Description**                                                                                                                | **Usage**                                                                                                           |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Basic Input**           | A simple file input that allows users to choose a file.                                                                         | Use the `<InputFile />` component with the `label` prop to specify the label (e.g., `<InputFile label="Choose File" />`) |
| **Multiple Files**        | Enable the user to select multiple files for upload.                                                                            | Add the `multiple` prop to allow multiple file selection (e.g., `<InputFile multiple label="Select Files" />`)         |
| **File Type Restriction** | Restrict the file types the user can select using the `accept` prop.                                                            | Use the `accept` prop to define acceptable file types (e.g., `<InputFile accept=".pdf,.jpg" label="Choose File" />`)    |
| **Dropzone Variant**      | A file upload variant that provides a drop zone for dragging and dropping files.                                                | Use the `variant="dropzone"` prop to enable this feature (e.g., `<InputFile variant="dropzone" label="Upload Files" />`) |
| **Custom File Icon**      | Customize the icon that appears in the file input.                                                                              | Use the `icon` prop or a slot to define a custom icon (e.g., `<InputFile icon="📤" label="Upload File" />`)             |
| **File Name Display**     | Display the name of the selected file.                                                                                         | Use the `fileName` slot to show the file name (e.g., `<template #fileName="{ name }"><span>{{ name }}</span></template>`) |
| **File Preview**          | Show a preview of the file after selection (e.g., images or PDFs).                                                             | Use the `preview` slot to display a preview (e.g., `<template #preview><img src="path_to_preview_image" /></template>`) |
| **Custom Text**           | Customize the text shown inside the dropzone when no file is selected.                                                         | Use the `text` slot or `text` prop (e.g., `<InputFile variant="dropzone" text="Drop your files here" />`)             |
| **Loading State**         | Display a loading state while a file is being uploaded.                                                                        | Use the `v-if` directive inside the `button` slot to show loading text (e.g., `<span v-if="isLoading">Uploading...</span>`) |
| **File Size Limit**       | Limit the size of files that can be uploaded by validating the file size in the `change` event.                                 | Listen to the `@change` event and check file size (e.g., `@change="handleFileChange"` to handle the validation logic`)   |
