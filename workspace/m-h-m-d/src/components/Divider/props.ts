import { PropType } from "vue";

export const dividerProps = {
  direction: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  color: { type: String, default: 'bg-gray-400' },
  textColor: { type: String, default: 'text-gray-400' }, 
  diameter: { type: String, default: '1px' },
  length: { type: String, default: '100%' },
  text: { type: String, default: '' },
  position:{Type:String,default:''}
};
