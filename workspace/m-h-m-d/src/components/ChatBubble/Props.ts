import { PropType } from "vue"

export const ChatBubbleProps ={

    

}
export const SideChatBubble ={

    Side: {
        type: String as PropType<'left' | 'right'>
      },

      subSide: {
        type: String as PropType<'top' | 'bottom'>
      },

    

}