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
      // Exclude clicks inside the button
      if (!(el === target || el.contains(target) || target.closest("button"))) {
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
