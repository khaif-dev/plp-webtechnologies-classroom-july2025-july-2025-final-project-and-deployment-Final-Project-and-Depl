
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
  const professional_info = document.getElementById('professional-info');

  // function to show and hide necessary section
  function toggleSections(type){
    // hide all sections first
    personal_info.style.display = 'none';
    institute_info.style.display = 'none';
    honorary_info.style.display = 'none';
    professional_info.style.display = 'none';

    // toggle the sections
    switch(type){
      case 'associate':
        personal_info.style.display = 'grid';
        professional_info.style.display = 'block';
        break;
      case 'institutional':
        institute_info.style.display = 'grid';
        break;
      case 'honorary':
        honorary_info.style.display = 'block';
        personal_info.style.display = 'grid';
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

  // function to display error messages as user inputs
  function showMessage(inputElement, text, color = 'red', duration = 0){
    // remove any existing message    
    const existingMessage = inputElement.parentNode.querySelector('.message');
    if (existingMessage) existingMessage.remove();

    // creating the message
    const message = document.createElement('p');
    message.classList.add('message');
    message.style.color = color;
    message.textContent = text;
    inputElement.parentNode.appendChild(message);
    
    if (duration > 0) {
      setTimeout(() => {
        message.remove();
      }, duration);
    }
  }

  // get user input 
  const telInput = document.getElementById('tel');
  const tel1Input = document.getElementById('tel1');
  const tel2Input = document.getElementById('tel2');

  // validate length of the phone numbers
  function validTel(number){
    return /^\d{10}$/.test(number)
  }

  // validating user phone number
  telInput.addEventListener('input', () => {
    const tel = telInput.value.trim();

    if (!validTel(tel)) {
      showMessage(telInput, 'Please provide a valid number');
    } else {
      const existing = telInput.parentNode.querySelector('.message');
      if (existing) existing.remove();
    }
  });

 
  // tel1 validation
  tel1Input.addEventListener('input', () => {
    const tel = telInput.value;
    const tel1 = tel1Input.value;

    // check if tel 1 is valid
    if (!validTel(tel1)) {
      showMessage(tel1Input, 'Please provide a valid number');
      return;
    }

    // // Check if tel is valid before comparing
    // if (validTel(tel) && tel1 === tel) {
    //   showMessage(tel1Input, 'You cannot be your own emergency contact');
    //   return;
    // }

    // // compare tel and tel1 phone number
    // if (tel1 === tel) {
    //   showMessage(tel1Input, 'You cannot be your own emergency contact');
    //   return;
    // }

    // Valid, remove message
    const existing = tel1Input.parentNode.querySelector('.message');
    if (existing) existing.remove();
  });

  // tel2 validation 
  tel2Input.addEventListener('input', () => {
    const tel = telInput.value;
    const tel1 = tel1Input.value;
    const tel2 = tel2Input.value;
    
    // confirm its 10 digits
    if (!validTel(tel2)) {
      showMessage(tel2Input, 'Please provide a valid number');
      return;
    }

    // Check its unique
    if (tel2 === tel || tel2 === tel1) {
      showMessage(tel2Input, 'Please provide two unique contact persons');
      return;
    }

    // All valid
    showMessage(tel2Input, 'Unique contacts provided', 'green', 2000);
  });

  //  reset form on submit 
  const forms = document.querySelectorAll('form');
  forms.forEach(form=>{
    form.addEventListener('submit',(e)=>{
      e.preventDefault();

      // // find form that trigerred event
      const targetForm =e.target.closest('form');
      targetForm.reset();   
    });
  });

  
});


