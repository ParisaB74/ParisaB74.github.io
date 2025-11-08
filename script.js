// Optional JavaScript
console.log("Website loaded successfully!");

<script>
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.top = "0"; // always show at top
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down — hide header
    header.style.top = "-120px"; 
  } else {
    // Scrolling up — show header
    header.style.top = "0";
  }

  lastScroll = currentScroll;
});
</script>

