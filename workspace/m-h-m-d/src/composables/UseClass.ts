import { computed } from "vue";
import { addPrefixToTailwindClasses } from "../adapters/tailwind";

export function useAdapterClass() {
  const adapterClass = (className: string) => {
    return computed(() => {
      return addPrefixToTailwindClasses(className);
    });
  };
  return adapterClass;
}
