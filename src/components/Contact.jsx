import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (e) => {
    const label = e.target.nextElementSibling;
    if (label) {
      label.classList.add('focus');
    }
  };

  const handleBlur = (e) => {
    const label = e.target.nextElementSibling;
    if (label && !e.target.value) {
      label.classList.remove('focus');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

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
        setSendStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSendStatus('error');
      alert('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Call to Action Section */}
      <section
        className="section-lg bg-accent bg-image text-center bg-overlay-darker py-12 md:py-16"
        style={{
          backgroundImage: "url(/images/bg-image-8.jpg)",
          backgroundPosition: "center 10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        ></div>
        <div className="container px-4" style={{ position: "relative", zIndex: 2 }}>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-9 col-xl-8">
              <h3 className="heading-decorated text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide leading-tight md:leading-16 font-bold">
                Get high-quality ABB & Schneider Electric components for your projects!
              </h3>
              <a
                className="btn btn-primary mt-6 md:mt-8"
                href="#contacts"
                style={{
                  backgroundColor: "#1d89ff",
                  borderColor: "#1d89ff",
                  padding: "15px 35px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="section-lg bg-default" id="contacts">
        <div className="container px-4">
          <div className="row row-50">
            {/* Contact Details */}
            <div className="col-12 col-lg-4 mb-8 lg:mb-0">
              <div className='text-2xl md:text-3xl font-bold'>Contact Details</div>
              <div className="contact-info mt-4">
              <ul className="list-sm contact-info">
                <li className="mb-4">
                  <dl className="list-terms-inline">
                    <dt className="font-semibold">Address</dt>
                    <dd className="text-sm md:text-base">
                      Room 906, No.6, Banzhong Road, Fuzhou City, Fujian
                      Province, China
                    </dd>
                  </dl>
                </li>
                <li className="mb-4">
                  <dl className="list-terms-inline">
                    <dt className="font-semibold">Whatsapp</dt>
                    <dd>
                      <ul className="list-semicolon">
                        <li><a href="tel:+8617605010609" className="text-sm md:text-base">(+86) 17605010609</a></li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li className="mb-4">
                  <dl className="list-terms-inline">
                    <dt className="font-semibold">E-mail</dt>
                    <dd>
                      <ul className="list-semicolon">
                        <li><a href="mailto:ferrislee2024@163.com" className="text-sm md:text-base">ferrislee2024@163.com</a></li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li className="mb-4">
                  <dl className="list-terms-inline">
                    <dt className="font-semibold">We are open</dt>
                    <dd className="text-sm md:text-base">Mn-Fr: 8 am-10 pm</dd>
                  </dl>
                </li>
                <li className="mt-4">
                  <ul className="list-inline-sm flex flex-wrap gap-3">
                    <li><a className="icon-sm fa-facebook icon text-sky-600" href="https://www.facebook.com/profile.php?id=61577505150556"></a></li>
                    <li><a className="icon-sm fa-twitter icon text-sky-600" href="https://x.com/ferrislee911"></a></li>
                    <li>
                      <a className="icon-sm fa-linkedin icon text-sky-600" href="https://www.linkedin.com/in/%E5%BD%AC-%E6%9D%8E-306065255/"></a>
                    </li>
                    <li><a className="icon-sm fa-youtube icon text-sky-600" href="https://www.youtube.com/@ferris-gogogo"></a></li>
                  </ul>
                </li>
              </ul>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-12 col-lg-8">
              <h4 className="heading-decorated text-2xl md:text-3xl font-bold">Get in Touch</h4>
              <form
                onSubmit={handleSubmit}
                className="rd-mailform mt-4"
                data-form-output="form-output-global"
                data-form-type="contact"
              >
                <div className="row row-20">
                  <div className="col-12 col-md-6 mb-4">
                    <div className="form-wrap">
                      <input
                        className="form-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label className={`form-label ${formData.name ? 'focus' : ''}`} htmlFor="contact-name">
                        Your Name <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <div className="form-wrap">
                      <input
                        className="form-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label className={`form-label ${formData.email ? 'focus' : ''}`} htmlFor="contact-email">
                        Your Email <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="form-wrap">
                      <textarea
                        className="form-input w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        rows="5"
                      ></textarea>
                      <label className={`form-label ${formData.message ? 'focus' : ''}`} htmlFor="contact-message">
                        Your Message <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-2 disabled:opacity-50"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>


          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="p-0">
        <div className="google-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2129.717374049382!2d119.32560030219558!3d26.139907931829057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-CN!2s!4v1752747089758!5m2!1szh-CN!2s"
            width="100%"
            height="300"
            className="border-0 block"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Toastduck International Business Co., Limited Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
