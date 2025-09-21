// // Mobile Navigation Toggle
// const mobileToggle = document.querySelector('.mobile-toggle');
// const navLinks = document.querySelector('.nav-links');

// mobileToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
    
//     const icon = mobileToggle.querySelector('i');
//     if (navLinks.classList.contains('active')) {
//         icon.classList.remove('fa-bars');
//         icon.classList.add('fa-times');
//     } else {
//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//     }
// });

// Page Navigation System
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the selected page
        document.getElementById(`${pageId}-page`).classList.add('active');
        
        // // Close mobile menu if open
        // if (navLinks.classList.contains('active')) {
        //     navLinks.classList.remove('active');
        //     mobileToggle.querySelector('i').classList.remove('fa-times');
        //     mobileToggle.querySelector('i').classList.add('fa-bars');
        // }
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Make buttons with nav-link class work for navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = btn.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the selected page
        document.getElementById(`${pageId}-page`).classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

const programApplication = document.querySelector('#program-application');
const programBtns = document.querySelectorAll('.program-btn');

programBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all page sections first
    document.querySelectorAll('.page-content').forEach(sec => {
      sec.classList.remove('active');
    });

    // Show program application section
    programApplication.classList.add('active');
  });
});


const membership_application = document.querySelector('#membership-form');
const membBtn = document.querySelectorAll('.memb-btn');

membBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all page sections first
    document.querySelectorAll('.page-content').forEach(sec => {
      sec.classList.remove('active');
    });

    // Show program application section
    membership_application.classList.add('active');
  });
});

  // close register member modal
  const closeModalBtn = document.querySelector('.close')
  const program_application = document.querySelector('#program-application')
  closeModalBtn.addEventListener('click',()=>{
    program_application.style.display = 'none';
    // modalOverlay.style.display = 'none';
  });
// const closeButtons = document.querySelectorAll('.close');