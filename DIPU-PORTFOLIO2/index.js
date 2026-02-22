const RESUME_LINK = "https://drive.google.com/file/d/1urGJp2E42i5X2KsHmV3ZWY1FspO6i6mk/view?usp=sharing";

document.addEventListener("DOMContentLoaded", function () {
  const resumeLinks = document.querySelectorAll(".resume-link");

  resumeLinks.forEach(link => {
    link.setAttribute("href", RESUME_LINK);
  });
});
