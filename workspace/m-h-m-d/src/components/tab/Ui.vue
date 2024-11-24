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
      return 'flex flex-col flex-col-reverse ';
    case 'left':
      return 'flex flex-row flex-row ';
    case 'right':
      return 'flex flex-row flex-row-reverse ';
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
      return 'relative after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 border-none';
    case 'mirror':
      return `  relative inline-flex items-center justify-center overflow-hidden
        after:content-[""] after:absolute after:w-10 after:h-10
        after:bg-gray-600/30 after:opacity-0 
        after:opacity-100  after:scale-100 after:transition-transform
        after:duration-500 border-none`
    case 'shadow':
      return ' relative';
      case 'bordered':
      return `
        relative inline-flex items-center justify-center 
      `;
    default:
      return `
        relative flex items-center justify-center overflow-hidden 
        transition-all duration-700 ease-in-out 
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
      :class="[layoutClass
,
      ]"
    >
      <div v-for="(tab, index) in props.tabs" :key="tab.value" :class="[
        'relative ',
      ]">
        <label
  @click="!props.isDisabled && selectTab(tab.value)"
  :disabled="props.isDisabled"
  :class="[
    'py-2 px-4 transition-all  duration-200 ease-in-out cursor-pointer border-[1px] select-none',
    getButtonStyleClass,
    sizeTab,
    props.isDisabled ? 'opacity-50 cursor-not-allowed' : '',
     !props.vertical && props.position =='top' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-b-0 active:scale-95 ' : '') : '' ,
     !props.vertical && props.position =='bottom' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-t-0 active:scale-95 ' : '') : '' ,
     props.vertical && props.position =='left' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-r-0 active:scale-95 ' : '') : '' ,
     props.vertical && props.position =='right' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-l-0 active:scale-95 ' : '') : '' ,


     
      props.variant === 'bordered' && activeTab !== tab.value ? ' active:scale-95'  
      : '',
    ,
    props.variant === 'underline' && activeTab === tab.value ? ' after:scale-x-100' : 'after:scale-x-0',
    props.variant === 'underline' && activeTab !== tab.value ? ' after:scale-x-0 after:bg-gray-400 ' : 'after:scale-x-0',

    props.variant === 'shadow' && activeTab === tab.value ? ' bg-gray-200 border-0 border-x-8 active:scale-95 ' : '',
    props.variant === 'shadow' && activeTab !== tab.value ? '  border-x-2  active:scale-95  ' : '',


    props.variant === 'default' && activeTab === tab.value ? '' : '',
    props.variant === 'default' && activeTab !== tab.value ? '' : '',


    props.variant === 'mirror'
      ? `relative overflow-hidden 
          ${activeTab === tab.value
            ? 'after:translate-x-100 after:scale-0 space-x-10'
            : ' after:scale-x-[200%]  '}
          transition-all duration-700`
      : '',
    !props.vertical ? (props.variant === 'default' && index === 0 ? 'rounded-l-full' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
    !props.vertical ? (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-r-full' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    props.vertical ? 'w-full' : '',
    activeTab === tab.value ? props.activeTextColor : props.textColor,
    activeTab === tab.value ? props.activeColor : props.color,
    activeTab === tab.value ? props.activeShadow : props.shadow

  ]"
>

          <slot name="label" :tab="tab">
            {{ tab.label }}
          </slot>
        </label>
      </div>
    </Core>

    <div class="w-full  ">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="p-6">
        <transition name="slide-right" mode="out-in">
          <div v-if="tab.content != null" :key="tab.value" class="">
            <slot name="content" :tab="tab" :class="[ 'animate-ping' ]">
              {{ tab.content }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>