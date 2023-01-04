import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mjvjaeyw");
    if (state.succeeded) {
        return (
            <div className='submitted-container'>
                <div className='submitted'>
                    <p>Message Sent!</p>
                    <p>Reload Page to Submit Again.</p>
                </div>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <label htmlFor="email" id="email-label">
                Enter Your Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" id="message-label">
                Message
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" id="contact-submit-button" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;