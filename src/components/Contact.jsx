import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mvgrongo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setShowModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setStatus("idle"), 300);
  };

  // Auto-close modal after 5 seconds on success
  useEffect(() => {
    if (status === "success" && showModal) {
      const timer = setTimeout(() => closeModal(), 5000);
      return () => clearTimeout(timer);
    }
  }, [status, showModal]);

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "20px",
    border: "1px solid #3a494b",
    borderRadius: "8px",
    fontSize: "1rem",
    fontFamily: '"Hanken Grotesk", sans-serif',
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
    background: "#080f10",
    color: "#dce4e4",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#151d1e",
        minHeight: "600px",
        position: "relative",
      }}
    >
      {/* Feedback Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#192122",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "30px",
              maxWidth: "340px",
              width: "85%",
              textAlign: "center",
              position: "relative",
              animation: "scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <>
                {/* Success Icon */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #00f8aa 0%, #00e29b 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 8px 25px rgba(0, 248, 170, 0.3)",
                    animation:
                      "bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline
                      points="20 6 9 17 4 12"
                      style={{
                        animation: "drawCheck 0.5s ease forwards 0.3s",
                        strokeDasharray: 24,
                        strokeDashoffset: 24,
                      }}
                    />
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#00f8aa",
                    marginBottom: "8px",
                  }}
                >
                  Got it!
                </h3>

                <p
                  style={{
                    fontFamily: '"Hanken Grotesk", sans-serif',
                    color: "#b9cacb",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  Thanks for the message! I'll get back to you soon.
                </p>

                <button
                  className="modal-close-btn"
                  onClick={closeModal}
                  style={{
                    padding: "10px 30px",
                    background:
                      "linear-gradient(135deg, #00f8aa 0%, #00e29b 100%)",
                    color: "#002113",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(0, 248, 170, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Close
                </button>
              </>
            ) : (
              <>
                {/* Error Icon */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #ffb4ab 0%, #93000a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 8px 25px rgba(255, 180, 171, 0.25)",
                    animation: "shake 0.5s ease",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#ffb4ab",
                    marginBottom: "8px",
                  }}
                >
                  Something went wrong
                </h3>

                <p
                  style={{
                    fontFamily: '"Hanken Grotesk", sans-serif',
                    color: "#b9cacb",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  The form didn't go through. Email me at{" "}
                  <a
                    href="mailto:youssefrrajeh@gmail.com"
                    style={{ color: "#00f2ff", fontWeight: "600" }}
                  >
                    youssefrrajeh@gmail.com
                  </a>
                </p>

                <button
                  className="modal-close-btn"
                  onClick={closeModal}
                  style={{
                    padding: "10px 30px",
                    background:
                      "linear-gradient(135deg, #00f2ff 0%, #00dbe7 100%)",
                    color: "#00363a",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(0, 242, 255, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* CSS Animations & Responsive Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .contact-input:focus {
          border-color: #00f2ff !important;
          box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.1) !important;
        }
        .contact-info-card:hover {
          border-color: rgba(0, 242, 255, 0.35) !important;
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.12) !important;
        }
        .modal-close-btn:hover {
          transform: translateY(-2px) scale(1.05);
        }
        .contact-label {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          color: #849495;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
          display: block;
          text-align: left;
        }
        
        @media (max-width: 768px) {
          .contact-info-list {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 15px !important;
            width: 100% !important;
            margin-top: 20px !important;
          }
          .contact-info-card {
            width: 50px !important;
            height: 50px !important;
            padding: 0 !important;
            border-radius: 50% !important;
            justify-content: center !important;
            background: rgba(25, 33, 34, 0.7) !important;
            border: 1px solid rgba(0, 242, 255, 0.15) !important;
            backdrop-filter: blur(12px) !important;
          }
          .contact-text-container {
            display: none !important;
          }
          .contact-info-icon {
            width: 100% !important;
            height: 100% !important;
            background: transparent !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .contact-info-icon i {
            color: #00f2ff !important;
            font-size: 1.2rem !important;
          }
          .contact-section-title {
            font-size: 1.8rem !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          className="contact-section-title"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: "3rem",
            marginBottom: "60px",
            color: "#dce4e4",
            fontWeight: "700",
          }}
        >
          Get In Touch
        </h2>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginTop: "40px",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              background: "#192122",
              padding: "40px",
              borderRadius: "16px",
              boxShadow: "none",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <label className="contact-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                style={inputStyle}
              />

              <label className="contact-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                style={inputStyle}
              />

              <label className="contact-label">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="contact-input"
                style={inputStyle}
              />

              <label className="contact-label">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="contact-input"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  width: "100%",
                  padding: "18px 30px",
                  background:
                    status === "submitting"
                      ? "#3a494b"
                      : "#00f2ff",
                  color: status === "submitting" ? "#849495" : "#00363a",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1.1rem",
                  fontFamily: '"Hanken Grotesk", sans-serif',
                  fontWeight: "700",
                  cursor: status === "submitting" ? "not-allowed" : "pointer",
                  boxShadow: status === "submitting" ? "none" : "0 0 20px rgba(0, 242, 255, 0.2)",
                  transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {status === "submitting" ? (
                  <>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "3px solid rgba(255,255,255,0.2)",
                        borderTop: "3px solid #00f2ff",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {/* Spinner animation */}
              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="contact-info-list"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "fas fa-envelope",
                text: "youssefrrajeh@gmail.com",
                link: "mailto:youssefrrajeh@gmail.com",
                label: "Email",
              },
              {
                icon: "fas fa-phone",
                text: "+1 (548) 388-4360",
                link: "tel:+15483884360",
                label: "Phone",
              },
              {
                icon: "fab fa-whatsapp",
                text: "WhatsApp",
                link: "https://wa.me/15483884360",
                label: "WhatsApp",
              },
              {
                icon: "fas fa-map-marker-alt",
                text: "London, ON, Canada",
                link: "https://www.google.com/maps/place/London,+ON,+Canada",
                label: "Location",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
                style={{
                  background: "#192122",
                  padding: "20px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "none",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  minHeight: "60px",
                  WebkitTapHighlightColor: "transparent",
                }}

              >
                <div
                  className="contact-info-icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(0, 242, 255, 0.08)",
                    border: "1px solid rgba(0, 242, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00f2ff",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <div className="contact-text-container" style={{ textAlign: "left", flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: "#849495",
                      fontSize: "0.75rem",
                      marginBottom: "5px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}
                  </h4>
                  <span
                    style={{
                      fontFamily: '"Hanken Grotesk", sans-serif',
                      color: "#dce4e4",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
