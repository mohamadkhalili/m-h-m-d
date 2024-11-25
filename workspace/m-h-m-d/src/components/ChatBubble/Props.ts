import { PropType } from 'vue';

export const ChatBubbleProps = {
  Side: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  TopChat: {
    type: String,
    default: '',
  },
  downChat: {
    type: String,
    default: '',
  },
  Avatar: {
    type: String,
    default: '',
  },
};
