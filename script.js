const hideButton = document.querySelector(".view-button");
const backSide = document.querySelector(".main");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

const C1 = document.querySelector(".C1");
const C2 = document.querySelector(".C2");
const C3 = document.querySelector(".C3");
const C4 = document.querySelector(".C4");
const messageSend=document.querySelector('.messageSend');

const tabs_c = [c1,c2,c3,c4];
const tabs_C =[C1,C2,C3,C4,messageSend];

if (window.innerWidth < 1000  ) {
  // Hide everything
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #121212; color: white; text-align: center; padding: 20px;">
      <div style="max-width: 600px;">
        <h2>Screen Too Small</h2>
        <p>This website is only accessible on laptop screens. Please use a device with a larger display.</p>
      </div>
    </div>
  `;
}

hideButton.addEventListener("click", () => {
  backSide.classList.toggle("hide_back");
});

function setActiveTab(activeTab) {
  tabs_c.forEach(tab => tab.classList.remove("tabColorChange"));
  activeTab.classList.add("tabColorChange");
}

function setActiveTabContent(activeTabContent){
  tabs_C.forEach(content => content.classList.add("content-dont-display"));
  activeTabContent.classList.remove("content-dont-display");
}

c1.addEventListener("click", () => {
  setActiveTab(c1);
  setActiveTabContent(C1);
});

c2.addEventListener("click", () => {
  setActiveTab(c2);
  setActiveTabContent(C2);
});

c3.addEventListener("click", () => {
  setActiveTab(c3);
  setActiveTabContent(C3);
});

c4.addEventListener("click", () => {
  setActiveTab(c4);
  setActiveTabContent(C4);
});




document.getElementById("sendButton").addEventListener("click", function () {
  const from = document.getElementById("fromContent").value.trim();
  const subject = document.getElementById("subjectContent").value.trim();
  const body = document.getElementById("emailContent").value.trim();

  if (!from || !subject || !body) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const to = "kesav.officialmail@gmail.com";
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent("From: " + from + "\n\n" + body);

  const domain = from.split("@")[1]?.toLowerCase();

  if (domain.includes("gmail.com")) {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailLink, "_blank");
  } else if (
    domain.includes("outlook.com") ||
    domain.includes("hotmail.com") ||
    domain.includes("live.com")
  ) {
    const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${encodedSubject}&body=${encodedBody}`;
    window.open(outlookLink, "_blank");
  } else {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailLink, "_blank");
  }

  // ✅ Reset the form
  document.getElementById("fromContent").value = "";
  document.getElementById("subjectContent").value = "";
  document.getElementById("emailContent").value = "";

  // ✅ Hide C4 and show messageSend
  C4.classList.add("content-dont-display");
  messageSend.classList.remove('content-dont-display');
});

document.querySelectorAll(".Project").forEach(project => {
  const video = project.querySelector("video");

  project.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.playbackRate = 2;   // 🔥 2x speed
    video.play();
  });

  project.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
