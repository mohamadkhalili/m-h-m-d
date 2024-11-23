<script setup>
import { ref, computed } from 'vue';
import { TabProps } from './props';
import Core from './Core.vue';

const props = defineProps(TabProps);
const emit = defineEmits(['update:modelValue']);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);




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
      return 'relative border-2 border-transparent  transition-all duration-300';
    case 'shadow':
      return 'bg-transparent relative after:content after:absolute after:w-full after:h-[1px] after:bg-gray-200';
      case 'mirror':
      return `
        relative inline-flex items-center justify-center overflow-hidden
        after:content-[""]
        after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
        after:bg-yellow-00 after:scale-x-0 after:transition-all after:duration-300 ease-out
        hover:after:scale-x-100 hover:after:left-0
        active:after:scale-x-100
      `;
    default:
      return `
        relative flex items-center justify-center overflow-hidden bg-gradient-to-br
        from-white/20 to-white/10 backdrop-blur-md
        transition-all duration-700 ease-in-out ${props.variant != "bordered" ?'shadow-inner' : ' '} 
        after:content-[""] after:absolute after:inset-0
        after:bg-gradient-to-br after:from-blue-400/30 after:via-white/10 after:to-transparent
        after:opacity-0 after:scale-75 after:blur-lg
   
        before:content-[""] before:absolute before:w-[140%] before:h-[140%]
        before:bg-gradient-to-br before:from-blue-200/20 before:to-white/5
        before:opacity-0 before:scale-0 before:transition-transform before:duration-700
      active:before:opacity-30
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
  <div>
    <Core
      :variant="props.variant"
      :is-disabled="props.isDisabled"
      :class="[layoutClass,props.variant==='bordered' ? '  ring-2 p-2 relative  rounded-lg ring-gray-300 hover:ring-gray-400 transition-all duration-300':'']"
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
    props.variant === 'shadow' && activeTab === tab.value ? 'shadow-[inset_0px_4px_4px_0px] transition-all duration-300 rounded-lg  ' : '',
    props.variant === 'shadow' && activeTab !== tab.value ? 'shadow-[0px_1px_4px_0px] transition-all duration-300 rounded-lg ' : '',
    props.variant === 'mirror'
      ? `relative overflow-hidden rounded-md bg-transparent ring-1
          ${activeTab === tab.value
            ? 'after:translate-x-0 after:scale-x-100 after:opacity-100 ring-gray-200'
            : 'after:translate-x-[-100%] after:scale-x-10 after:opacity-0 ring-gray-200'}
          transition-all duration-700`
      : '',
    !props.vertical ? (props.variant === 'default' && index === 0 ? 'rounded-l-full' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
    !props.vertical ? (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-r-full' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    !props.vertical ? (props.variant === 'bordered' && index === 0 ? 'rounded-l-lg' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-lg' : ''),
    !props.vertical ? (props.variant === 'bordered' && index === props.tabs.length - 1 ? 'rounded-r-lg' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    props.vertical ? 'w-full' : '',
    // اضافه کردن activeTextColor و activeColor
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
