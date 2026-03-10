const RESUME_LINK = "https://drive.google.com/file/d/15gxi7eob8K4yXowmvYKwOaEPDHIeTVxQ/view?usp=sharing";

document.addEventListener("DOMContentLoaded", function () {
  const resumeLinks = document.querySelectorAll(".resume-link");

  resumeLinks.forEach(link => {
    link.setAttribute("href", RESUME_LINK);
  });
});
