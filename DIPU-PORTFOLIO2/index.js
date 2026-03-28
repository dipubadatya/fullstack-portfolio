const RESUME_LINK = "https://drive.google.com/file/d/1gkD7Cxlt3g6smseMWlmfQHN2E9S-qOqw/view?usp=sharing";

document.addEventListener("DOMContentLoaded", function () {
  const resumeLinks = document.querySelectorAll(".resume-link");

  resumeLinks.forEach(link => {
    link.setAttribute("href", RESUME_LINK);
  });
});
