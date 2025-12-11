import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import './App.css'; // 👈 using our own CSS
// import img from './assets/react.svg'
import hall from './assets/project_img1.jpg'
import bed from './assets/project_img2.jpg'
import living from './assets/project_img3.jpg'
import solutions from './assets/solutions.png'
import design1 from './assets/design1.jpg'
import design2 from './assets/design2.jpg'
import design3 from './assets/design3.jpg'
import logo from './assets/logo.png'
import kalinga from './assets/kalinga.jpg'
import ap from './assets/asianpaints.jpg'
import austin from './assets/austin.jpg'
import birla from './assets/birla.jpg'
import caesarstone from './assets/caesarstone.jpg'
import century from './assets/century.jpg'
import greenlam from './assets/greenlam.jpg'
import hafele from './assets/hafele.jpg'
import kaff from './assets/kaff.jpg'
import maria from './assets/maria.jpg'
import merino from './assets/merino.jpg'
import royale from './assets/royale.jpg'
import sharon from './assets/sharon.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleRatingClick = (rating) => {
  //   setFormData(prev => ({ ...prev, rating }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);

    // post
    try {
      await fetch("https://sheetdb.io/api/v1/bpyvbaetje41r", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
      });
    }, 3000);
  };

  const projectTypes = [
    'Casual Fine Dining & Kitchen',
    'Fashion & Workspaces',
    'Cozy Café',
    'your Home',
    'Other'
  ];

  if (submitted) {
    return (
      <div className="thankyou-container">
        <div className="thankyou-box">
          <CheckCircle className="icon-success" />
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <p className="quote">"Your plans, our promise – built with care from start to finish."</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="form-wrapper">
        <div className="form-header">

          {/* <div className='logo_wrapper'> */}
          {/* <img className='footer_logo' src={logo} alt="logo" /> */}
          <h1>NOORSPACE INTERIORS</h1>
          {/* </div> */}
          <p className="subtitle">We need your vision</p>
          <p className="desc">
            "With us, creativity meets trust, and your smile says it all."
            <br />
            Help us continue delivering affordable dreams, beautifully done!
          </p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <label>
            Full Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </label>

          {/* Email */}
          <label>
            Email Address *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
            />
          </label>

          {/* Phone */}
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 9000951973"
            />
          </label>

          {/* Project Type */}
          <label>
            Project Type *
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>


          {/* solution */}
          <div className='solutions_container'>
            <label>Seamless interior services</label>
            <div className='solutions_wrapper'>
              <img src={solutions} alt="solutions" />
            </div>
          </div>

          {/* images */}
          {/* <div className='image_wrapper'>
            <label>Take a look at our projects</label>
            <div className='image_container'>
              <img src={design1} alt="design_img" />
              <img src={hall} alt="project_img" />
              <img src={design2} alt="design_img" />
              <img src={bed} alt="project_img" />
              <img src={design3} alt="design_img" />
              <img src={living} alt="project_img" />
            </div>
          </div> */}

          {/* pricing */}
          <div className='pricing wrapper'>
            <label>Our Pricing</label>
            <div className='pricing_container'>
              {/* extra */}
              <div className="pricing_card basic">
                <h3>Basic</h3>
                <p className="price">₹500 - ₹800 / sq.ft</p>
                <ul>
                  <li>Affordable designs</li>
                  <li>Standard materials</li>
                  <li>Basic finishing</li>
                </ul>
              </div>

              <div className="pricing_card mid">
                <h3>Mid-Range</h3>
                <p className="price">₹800 - ₹1500 / sq.ft</p>
                <ul>
                  <li>Premium look</li>
                  <li>Better materials</li>
                  <li>Customizable options</li>
                </ul>
              </div>

              <div className="pricing_card luxury">
                <h3>Luxury</h3>
                <p className="price">₹1500+ / sq.ft</p>
                <ul>
                  <li>High-end interiors</li>
                  <li>Luxury finishes</li>
                  <li>Exclusive designs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* brands */}
          <div className='brands_wrapper'>
            <label>Brands we use</label>
            <div className='brands'>
              <img src={kalinga} alt="kalinga" />
              <img src={ap} alt="ap" />
              <img src={austin} alt="austin" />
              <img src={birla} alt="birla" />
              <img src={caesarstone} alt="caesarstone" />
              <img src={century} alt="century" />
              <img src={greenlam} alt="greenlam" />
              <img src={hafele} alt="hafele" />
              <img src={kaff} alt="kaff" />
              <img src={maria} alt="maria" />
              <img src={merino} alt="merino" />
              <img src={royale} alt="royale" />
              <img src={sharon} alt="sharon" />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            <Send className="icon-send" />
            Submit Feedback
          </button>
        </form>

        <div className="footer">
          {/* <div className='logo_wrapper'> */}
          <img className='footer_logo' src={logo} alt="logo" />
          {/* <p className="brand">Noorspace Interiors</p> */}
          {/* </div> */}
          <p>31-30-32, opposite Ashoka reside, Dabagardens, Visakhapatnam</p>
          <p>+91 9000951973 | noorspaceinteriors@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
