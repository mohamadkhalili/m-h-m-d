export const cardProps = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  footer: {
    type: String,
    default: '',
  },
  header: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'default',  // مقدار پیش‌فرض واریانت
    validator: (value: string) => ['default', 'post'].includes(value),
  },
};
