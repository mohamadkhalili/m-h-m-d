<script setup>
import { ref, computed } from 'vue';
import { TabProps } from './props';
import { useBgColorClassName, useColorClassName ,useShadowColorClassName} from '../../composables/ColorComposable';
import Core from './Core.vue';

const props = defineProps(TabProps);

const sizeTab = computed(() => {
  switch(props.size){
    case 'sm':
      return 'text-sm'
    case 'md':
      return 'text-md'
      case 'lg':
      return 'text-lg'
      case 'xl':
      return 'text-xl bg-black'
      case '2xl':
      return 'text-bold text-2xl text-lg'
     default:
     return 'text-sm'
  }
});

const activeTab = ref(props.modelValue || props.tabs[0]?.value);
const emit = defineEmits(['update:modelValue']);
const bgColorClass = useBgColorClassName(props);
const textColorClass = useColorClassName(props);
const ShadowColorClass = useShadowColorClassName(props);

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return 'relative after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 bg-transparent';
    case 'bordered':
      return 'relative border-2 border-transparent hover:border-blue-500 transition-all duration-300';
    case 'shadow':
      return ' bg-transparent relative after:content after:absolute after:w-full after:h-[1px] after:bg-gray-200 ';


     case 'mirror':
  return `
    relative flex items-center justify-center overflow-hidden bg-transparent rounded-xl
    transition-all duration-500 ease-in-out
    border-2 border-transparent
    bg-gradient-to-br from-white/10 to-gray-400/30
    hover:bg-gradient-to-br hover:from-sky-500/10 hover:to-white/40
    hover:scale-110 active:scale-100
    after:content-[""] after:absolute after:w-full after:h-full after:bg-gradient-to-t 
    after:from-transparent after:to-gray-300/40 after:opacity-0 after:transition-all 
    after:duration-500 hover:after:opacity-100 hover:after:scale-105 hover:after:blur-md
    before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-t 
    before:from-transparent before:to-sky-100/30 before:opacity-0 before:transition-all 
    before:duration-500 hover:before:opacity-100 hover:before:scale-110 hover:before:blur-md
    shadow-2xl shadow-blue-500/10
    hover:shadow-2xl hover:shadow-blue-600/60
    active:shadow-none active:scale-95
  `;




    default:
      return `
        relative flex items-center justify-center overflow-hidden  bg-gradient-to-br
        from-white/20 to-white/10 backdrop-blur-md
        transition-all duration-700 ease-in-out shadow-inner 
        after:content-[""] after:absolute after:inset-0 
        after:bg-gradient-to-br after:from-blue-400/30 after:via-white/10 after:to-transparent
        after:opacity-0 after:scale-75 after:blur-lg
        hover:after:opacity-60 hover:after:scale-[1.15] hover:after:blur-md
        before:content-[""] before:absolute before:w-[140%] before:h-[140%]
        before:bg-gradient-to-br before:from-blue-200/20 before:to-white/5
        before:opacity-0 before:scale-0 before:transition-transform before:duration-700
        hover:before:scale-100 hover:before:opacity-50 active:before:scale-90 active:before:opacity-30
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
      :class="layoutClass"
    >

 
      <div v-for="(tab, index) in props.tabs" :key="tab.value" class="relative">
        <button
        @click="!props.isDisabled && selectTab(tab.value)"
  :disabled="props.isDisabled"
  :class="[
   
    `py-2 px-4 transition-all hover:brightness-90 duration-100 ease-in-out border-x-8`,
    getButtonStyleClass,sizeTab,
    
    activeTab === tab.value ? bgColorClass.active : bgColorClass.onActive,
    activeTab === tab.value ? textColorClass.active : textColorClass.onActive,
    activeTab === tab.value ? ShadowColorClass.active : ShadowColorClass.onActive,
    props.isDisabled ? 'opacity-50 cursor-not-allowed' : '',
            props.variant === 'underline' && activeTab === tab.value ? 'after:scale-x-100' : 'after:scale-x-0',
            props.variant === 'shadow' && activeTab === tab.value ? 'shadow-md transition-all duration-300  active:scale-95 rounded-lg ' : '',
            props.variant === 'shadow' && activeTab !== tab.value ? 'shadow-inner transition-all duration-300  rounded-lg active:scale-95    ' : '',
            props.variant === 'bordered' 
  ? `relative overflow-hidden rounded-md bg-transparent ring-1 
     ${activeTab === tab.value 
       ? 'after:translate-x-0 after:scale-x-100 after:opacity-100 ring-gray-200 ' 
       : 'after:translate-x-[-100%] after:scale-x-10 after:opacity-0 ring-gray-200'} 
     transition-all duration-700`
  : '',

            !vertical ? (props.variant === 'default' && index === 0 ? 'rounded-l-full' : ''):(props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
            !vertical ?( props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-r-full' : ''):( props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
              props.vertical ? 'w-full ' : '',
             
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
