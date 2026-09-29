// footer.js
document.addEventListener("DOMContentLoaded", function () {
  // Find existing <footer> or create one
  let footer = document.querySelector("footer.site-footer");
  if (!footer) {
    footer = document.createElement("footer");
    footer.className = "site-footer";
    document.body.appendChild(footer);
  }

  footer.innerHTML = `
    <a href="index.html" class="back-to-index">← Back to All Stories</a>
<div class="footer">
  ✦ Traditional Igbo stories ✦
  <a
    href="https://wa.me/2349066115252?text=I%20want%20to%20contribute%20to%20Igbo%20tales"
    target="_blank"
    rel="noopener noreferrer"
    class="contribute-btn"
  >
    Contribute
  </a>
</div>
    <p class="author-credit">
      Compiled by
      <a href="https://agunechemba.name.ng" target="_blank" rel="noopener noreferrer">Agunechemba Ekene</a>
    </p>
  `;
});
