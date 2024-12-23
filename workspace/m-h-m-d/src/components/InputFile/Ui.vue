<script setup lang="ts">
import { computed } from 'vue';
import { inputFileClasses } from '../../styles/InputFileClasses';

const props = defineProps({
  label: String,
  accept: String,
  multiple: Boolean,
  variant: String,
  size: String,
  containerClass: String,
  text: String,
  labelIcon: String
});

const sizeClass = computed(() => inputFileClasses.sizeClasses[props.size as 'sm' | 'md' | 'lg' || 'md']);
const variantClass = computed(() => inputFileClasses.variantClasses[props.variant || 'default']);

defineEmits(['change']);

const icons = {
  upload: `<svg class="w-8 h-8 mb-4 text-gray-500" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>`,
  cloud: `<svg class="w-8 h-8 mb-4 text-gray-500" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`
};

const getIcon = (iconName) => {
  return icons[iconName] || icons.cloud;
};
</script>

<template>
  <div :class="inputFileClasses.containerClass">
    <div :class="inputFileClasses.containerClass">
      <!-- Label slot -->
      <slot name="label">
        <label v-if="label" :class="inputFileClasses.labelClass">
          <span v-html="labelIcon ? getIcon(labelIcon) : ''"></span>
          {{ label }}
        </label>
      </slot>

      <div :class="inputFileClasses.uploadContainerClass">
        <label :class="[inputFileClasses.uploadLabelClass, sizeClass, variantClass]">
          <div :class="inputFileClasses.uploadInnerClass">
            <!-- Icon slot -->
            <slot name="icon">
              <span v-html="getIcon('cloud')"></span>
            </slot>
            
            <!-- Text slot -->
            <slot name="text">
              <p :class="inputFileClasses.uploadTextClass">
                {{ text || 'Click to upload or drag and drop' }}
              </p>
            </slot>
          </div>

          <!-- Preview slot -->
          <slot name="preview" />

          <input
            type="file"
            :class="inputFileClasses.hiddenInputClass"
            :accept="accept"
            :multiple="multiple"
            @change="$emit('change', $event)"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>

