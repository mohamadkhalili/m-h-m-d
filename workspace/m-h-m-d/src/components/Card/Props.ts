export const cardProps = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  avatar: { type: String, required: false },
  weatherImage: { type: String, required: false },
  username: { type: String, required: false },
  time: { type: String, required: false },
  info1: { type: String, required: false },
  info2: { type: String, required: false },
  info3: { type: String, required: false },
  info4: { type: String, required: false },
  cardClass: { type: String, required: false },

  
  variant: { 
    type: String, 
    default: 'default', 
    validator: (value: string) => ['default', 'post', 'weather'].includes(value) 
  },
  horizontal: { type: Boolean, default: false },
  footer: { type: String, default: '' },
  header: { type: String, default: '' },
};
