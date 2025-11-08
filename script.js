// Optional JavaScript
console.log("Website loaded successfully!");

// Optional JavaScript
console.log("Website loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return; // stop if no header found

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll <= 0) {
      header.style.top = "0";
      lastScroll = currentScroll;
      return;
    }

    if (currentScroll > lastScroll) {
      // scrolling down — hide header
      header.style.top = "-120px";
    } else {
      // scrolling up — show header
      header.style.top = "0";
    }

    lastScroll = currentScroll;
  });
});


  lastScroll = currentScroll;
});
</script>


