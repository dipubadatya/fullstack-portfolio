const RESUME_LINK = "https://drive.google.com/file/d/1IY0Dq8728HkOcVWwJVsbKeT3uPx0Sl5f/view?usp=drive_link";

document.addEventListener("DOMContentLoaded", function () {
  const resumeLinks = document.querySelectorAll(".resume-link");

  resumeLinks.forEach(link => {
    link.setAttribute("href", RESUME_LINK);
  });
});
