// Navigation functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Page navigation
      const navLinks = document.querySelectorAll('.nav-link');
      const pageContents = document.querySelectorAll('.page-content');
      
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetPage = this.getAttribute('data-page');
          
          // Hide all pages
          pageContents.forEach(page => {
            page.classList.remove('active');
          });
          
          // Show target page
          document.getElementById(`${targetPage}-page`).classList.add('active');
          
          // Close mobile menu if open
          document.querySelector('.nav-links').classList.remove('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });
      
      // Navigation buttons
      const navButtons = document.querySelectorAll('.nav-btn');
      navButtons.forEach(button => {
        button.addEventListener('click', function() {
          const targetPage = this.getAttribute('data-page');
          
          // Hide all pages
          pageContents.forEach(page => {
            page.classList.remove('active');
          });
          
          // Show target page
          document.getElementById(`${targetPage}-page`).classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });
      
      // Mobile menu toggle
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinksContainer = document.querySelector('.nav-links');
      
      menuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
      });
      
      // Modal functionality
      const membershipModal = document.getElementById('membershipModal');
      const programModal = document.getElementById('programModal');
      const openMembershipFormBtn = document.getElementById('openMembershipForm');
      const openMembershipFormPageBtn = document.getElementById('openMembershipFormPage');
      const openProgramFormBtn = document.getElementById('openProgramForm');
      const programApplyBtns = document.querySelectorAll('.program-apply-btn');
      const closeButtons = document.querySelectorAll('.close');
      
      // Open membership modal
      if (openMembershipFormBtn) {
        openMembershipFormBtn.addEventListener('click', function() {
          membershipModal.style.display = 'block';
        });
      }
      
      if (openMembershipFormPageBtn) {
        openMembershipFormPageBtn.addEventListener('click', function() {
          membershipModal.style.display = 'block';
        });
      }
      
      // Open program modal
      if (openProgramFormBtn) {
        openProgramFormBtn.addEventListener('click', function() {
          programModal.style.display = 'block';
        });
      }
      
      // Open program modal from program cards
      programApplyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const program = this.getAttribute('data-program');
          // You could set the selected program in the form here
          programModal.style.display = 'block';
        });
      });
      
      // Close modals
      closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          membershipModal.style.display = 'none';
          programModal.style.display = 'none';
        });
      });
      
      // Close modal when clicking outside
      window.addEventListener('click', function(event) {
        if (event.target == membershipModal) {
          membershipModal.style.display = 'none';
        }
        if (event.target == programModal) {
          programModal.style.display = 'none';
        }
      });
    });