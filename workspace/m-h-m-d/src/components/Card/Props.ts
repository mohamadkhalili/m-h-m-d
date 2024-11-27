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
      required: false,
    },
    footer: {
      type: String,
      default: '',
    },
    elevation: {
      type: Boolean,
      default: true,
    },
  };
  