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
};
