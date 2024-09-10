import React, { useState } from 'react';


// possible change this to use Netlifys form handling
export default function Contact(){

    const FORMSPREE_API = process.env.REACT_APP__FORMSPREE_API;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        honeypot: '', 
    });

    const [formStatus, setFormStatus] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); 


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.honeypot) {
        return;
        }

        try {
        const response = await fetch(FORMSPREE_API, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            },
            body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            }),
        });

        if (response.ok) {
            setFormStatus('Your message has been sent successfully!');
            setIsFormSubmitted(true);
        } else {
            setFormStatus('There was a problem submitting your message. Please try again.');
        }
        } catch (error) {
        setFormStatus('An error occurred. Please try again later.');
        }
    };


    return (
        <div className="max-w-2xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
            <p className="text-center mb-8 text-text-gray">
                Have any questions or inquiries? Please feel free to reach out via the form below.
            </p>
            {isFormSubmitted ? 
            (
                <div className="text-center">
                <p className="text-2xl text-accent-primary mb-6">
                    Thank you for reaching out! We'll get back to you shortly.
                </p>
            </div>
        
        ) : ( 
        
            <form onSubmit={handleSubmit} className="bg-primary p-6 rounded-lg shadow-lg space-y-6">
                <div>
                <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-3 bg-secondary rounded-lg"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                
                <div>
                <label className="block text-lg font-medium mb-2" htmlFor="email">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 bg-secondary rounded-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>

                <div>
                <label className="block text-lg font-medium mb-2" htmlFor="message">Your Message</label>
                <textarea
                    name="message"
                    id="message"
                    className="w-full p-3 bg-secondary rounded-lg"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                </div>

                <div style={{ display: 'none' }}>
                <label htmlFor="honeypot">If you are a human, leave this field blank.</label>
                <input
                    type="text"
                    name="honeypot"
                    id="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                />
                </div>

                {formStatus && <p className="text-center text-accent-secondary">{formStatus}</p>}

                <button
                    type="submit"
                    className="w-full bg-gradient-to-l from-accent-primary-100 to-accent-primary-200 text-text font-bold py-3 px-6 rounded-lg hover:from-accent-primary-200 hover:to-accent-primary"
                    >
                    Send Message
                </button>
            </form>
        )}
        </div>
    );
};
