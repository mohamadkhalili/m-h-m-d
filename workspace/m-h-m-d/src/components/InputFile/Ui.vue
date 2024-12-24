<script setup lang="ts">
import { ref } from 'vue';
import { inputFileClasses } from '../../styles/InputFileClasses';
import { useAdapterClass } from '../../composables/UseClass';

const props = defineProps({
  label: String,
  accept: String,
  multiple: Boolean,
  variant: String,
  size: String,
  containerClass: String,
  text: String,
  labelIcon: String,
  icon: String
});
const adapter = useAdapterClass('default-class');

const emit = defineEmits(['change']);

const icons = {
  cloudUpload: `<svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true"  fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>`
};

const getIcon = (iconName: string) => {
  return icons[iconName as keyof typeof icons] || iconName || icons.cloudUpload;
};


const fileIcon = `<svg class="${inputFileClasses.fileIconClass}"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>`;

const fileName = ref('');
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files ? Array.from(target.files) : [];
  fileName.value = files.length > 0 ? files.map(file => file.name).join(', ') : '';
  emit('change', files);
};
</script>

<template>
  <div :class="[adapter(inputFileClasses.containerClass).value, adapter(containerClass || '').value]">
   
    
    <div v-if="variant === 'dropzone'" :class="inputFileClasses.uploadInnerClass" @click.prevent="$refs.fileInput.click()">
  <slot name="icon">
    <span v-html="getIcon(props.icon as keyof typeof icons || 'cloudUpload')"></span>
  </slot>
  
  <slot name="text">
    <p v-if="fileName" :class="inputFileClasses.uploadTextClass">{{ fileName }}</p>
    <p v-else :class="inputFileClasses.uploadTextClass">
      {{ text || 'Click to upload or drag and drop' }}
    </p>
  </slot>
</div>

        <div v-else :class="inputFileClasses.variantClasses.default">
          <span v-if="fileName" :class="inputFileClasses.fileNameClass" :title="fileName">{{ fileName }}</span>
          <span v-else :class="adapter(inputFileClasses.placeholderClass).value">{{ label || 'Choose file' }}</span>
          <span :class="[inputFileClasses.fileNameClass , 'text-gray-500/70']"> | </span>
          <button :class="adapter(inputFileClasses.buttonClass).value" @click.prevent="$refs.fileInput.click()">
            {{ fileName ? 'Change' : 'Browse' }}
          </button>
          <span v-html="fileIcon"></span>
        </div>
        <slot name="preview" />
        <input
          ref="fileInput"
          id="file_input"
          type="file"
          :class="inputFileClasses.hiddenInputClass"
          :accept="accept"
          :multiple="multiple"
          @change="handleFileChange"
        />
     </div>

</template>

<style scoped>
/* Add your styles here */
</style>

