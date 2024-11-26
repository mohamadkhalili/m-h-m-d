import { PropType } from 'vue';

export const dividerProps = {
  direction: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  color: { type: String, default: '' },
  length: { type: String, default: '100%' },
  text: { type: String, default: '' },
};
