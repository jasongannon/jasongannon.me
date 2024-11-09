let copyButtonLabel = "copy   ";
let codeBlocks = Array.from(document.querySelectorAll("pre"));

for (let codeBlock of codeBlocks) {
  let wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  let copyButton = document.createElement("button");
  copyButton.className = "copy-code";
  copyButton.innerHTML = copyButtonLabel;

  copyButton.setAttribute("aria-label", "Copy code to clipboard");

  codeBlock.appendChild(copyButton);

  codeBlock.parentNode.insertBefore(wrapper, codeBlock);
  wrapper.appendChild(codeBlock);

  copyButton.addEventListener("click", async () => {
    await copyCode(codeBlock, copyButton);
  });
}

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "copied!";
  // Add aria-label update for screen readers
  button.setAttribute("aria-label", "Code copied to clipboard");

  setTimeout(() => {
    button.innerText = copyButtonLabel;
    // Reset aria-label
    button.setAttribute("aria-label", "Copy code to clipboard");
  }, 700);
}

export default copyCode;
