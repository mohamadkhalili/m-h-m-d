# InputFile

File upload component with drag and drop functionality.

## Usage

### Basic File Upload

<InputFile
  label="Upload File"
  accept=".jpg,.png"
  :multiple="true"
  @update:modelValue="handleFiles"
  @change="handleFiles"
/>

<InputFile variant="outlined" label="Outlined Style" />
<InputFile variant="minimal" label="Minimal Style" />
<InputFile variant="default" label="Default Style" />
<InputFile size="sm" label="Small Input" />
<InputFile size="md" label="Medium Input" />
<InputFile size="lg" label="Large Input" />

<InputFile label="Custom Icon">

  <template #icon>
    <svg class="w-8 h-8" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
    </svg>
  </template>
</InputFile>

<InputFile label="Custom Text">
  <template #upload-text>
    <p class="text-primary-600 font-bold">
      Drop your files here or browse
    </p>
  </template>
</InputFile>

<InputFile label="With Preview">
  <template #file-preview="{ files }">
    <div class="mt-4 space-y-2">
      <div v-for="file in files" :key="file.name" class="text-sm text-gray-600">
        {{ file.name }}
      </div>
    </div>
  </template>
</InputFile>

## Container Sizes

<InputFile containerClass="w-64 mx-auto" /> <!-- Fixed width -->
<InputFile containerClass="max-w-sm" /> <!-- Max width small -->
<InputFile containerClass="w-full max-w-xl" /> <!-- Full width with max width -->


<!-- Full customization with slots -->
<InputFile
  accept=".jpg,.png"
  variant="outlined"
>
  <template #label>
    <div class="flex items-center gap-2">
      <CustomIcon name="upload" />
      <span>Upload Files</span>
    </div>
  </template>

  <template #icon>
    <CustomIcon name="cloud-upload" class="w-12 h-12" />
  </template>

  <template #text>
    <div class="text-center">
      <p class="font-bold">Drop files here</p>
      <p class="text-sm text-gray-500">or click to browse</p>
    </div>
  </template>

  <template #preview="{ files }">
    <FileList :files="files" />
  </template>
</InputFile>