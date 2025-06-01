
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshayamuvva2855@gmail.com",
      href: "mailto:akshayamuvva2855@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9515559609",
      href: "tel:+919515559609"
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#2D2D2D' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-500"
              style={{ color: '#F4D35E' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 transition-all duration-500 hover:w-32"
               style={{ backgroundColor: '#B68973' }}></div>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300"
             style={{ color: '#E5E5E5' }}>
            Let's connect and discuss opportunities in ML, Data Science, or any exciting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group block p-8 rounded-2xl border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ backgroundColor: '#121212', borderColor: '#B68973' }}
              >
                <div className="flex items-center">
                  <div className="p-4 rounded-full mr-6 transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: index === 0 ? '#B68973' : '#F4D35E' }}>
                    <info.icon className="w-8 h-8" style={{ color: '#121212' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 transition-colors duration-300"
                        style={{ color: '#E5E5E5' }}>{info.label}</h3>
                    <p className="transition-colors duration-300"
                       style={{ color: '#B68973' }}>{info.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="p-8 rounded-2xl border hover:shadow-2xl transition-all duration-500 hover:scale-105"
               style={{ backgroundColor: '#121212', borderColor: '#B68973' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: '#E5E5E5' }}>Ready to Collaborate?</h3>
              <p className="transition-colors duration-300"
                 style={{ color: '#E5E5E5' }}>
                I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology and machine learning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:akshayamuvva2855@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
                style={{ backgroundColor: '#F4D35E', color: '#121212' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#B68973'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F4D35E'}
              >
                <Send className="w-5 h-5 mr-2 transition-transform duration-300 hover:scale-110" />
                Send Email
              </a>
              <a
                href="tel:+919515559609"
                className="inline-flex items-center justify-center border-2 px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-110"
                style={{ borderColor: '#B68973', color: '#B68973' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B68973';
                  e.target.style.color = '#121212';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#B68973';
                }}
              >
                <Phone className="w-5 h-5 mr-2 transition-transform duration-300 hover:scale-110" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
