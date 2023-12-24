// This function takes an input element as a parameter and focuses on the next input
// when the current input's value reaches its maximum length.

function focusNext(currentInput) {
  // Extract the maximum length of the input field and convert it to an integer.
  const maxLength = parseInt(currentInput.maxLength, 10);

  // Generate the ID of the next input by extracting the current digit
  // from the input's ID and incrementing it by 1.
  const nextInputId = "digit" + (parseInt(currentInput.id.slice(-1), 10) + 1);

  // Check if the current input's value has reached its maximum length
  // and if the generated next input ID has the expected length.
  if (currentInput.value.length === maxLength && nextInputId.length === 6) {
      // If conditions are met, focus on the next input using its ID.
      document.getElementById(nextInputId).focus();
  }
}
