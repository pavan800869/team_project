document.addEventListener("DOMContentLoaded", function() {
    // Simple fade-in effect for team section
    const teamMembers = document.querySelectorAll('.team-img');
    teamMembers.forEach(member => {
      member.style.opacity = 0;
      setTimeout(() => {
        member.style.transition = "opacity 1s ease-in";
        member.style.opacity = 1;
      }, 200);
    });
  });
  