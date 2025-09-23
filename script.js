
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
  const modalOverlay = document.querySelector('.modal-overlay')
  // membership modal
  const membershipModal = document.getElementById('membershipModal');
  const applyMembershipBtn = document.querySelectorAll('.memb-btn');
  // open membership modal
  applyMembershipBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      modalOverlay.style.display = 'block';
      membershipModal.style.display = 'block';
    });
  });
  
  // program modal
  const programModal = document.getElementById('programModal');
  const applyProgramBtn = document.querySelectorAll('.program-btn');
   
  // Open program modal
  applyProgramBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      modalOverlay.style.display = 'block';
      programModal.style.display = 'block';
    });
  });
  
  // Close modals
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
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

  // // user submissions
  // const submitBtns = document.querySelectorAll('.submitBtn');
  // submitBtns.forEach(btn => {
  //   btn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const form = btn.closest('form'); // find the parent form
  //     alert ("Form successfully submitted:", form);
  //     form.reset();
  // });
  // });


  // validate user input and reset form
  const forms = document.querySelectorAll('form');
  forms.forEach(form=>{
    form.addEventListener('submit',(e)=>{
      e.preventDefault();

      // validate the emergency contacts are unique
      const tel1 = document.getElementById('tel1').value.trim();
      const tel2 = document.getElementById('tel2').value.trim();
      const existingMessage = document.getElementById('message');
      // remove existing message
      if(existingMessage){
        existingMessage.remove()
      }
      // validate user input
      if(tel1 === tel2){
        const message = document.createElement('p');
        message.classList.add('message');        
        message.innerHTML='please provide two unique contact persons';
        //append to appear after name2 input
        const tel2Input = document.getElementById('tel2');
        tel2Input.parentNode.appendChild(message);
        return;
      }
      forms.reset();      
    });
  });


});


