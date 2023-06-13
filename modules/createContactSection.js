const contact = document.querySelector('.contact-section');

const createContactSection = () => {
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
        <h2>Contact Information</h2>
        <p>Do you have any question or do you want to say "Hello"?</p>
        <p>You can reach out to us!</p>
        <ul>
            <li>Email: <a>iwuconcept@gmail.com</a></a></li>
            <li>Phone No: +2349075251287</li>
            <li>Twitter: @maths29</li>
            <li>Address : 4 Obaze street off University Road, Abuja Quaters, Benin City,Edo State, Nigeria.</li>
        </ul>
    `;
  contact.appendChild(contactInfo);
};

export default createContactSection;