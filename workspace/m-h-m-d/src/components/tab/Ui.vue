<script setup>
import { ref, computed } from 'vue';
import { TabProps } from './props';
import Core from './Core.vue';

const props = defineProps(TabProps);
const emit = defineEmits(['update:modelValue']);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);


const position = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'flex flex-col flex-col-reverse gap-2';
    case 'left':
      return 'flex flex-row flex-row gap-2';
    case 'right':
      return 'flex flex-row flex-row-reverse gap-2 ';
    case 'top':
      return 'flex flex-col ';
    default:
      return ' ';
  }
});


const sizeTab = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[12px]';
    case 'md':
      return 'text-md';
    case 'lg':
      return 'text-xl';
    case 'xl':
      return 'text-2xl';
    default:
      return 'text-md';
  }
});

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return 'relative after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ';
    case 'mirror':
      return `  relative inline-flex items-center justify-center overflow-hidden
        after:content-[""] after:absolute after:w-10 after:h-10
        after:bg-gray-600/30 after:opacity-0 
        after:opacity-100  after:scale-100 after:transition-transform
        after:duration-500`
    case 'shadow':
      return ' relative';
      case 'bordered':
      return `
        relative inline-flex items-center justify-center  transition-all duration-1000 
      `;
    default:
      return `
        relative flex items-center justify-center overflow-hidden 
        transition-all duration-700 ease-in-out shadow-inner
      `;
  }
});

const layoutClass = computed(() => (props.vertical ? 'flex flex-col' : 'flex'));

function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div :class="[position , 'items-center']">
    <Core
    :tabs="props.tabs"
      :variant="props.variant"
      :is-disabled="props.isDisabled"
      :class="[layoutClass,props.variant==='bordered' ? '  ring-2 p-2 relative  rounded-lg ring-gray-300 hover:ring-gray-400 transition-all duration-300':''
,
      ]"
    >
      <div v-for="(tab, index) in props.tabs" :key="tab.value" :class="[
        'relative ',
      ]">
        <button
  @click="!props.isDisabled && selectTab(tab.value)"
  :disabled="props.isDisabled"
  :class="[
    'py-2 px-4 transition-all  duration-100 ease-in-out  ',
    getButtonStyleClass,
    sizeTab,
    props.isDisabled ? 'opacity-50 cursor-not-allowed' : '',
    props.variant === 'bordered' && activeTab === tab.value ? 'after:scale-x-50 after:scale-y-50  after:left-0 z-10'  
      : '',
    ,
    props.variant === 'underline' && activeTab === tab.value ? ' after:scale-x-100' : 'after:scale-x-0',
    props.variant === 'shadow' && activeTab === tab.value ? 'shadow-[inset_0px_4px_4px_0px] transition-all duration-200 rounded-lg active:scale-95 ' : '',
    props.variant === 'shadow' && activeTab !== tab.value ? 'shadow-[0px_1px_4px_0px] transition-all duration-200 rounded-lg active:scale-95  ' : '',
    props.variant === 'mirror'
      ? `relative overflow-hidden 
          ${activeTab === tab.value
            ? 'after:translate-x-100 after:scale-0 space-x-10'
            : ' after:scale-x-[200%]  '}
          transition-all duration-700`
      : '',
    !props.vertical ? (props.variant === 'default' && index === 0 ? 'rounded-l-full' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
    !props.vertical ? (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-r-full' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    !props.vertical ? (props.variant === 'mirror' && index === 0 ? 'rounded-l-lg' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
    !props.vertical ? (props.variant === 'mirror' && index === props.tabs.length - 1 ? 'rounded-r-lg' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    props.vertical ? 'w-full' : '',
    activeTab === tab.value ? props.activeTextColor : props.textColor,
    activeTab === tab.value ? props.activeColor : props.color,
    activeTab === tab.value ? props.activeShadow : props.shadow

  ]"
>

          <slot name="label" :tab="tab">
            {{ tab.label }}
          </slot>
        </button>
      </div>
    </Core>

    <div class="mt-4">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="w-full">
        <transition name="fade" mode="out-in">
          <div v-if="tab.content != null" :key="tab.value" class="p-6 rounded-lg bg-transparent shadow-inner">
            <slot name="content" :tab="tab">
              {{ tab.content }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
