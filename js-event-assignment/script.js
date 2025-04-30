// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = '#cfc';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  let timeout;
  document.getElementById('clickBtn').addEventListener('mousedown', () => {
    timeout = setTimeout(() => alert('Long press detected!'), 1000);
  });
  document.getElementById('clickBtn').addEventListener('mouseup', () => {
    clearTimeout(timeout);
  });
  
  // 2. Interactive Elements
  document.getElementById('changeTextBtn').addEventListener('click', (e) => {
    e.target.textContent = 'Text Changed!';
    e.target.style.backgroundColor = '#ff0';
  });
  
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  let current = 0;
  document.getElementById('nextImageBtn').addEventListener('click', () => {
    current = (current + 1) % images.length;
    document.getElementById('galleryImage').src = images[current];
  });
  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
  
  // 3. Form Validation
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('formFeedback');
    let errors = [];
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.push("Invalid email format.");
    }
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters.");
    }
  
    feedback.textContent = errors.length ? errors.join(" ") : "Form is valid!";
    feedback.style.color = errors.length ? "red" : "green";
  });  