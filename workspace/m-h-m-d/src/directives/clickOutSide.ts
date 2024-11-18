import { Directive } from "vue";

const clickOutside: Directive = {
  beforeMount(el, binding) {
    // Check if `binding.value` is a function
    if (typeof binding.value !== "function") {
      console.warn(
        `[v-click-outside]: The provided expression '${binding.expression}' is not a function.`
      );
      return;
    }

    el.clickOutsideHandler = (event: Event) => {
      const target = event.target as Node;
      // Ensure the click is outside the element and the menu is open
      if (!(el === target || el.contains(target))) {
        binding.value(event); // Call the provided handler
      }
    };

    document.addEventListener("click", el.clickOutsideHandler);
  },
  unmounted(el) {
    if (el.clickOutsideHandler) {
      document.removeEventListener("click", el.clickOutsideHandler);
      delete el.clickOutsideHandler;
    }
  },
};

export default clickOutside;
