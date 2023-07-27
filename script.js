let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form data
  const formData = new FormData(event.target);

  // Check if all fields are filled
  let allFieldsFilled = true;
  formData.forEach((value) => {
    if (value.trim() === '') {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    alert("Please fill in all the fields.");
    return;
  }

  // Perform your custom form submission here using JavaScript's Fetch API or XMLHttpRequest
  const url = 'https://formsubmit.co/teamwaper@gmail.com';
  const options = {
    method: 'POST',
    body: formData
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      // Handle the response data as needed
      console.log('Form submitted successfully:', data);
      alert('Sent Successfully!');
      document.getElementById('myForm').reset(); // Reset the form after successful submission
    })
    .catch(error => {
      console.error('Form submission error:', error);
      alert('Error occurred. Please try again.');
    });
});
