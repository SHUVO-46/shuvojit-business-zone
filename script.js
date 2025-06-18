const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const submitMsg = document.getElementById('submit-msg');

submitBtn.addEventListener('click', () => {
  const text = submitText.value.trim();
  if (!text) {
    submitMsg.style.color = 'orange';
    submitMsg.textContent = 'অনুগ্রহ করে কিছু লিখুন।';
    return;
  }

  // Google Apps Script Web App URL (তোমার নিজস্ব স্ক্রিপ্ট URL দিয়ে বদলাও)
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: text })
  })
    .then(res => res.json())
    .then(response => {
      if (response.status === 'success') {
        submitMsg.style.color = '#58d68d';
        submitMsg.textContent = 'সফলভাবে জমা হয়েছে!';
        submitText.value = '';
      } else {
        submitMsg.style.color = 'red';
        submitMsg.textContent = 'জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।';
      }
    })
    .catch(() => {
      submitMsg.style.color = 'red';
      submitMsg.textContent = 'জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।';
    });
});

// সেকশনগুলো দেখানো/লুকানো ফাংশন
function showSection(section) {
  const mainSections = document.querySelectorAll('main > section.card');
  mainSections.forEach(sec => (sec.style.display = 'none'));

  const detailsSection = document.getElementById('details-section');
  detailsSection.classList.remove('hidden');

  const content = document.getElementById('details-content');
  if (section === 'members') {
    content.innerHTML = `
      <h3>Member List & Amount</h3>
      <ul>
        <li>example1 : 1000 tk</li>
        <li>example2 : 1200 tk</li>
        <li>example3 : 800 tk</li>
        <li>example4 : 1500 tk</li>
        <li>example5 : 500 tk</li>
        <li>example6 : 1100 tk</li>
        <li>example7 : 700 tk</li>
        <li>example8 : 1300 tk</li>
        <li>example9 : 900 tk</li>
        <li>example10 : 1400 tk</li>
      </ul>
    `;
  } else if (section === 'payments') {
    content.innerHTML = `
      <h3>Payment Status</h3>
      <ul>
        <li>example1 : PAID</li>
        <li>example2 : NOT PAY</li>
        <li>example3 : PAID</li>
        <li>example4 : NOT PAY</li>
        <li>example5 : PAID</li>
        <li>example6 : PAID</li>
        <li>example7 : NOT PAY</li>
        <li>example8 : PAID</li>
        <li>example9 : NOT PAY</li>
        <li>example10 : PAID</li>
      </ul>
    `;
  } else if (section === 'submit') {
    content.innerHTML = `
      <h3>File Submit</h3>
      <p>আপনার সম্পূর্ণ ফাইলের uid+pass+2fa কপি করে বক্সের ভিতরে পেস্ট করে সাবমিট করুন,তবে একই ফাইল দুইবার জমা দিলে পেমেন্ট পাবেন না🚫</p>
      <textarea id="submit-text-detail" placeholder="এখানে A, B, C, D কলামের টেক্স
