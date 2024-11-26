import { PropType } from 'vue';

export const dividerProps = {
  direction: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  color: { type: String, default: 'gray' },
  thickness: { type: String, default: '1px' },
  dashed: { type: Boolean, default: false },
  length: { type: String, default: '100%' },
  text: { type: String, default: '' },
};
