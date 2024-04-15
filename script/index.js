function updateInput(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);

    select.addEventListener('change', function() {
      input.value = select.value;
    });
  }

  // Call the function for each select-input pair
  updateInput('personalitySelect', 'personality');
  updateInput('discSelect', 'enneagram');
  updateInput('enneagramSelect', 'disc');
  updateInput('bigFiveSelect', 'bigfive');
