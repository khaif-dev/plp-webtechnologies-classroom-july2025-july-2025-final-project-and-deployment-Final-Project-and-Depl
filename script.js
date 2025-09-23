
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
  // sections of the form
  const personal_info = document.getElementById('personal-info');
  const institute_info = document.getElementById('institutional-info');
  const honorary_info = document.getElementById('honorary-info');
  // function to show and hide necessary section
  function toggleSections(type){
    // hide all sections first
    personal_info.style.display = 'none';
    institute_info.style.display = 'none';
    honorary_info.style.display = 'none';

    // use switch case to toggle
    switch(type){
      case 'associate':
        personal_info.style.display = 'grid';
        break;
      case 'institutional':
        institute_info.style.display = 'grid';
        break;
      case 'honorary':
        honorary_info.style.display = 'block';
      break;
    }
  }

  // open membership modal
  applyMembershipBtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      modalOverlay.style.display = 'block';
      membershipModal.style.display = 'block';
      // get membership type
      const membType = e.target.getAttribute('data-memb-type');

      // show necessary section
      toggleSections(membType);
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
      modalOverlay.style.display = 'none';
      membershipModal.style.display = 'none';
    }
    if (event.target == programModal) {
      modalOverlay.style.display = 'none';
      programModal.style.display = 'none';
    }
  });



  // validate user input and reset form
  const forms = document.querySelectorAll('form');
  forms.forEach(form=>{
    form.addEventListener('submit',(e)=>{
      e.preventDefault();

      // // find form that trigerred event
      // const targetForm =e.target.closest('form');
      if (validateForm(e.target)){
        alert('Form submitted successfully');
        e.target.reset(); 
      }     
    });
  });

  // validate the emergency contacts are unique
  function validateForm(){
    const tel1 = document.getElementById('tel1').value.trim();
    const tel2 = document.getElementById('tel2').value.trim();
    const existingMessage = document.querySelector('.message');
    // remove existing message
    if(existingMessage){
      existingMessage.remove();
    }

    // validate user input
    const message = document.createElement('p');
    message.classList.add('message');
    if(tel1 === tel2){        
      message.innerHTML='please provide two unique contact persons';
      //append to appear after name2 input
      const tel2Input = document.getElementById('tel2');
      tel2Input.parentNode.appendChild(message);
      return false;
    }else{
      message.innerHTML ='unique contacts provided';
      message.style.color = 'green';
      const tel2Input = document.getElementById('tel2');
      tel2Input.parentNode.appendChild(message);
      return true;
    }

           
  }


});


