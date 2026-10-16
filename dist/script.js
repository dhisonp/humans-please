const copyButton = document.getElementById("copy-link");
const shareStatus = document.getElementById("share-status");
const shareFallback = document.getElementById("share-fallback");
const pageUrl = document.getElementById("page-url");

copyButton.addEventListener("click", async () => {
  const url = new URL(window.location.href);
  url.hash = "";

  try {
    await navigator.clipboard.writeText(url.href);
    shareFallback.hidden = true;
    shareStatus.textContent =
      "Link copied. Please add a human sentence when you send it.";
  } catch {
    shareFallback.hidden = false;
    pageUrl.value = url.href;
    pageUrl.focus();
    pageUrl.select();
    shareStatus.textContent =
      "Your browser couldn’t copy it. The address below is ready to copy.";
  }
});
