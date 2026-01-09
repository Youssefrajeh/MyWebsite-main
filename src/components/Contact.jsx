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
    padding: "15px",
    marginBottom: "20px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    borderColor: "#6366f1",
    boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.1)",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
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
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
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
              background: "white",
              borderRadius: "24px",
              padding: "50px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              position: "relative",
              animation: "scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <>
                {/* Success Icon */}
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 30px",
                    boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
                    animation:
                      "bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                  <svg
                    width="50"
                    height="50"
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
                    fontSize: "2rem",
                    fontWeight: "800",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "15px",
                  }}
                >
                  Got it!
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    marginBottom: "25px",
                  }}
                >
                  Thanks for the message! I'll read it and get back to you soon.
                </p>

                <button
                  onClick={closeModal}
                  style={{
                    padding: "15px 40px",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Close
                </button>
              </>
            ) : (
              <>
                {/* Error Icon */}
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 30px",
                    boxShadow: "0 15px 40px rgba(239, 68, 68, 0.4)",
                    animation: "shake 0.5s ease",
                  }}
                >
                  <svg
                    width="50"
                    height="50"
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
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#ef4444",
                    marginBottom: "15px",
                  }}
                >
                  Something went wrong
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    marginBottom: "25px",
                  }}
                >
                  The form didn't go through. You can email me directly at{" "}
                  <a
                    href="mailto:youssefrrajeh@gmail.com"
                    style={{ color: "#6366f1", fontWeight: "600" }}
                  >
                    youssefrrajeh@gmail.com
                  </a>
                </p>

                <button
                  onClick={closeModal}
                  style={{
                    padding: "15px 40px",
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* CSS Animations */}
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
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .contact-input:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1) !important;
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
          style={{
            fontSize: "3rem",
            marginBottom: "60px",
            background: "linear-gradient(to right, #8b5cf6, #ec4899, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
          }}
        >
          Get In Touch
        </h2>

        <div
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
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            <form onSubmit={handleSubmit}>
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
                      ? "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)"
                      : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: status === "submitting" ? "not-allowed" : "pointer",
                  boxShadow:
                    status === "submitting"
                      ? "none"
                      : "0 10px 30px rgba(99, 102, 241, 0.4)",
                  transition: "all 0.3s ease",
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
                        border: "3px solid rgba(255,255,255,0.3)",
                        borderTop: "3px solid white",
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
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <div style={{ textAlign: "left" }}>
                  <h4
                    style={{
                      color: "#64748b",
                      fontSize: "0.9rem",
                      marginBottom: "5px",
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#1e293b",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: "600",
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
