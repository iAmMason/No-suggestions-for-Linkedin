// Function to hide suggested posts
function hideSuggestedPosts() {
  // Get all spans on the page
  const spans = document.querySelectorAll('span');

  spans.forEach(span => {
    // Check if the span contains the text "Suggested"
    if (span.innerText.trim() === 'Suggested') {
      // Find the parent div with the specified class name
      let parentDiv = span.closest('div.update-components-text-view.break-words');

      // If such a parent div is found, hide it
      if (parentDiv) {
        parentDiv.style.display = 'none';
      }
    }
  });
}

// Initial run when the script is loaded
hideSuggestedPosts();

// MutationObserver to watch for new elements being added to the DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      hideSuggestedPosts();
    }
  });
});

// Observe changes in the whole document
observer.observe(document.body, {
  childList: true,
  subtree: true
});
