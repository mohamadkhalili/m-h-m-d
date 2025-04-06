export const Props = {
  modelValue: { type: Boolean, require: true }, // Active or deactive Drawer
  teleport: { type: String, require: false, default: 'body' }, // This value determines the element that the drawer will be created from.
  class: { type: String, require: false, default: '' }, // This is Class of Drawer
};
