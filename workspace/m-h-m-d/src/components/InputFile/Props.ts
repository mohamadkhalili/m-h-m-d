// Props.ts
export const inputFileProps = {
  label: {
    type: String,
    default: ''
  },
  accept: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'dropzone'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  containerClass: {
    type: String,
    default: 'max-w-md mx-auto' 
  },
  icon: {
    type: String,
    default: 'cloud'
  },
  text: {
    type: String,
    default: ''
  },
  labelIcon: {
    type: String,
    default: ''
  }
};