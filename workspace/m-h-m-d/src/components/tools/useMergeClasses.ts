import { computed } from "vue";

export function useMergeClasses() {
  const mergeClasses = (uiClassInput: string, customClassInput: string) => {
    return computed(() => {
      if (!customClassInput || customClassInput.trim() === '') return uiClassInput;

        const uiClassArray = uiClassInput.split(' ').filter(Boolean);
        const customClassArray = customClassInput.split(' ').filter(Boolean);

        const resultClassArray = [];

        const uiClassMap = new Map(
          uiClassArray.map(uiClass => [uiClass.split('-')[0], uiClass])
        );

        customClassArray.forEach(customClass => {
          const baseName = customClass.split('-')[0];

          if (uiClassMap.has(baseName)) {
            uiClassMap.set(baseName, customClass);
          } else {

            resultClassArray.push(customClass);
          }
        });

        resultClassArray.push(...uiClassMap.values());

        return resultClassArray.join(' ');
    });
  };

  return { mergeClasses };
}
