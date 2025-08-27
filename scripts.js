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

// Call Button and Call History
let coins = 100;
const coinCountEl = document.getElementById("coin-count");
coinCountEl.innerText = coins;

const callHistoryList = document.getElementById("history");
const clearHistoryBtn = document.getElementById("clearHistory");

const cards = document.querySelectorAll(".card");

for (const card of cards) {
  const serviceName = card.querySelector("h3").innerText;
  const serviceNumber = card.querySelector(".service-number").innerText;
  const callBtn = card.querySelector(".call-btn");

  callBtn.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins -= 20;
    coinCountEl.innerText = coins;
    alert(`Calling ${serviceName} (${serviceNumber})`);

   const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-gray-50 p-3 mb-2 rounded-lg";

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    div.innerHTML = `
    <div>
        <div class="font-semibold">${serviceName}</div>
        <div class="text-gray-500 text-sm">${serviceNumber}</div>
    </div>
    <div class="text-xs text-gray-400">${timeString}</div>
    `;

    callHistoryList.appendChild(div);

  });
}

// Clear History
clearHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});


// copy button

let copyCount = 0;
const copyCountEl = document.getElementById("copyCount"); 

// Select all cards
const copyCards = document.querySelectorAll(".card");

for (const card of copyCards) {
  const copyBtn = card.querySelector(".copy-btn");
  const numberEl = card.querySelector(".service-number");

  if (!copyBtn || !numberEl) continue; 

  copyBtn.addEventListener("click", function() {
    const hotline = numberEl.textContent.trim();

    navigator.clipboard.writeText(hotline).then(function() {
      copyCount++;
      if (copyCountEl) copyCountEl.textContent = copyCount;
      alert(`Copied: ${hotline}`);
    }).catch(function(err) {
      console.error("Failed to copy: ", err);
      alert(`Failed to copy automatically.\nPlease copy manually: ${hotline}`);
    });
  });
}



