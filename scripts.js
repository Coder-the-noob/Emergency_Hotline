// Heart Button 
 const heartBtns = document.querySelectorAll(".heart-btn");
  const heartCount = document.getElementById("heart-count");
  
  for (const btn of heartBtns) {
    const icon = btn.querySelector("i");
    icon.classList.remove("fa-solid", "text-red-500");
    icon.classList.add("fa-regular");
  }
  heartCount.textContent = 0;

  for (const btn of heartBtns) {
    btn.addEventListener("click", function() {
      const icon = btn.querySelector("i");

      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-red-500");
      } 
      else {
        icon.classList.remove("fa-solid", "text-red-500");
        icon.classList.add("fa-regular");
      }

      const total = document.querySelectorAll(".heart-btn i.fa-solid").length;
      heartCount.textContent = total;
    });
  }

//   

