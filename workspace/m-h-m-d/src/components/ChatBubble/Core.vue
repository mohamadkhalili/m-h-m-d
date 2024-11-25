
  <script setup lang="ts">
  import { ChatBubbleProps } from './Props'; 
  import { ChatBubbleEmits } from './Emits';  
  
  const props = defineProps(ChatBubbleProps);  
  const emit = defineEmits(ChatBubbleEmits);  
  </script>
  <template>
    <div>
      <slot name="ChatBubble"></slot>
    </div>
  </template>
  