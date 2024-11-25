import { PropType } from 'vue';

export const ChatBubbleProps = {
  Side: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  leftSubChat: {
    type: String,
    default: '',
  },
  rightSubChat: {
    type: String,
    default: '',
  },
  Header: {
    type: String,
    default: '',
  },
  
  HeaderSub: {
    type: String,
    default: '',
  },
  Avatar: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'bg-blue-500 text-white',
  },
  typing: {
    type: Boolean,
    default: false,
  },

};
