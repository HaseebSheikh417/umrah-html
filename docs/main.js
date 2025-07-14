document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation
    let isValid = true;
  
    // Validate Name
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name === "") {
      isValid = false;
      nameError.textContent = "Name is required.";
    } else {
      nameError.textContent = "";
    }
  
    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      isValid = false;
      emailError.textContent = "Email is required.";
    } else if (!emailRegex.test(email)) {
      isValid = false;
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  
    // Validate Subject
    const subject = document.getElementById("subject").value.trim();
    const subjectError = document.getElementById("subjectError");
    if (subject === "") {
      isValid = false;
      subjectError.textContent = "Subject is required.";
    } else {
      subjectError.textContent = "";
    }
  
    // Validate Message
    const message = document.getElementById("message").value.trim();
    const messageError = document.getElementById("messageError");
    if (message === "") {
      isValid = false;
      messageError.textContent = "Message is required.";
    } else {
      messageError.textContent = "";
    }
  
    // Submit the form if all fields are valid
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });

  /**
   * Scroll top button
   */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);


AOS.init();

// Function to close sign-in modal and scroll to register section
function closeSignInAndScrollToRegister() {
    // Close the sign-in modal
    const signInModal = bootstrap.Modal.getInstance(document.getElementById('signin'));
    if (signInModal) {
        signInModal.hide();
    }
    
    // Scroll to the register section after a short delay
    setTimeout(() => {
        const registerSection = document.getElementById('register_100');
        if (registerSection) {
            registerSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
      let target = document.querySelector(window.location.hash);
      if (target) {
          setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 500); // Delay to ensure the page loads first
      }
  }
});

// Account Setup Modal Functions
function openAccountSetupModal() {
    // Close the performer sign-up modal first
    const performerModal = bootstrap.Modal.getInstance(document.getElementById('performerSignUp'));
    if (performerModal) {
        performerModal.hide();
    }
    
    // Open the account setup modal after a short delay
    setTimeout(() => {
        const accountSetupModal = new bootstrap.Modal(document.getElementById('accountSetupModal'));
        accountSetupModal.show();
    }, 300);
}

// Verification Modal Functions
function openVerificationModal() {
    // Close the account setup modal first
    const accountSetupModal = bootstrap.Modal.getInstance(document.getElementById('accountSetupModal'));
    if (accountSetupModal) {
        accountSetupModal.hide();
    }
    
    // Open the verification modal after a short delay
    setTimeout(() => {
        const verificationModal = new bootstrap.Modal(document.getElementById('verificationModal'));
        verificationModal.show();
    }, 300);
}

// File preview functions
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    const file = input.files[0];
    
    if (file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `
                    <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 150px; border-radius: 8px;">
                    <p class="text-muted mt-1 mb-0">${file.name}</p>
                `;
            };
            reader.readAsDataURL(file);
        } else {
            preview.innerHTML = '<p class="text-danger">Please select an image file.</p>';
        }
    } else {
        preview.innerHTML = '';
    }
}

function previewFile(input, previewId) {
    const preview = document.getElementById(previewId);
    const file = input.files[0];
    
    if (file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `
                    <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 150px; border-radius: 8px;">
                    <p class="text-muted mt-1 mb-0">${file.name}</p>
                `;
            };
            reader.readAsDataURL(file);
        } else if (file.type === 'application/pdf') {
            preview.innerHTML = `
                <div class="d-flex align-items-center p-2 bg-light rounded">
                    <i class="fa fa-file-pdf text-danger me-2"></i>
                    <span class="text-muted">${file.name}</span>
                </div>
            `;
        } else {
            preview.innerHTML = `
                <div class="d-flex align-items-center p-2 bg-light rounded">
                    <i class="fa fa-file text-primary me-2"></i>
                    <span class="text-muted">${file.name}</span>
                </div>
            `;
        }
    } else {
        preview.innerHTML = '';
    }
}

// Account Setup Profile Image Preview Function
function previewAccountSetupProfileImage(input) {
    const preview = document.getElementById('accountSetupProfilePreview');
    const file = input.files[0];
    
    if (file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `
                    <img src="${e.target.result}" alt="Profile Preview" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;">
                `;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file.');
            input.value = '';
        }
    } else {
        preview.innerHTML = '<span class="profile-avatar-text">U</span>';
    }
}

// Account Setup Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const accountSetupForm = document.getElementById('accountSetupForm');
    if (accountSetupForm) {
        accountSetupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate CNIC Front Photo
            const cnicFront = document.getElementById('cnicFront');
            if (!cnicFront.files[0]) {
                cnicFront.classList.add('is-invalid');
                isValid = false;
            } else {
                cnicFront.classList.remove('is-invalid');
            }
            
            // Validate CNIC Back Photo
            const cnicBack = document.getElementById('cnicBack');
            if (!cnicBack.files[0]) {
                cnicBack.classList.add('is-invalid');
                isValid = false;
            } else {
                cnicBack.classList.remove('is-invalid');
            }
            

            // Validate Income
            const income = document.getElementById('income');
            if (!income.value.trim()) {
                income.classList.add('is-invalid');
                isValid = false;
            } else {
                income.classList.remove('is-invalid');
            }
            
            // Validate Proof of Income
            const incomeProof = document.getElementById('incomeProof');
            if (!incomeProof.files[0]) {
                incomeProof.classList.add('is-invalid');
                isValid = false;
            } else {
                incomeProof.classList.remove('is-invalid');
            }
            
            // Validate Occupation
            const occupation = document.getElementById('occupation');
            if (!occupation.value.trim()) {
                occupation.classList.add('is-invalid');
                isValid = false;
            } else {
                occupation.classList.remove('is-invalid');
            }
            
            // Validate Business Address
            const businessAddress = document.getElementById('businessAddress');
            if (!businessAddress.value.trim()) {
                businessAddress.classList.add('is-invalid');
                isValid = false;
            } else {
                businessAddress.classList.remove('is-invalid');
            }
            
            if (isValid) {
                // Show success message and redirect
                alert('Account setup completed successfully!');
                window.location.href = 'performer.html';
            }
        });
    }

    // Verification Form - Static (No Validation)
    const verificationForm = document.getElementById('verificationForm');
    if (verificationForm) {
        verificationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Close verification modal
            const verificationModal = bootstrap.Modal.getInstance(document.getElementById('verificationModal'));
            if (verificationModal) verificationModal.hide();
            // Open pledge modal
            setTimeout(() => {
                const pledgeModal = new bootstrap.Modal(document.getElementById('pledgeModal'));
                pledgeModal.show();
            }, 300);
        });
    }

    var pledgeBtn = document.getElementById('pledgeBtn');
    if (pledgeBtn) {
      pledgeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var reviewModal = new bootstrap.Modal(document.getElementById('reviewInfoModal'));
        reviewModal.show();
      });
    }
});

// Pledge Success Function
function pledgeSuccess() {
    // Pledge modal ko close karo
    var pledgeModal = bootstrap.Modal.getInstance(document.getElementById('pledgeModal'));
    if (pledgeModal) {
        pledgeModal.hide();
    }
    // Review info modal show karo
    setTimeout(function() {
        var reviewModal = new bootstrap.Modal(document.getElementById('reviewInfoModal'));
        reviewModal.show();
    }, 350);
}