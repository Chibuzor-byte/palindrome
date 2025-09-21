const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  // Remove non-alphanumeric characters and lowercase
  let cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

checkButton.addEventListener("click", () => {
  let value = textInput.value;
 

  if (value === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(value)) {
    result.style.display = "block";
    result.textContent = `${value} is a palindrome.`;
  } else {
    result.style.display = "block";
    result.textContent = `${value} is not a palindrome.`;
  }
});

