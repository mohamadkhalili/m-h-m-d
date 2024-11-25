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
  Color: {
    type: String,
    default: '',
  },

};
