// Function to find and remove parent divs with the text 'Suggested'
function removeParentDivsWithSuggested() {
  // Get all div elements with class 'relative'
  const divs = document.querySelectorAll('div.relative');

  divs.forEach(div => {
    // Check if the div contains a span with the text 'Suggested'
    const spans = div.querySelectorAll('span');
    spans.forEach(span => {
      if (span.innerText.trim() === 'Suggested') {
        // If found, remove the div
        div.remove();
      }
    });
  });
}

// Initial run when the script is loaded
removeParentDivsWithSuggested();

// MutationObserver to watch for new elements being added to the DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) { // Only process element nodes
        // Check if the added node or its children contain suggested posts
        removeParentDivsWithSuggested();
      }
    });
  });
});

// Observe changes in the whole document
observer.observe(document.body, {
  childList: true,
  subtree: true
});
