export const tooltip = {
  mounted(el: HTMLElement, binding: { value: { location: string, text: string } }) {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.textContent = binding.value.text;  // Use the text from the directive

    Object.assign(tooltip.style, {
      display: 'none',
      position: 'absolute',
      backgroundColor: '#333',
      color: '#fff',
      padding: '5px',
      borderRadius: '3px',
      whiteSpace: 'nowrap',
      zIndex: '9999',
    });

    // Append the tooltip to the body
    document.body.appendChild(tooltip);

    // Function to show the tooltip
    const showTooltip = () => {
      const rect = el.getBoundingClientRect();
      tooltip.style.display = 'block';

      // Get location from binding
      const location = binding.value.location;

      // Adjust position based on location
      switch (location) {
        case 'top':
          tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
          tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
          tooltip.style.transform = 'translateX(-50%)';
          break;
        case 'bottom':
          tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
          tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
          tooltip.style.transform = 'translateX(-50%)';
          break;
        case 'left':
          tooltip.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
          tooltip.style.left = `${rect.left + window.scrollX - tooltip.offsetWidth - 5}px`;
          tooltip.style.transform = 'translateY(-50%)';
          break;
        case 'right':
          tooltip.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
          tooltip.style.left = `${rect.right + window.scrollX + 5}px`;
          tooltip.style.transform = 'translateY(-50%)';
          break;
        default:
          tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`; // Fallback to bottom
          tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
          tooltip.style.transform = 'translateX(-50%)';
          break;
      }
    };

    // Function to hide the tooltip
    const hideTooltip = () => {
      tooltip.style.display = 'none';
    };

    // Add event listeners for mouseenter and mouseleave
    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('mouseleave', hideTooltip);
  },

  unmounted(el: HTMLElement) {
    // Remove tooltip when component is unmounted
    const tooltip = document.querySelector('div[tooltip]');
    if (tooltip) {
      document.body.removeChild(tooltip);
    }
  }
};
