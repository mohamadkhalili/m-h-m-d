import { computed } from "vue";

export function useAdapterClass() {
  const adapterClass = (className: string) => {
    return computed(() => {
      return className;
    });
  };
  return adapterClass;
}
