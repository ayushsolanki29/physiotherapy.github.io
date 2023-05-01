document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');


  fetch('../../../navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      });
  fetch('../../../footer.html')
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      });

  });