document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const title = document.getElementById('story-title').value;
    const content = document.getElementById('story-content').value;
    const errorMessage = document.getElementById('validation-error');

    // Validation: Ensure story content has at least 3 characters
    if (content.length < 3) {
        errorMessage.textContent = "Story must be at least 3 characters long.";
        return;
    }

    // Clear error message
    errorMessage.textContent = '';

    // Create a new story element
    const newStory = document.createElement('div');
    newStory.classList.add('story');
    newStory.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    // Append the new story to the stories list
    document.getElementById('stories-list').appendChild(newStory);

    // Clear the form
    document.getElementById('story-title').value = '';
    document.getElementById('story-content').value = '';
});
