
// navigation functionalities
document.addEventListener('DOMContentLoaded', function() {
  // Page navigation
  const navLinks = document.querySelectorAll('.nav-link');
  const pageContents = document.querySelectorAll('.page-content');
  
  // adding listeners to the navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // prevent from opening server
      e.preventDefault();
      // defining page of interest
      const targetPage = this.getAttribute('data-page');
      
      // Hide all other pages
      pageContents.forEach(page => {
        page.classList.remove('active');
      });
      
      // Show content of page of interest
      document.getElementById(`${targetPage}-page`).classList.add('active');
      
      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('active');
      
      // Scroll to top
      window.scrollTo(0, 0);
    });
  });
  
  // Navigation buttons within the  home page
  // onclick go to the target page
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-page');
      
      // Hide all other pages
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
  const menuToggle = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinksContainer.classList.toggle('active');
  });
  
  // Modal functionality to open and close membership and program forms
  // membership modal
  const membershipModal = document.getElementById('membershipModal');
  const applyMembershipBtn = document.querySelectorAll('.memb-btn');
  // open membership modal
  applyMembershipBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      membershipModal.style.display = 'block';
    });
  });
  
  // program modal
  const programModal = document.getElementById('programModal');
  const applyProgramBtn = document.querySelectorAll('.program-btn');
   
  // Open program modal
  applyProgramBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      programModal.style.display = 'block';
    });
  });
  
  // Close modals
  const closeButtons = document.querySelectorAll('.close');
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

  // user submissions
  const submitBtns = document.querySelectorAll('.submitBtn');
  submitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = btn.closest('form'); // find the parent form
      console.log("Form submitted:", form);
      form.reset();
  });
});


  // prevent server behavior and reset form
  const forms = document.querySelectorAll('form');
  forms.forEach(form=>{
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      forms.reset();      
    });
  });
});