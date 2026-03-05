import { useState } from 'react';

const Modal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xqeyzqze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        // 关闭模态框
        const modal = document.getElementById('modalContacts');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) backdrop.remove();
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="modal fade" id="modalContacts" role="dialog">
      <div className="modal-dialog modal-dialog_custom">
        <div className="modal-dialog__inner">
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
          ></button>
          <div className="modal-dialog__content">
            <h5>Get in Touch</h5>
            <form
              className="rd-mailform rd-mailform_style-1"
              data-form-output="form-output-global"
              data-form-type="contact"
              onSubmit={handleSubmit}
            >
              <div className="form-wrap form-wrap_icon linear-icon-man">
                <input
                  className="form-input"
                  id="contact-name-2"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  data-constraints="@Required"
                  required
                />
                <label className="form-label" htmlFor="contact-name-2">
                  Your name
                </label>
              </div>
              <div className="form-wrap form-wrap_icon linear-icon-envelope">
                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  data-constraints="@Email @Required"
                  required
                />
                <label className="form-label" htmlFor="contact-email-2">
                  Your e-mail
                </label>
              </div>
              <div className="form-wrap form-wrap_icon linear-icon-feather">
                <textarea
                  className="form-input"
                  id="contact-message-3"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  data-constraints="@Required"
                  required
                ></textarea>
                <label className="form-label" htmlFor="contact-message-3">
                  Your message
                </label>
              </div>
              <button className="btn btn-primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
