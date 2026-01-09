const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: '100px 20px',
        background: '#f8fafc',
        minHeight: '600px'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '60px',
          background: 'linear-gradient(to right, #8b5cf6, #ec4899, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Get In Touch
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '40px'
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(new FormData(form)).toString()
                })
                  .then(() => alert('Thank you for your message!'))
                  .catch(() => alert('Error submitting form.'));
              }}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              ></textarea>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '15px 30px',
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.4)'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {[
              { icon: 'fas fa-envelope', text: 'youssefrrajeh@gmail.com', link: 'mailto:youssefrrajeh@gmail.com', label: 'Email' },
              { icon: 'fas fa-phone', text: '+1 (548) 388-4360', link: 'tel:+15483884360', label: 'Phone' },
              { icon: 'fab fa-whatsapp', text: 'WhatsApp', link: 'https://wa.me/15483884360', label: 'WhatsApp' },
              { icon: 'fas fa-map-marker-alt', text: 'London, ON, Canada', link: 'https://www.google.com/maps/place/London,+ON,+Canada', label: 'Location' }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  <i className={item.icon}></i>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{
                    color: '#64748b',
                    fontSize: '0.9rem',
                    marginBottom: '5px',
                    fontWeight: '500'
                  }}>
                    {item.label}
                  </h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1e293b',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
