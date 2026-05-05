import React, { Suspense, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert } = useAlert();

  useEffect(() => {
    // Initialize EmailJS with the public key on mount
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Shasank Singh Thakuri',
          from_email: form.email,
          to_email: 'shasanksingh000@gmail.com',
          message: form.message,
        }
      )
      .then(() => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        showAlert({ show: true, text: 'Message sent successfully 🚀', type: 'success' });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.error(err);
        showAlert({ show: true, text: 'Failed to send message. Try again ❌', type: 'danger' });
      });
  };

  const labelGradientClasses = "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 drop-shadow-md";

  return (
    <section className="w-full flex justify-center py-20 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-gray-900)_30%,_var(--tw-color-indigo-900)_100%)] min-h-screen">
      {alert.show && <Alert {...alert} />}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl w-full">
        
        <div className="flex-1 w-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 flex flex-col justify-center transform hover:shadow-indigo-500/30 transition-shadow duration-500">
          
          <h1 className="text-4xl font-black mb-10 text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            Contact Me 
          </h1>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            <label className={`flex flex-col text-sm font-semibold ${labelGradientClasses}`}>
              Name
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="mt-2 px-5 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300 shadow-inner"
                required
              />
            </label>

            <label className={`flex flex-col text-sm font-semibold ${labelGradientClasses}`}>
              Email
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="mt-2 px-5 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-transparent focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all duration-300 shadow-inner"
                required
              />
            </label>

            <label className={`flex flex-col text-sm font-semibold ${labelGradientClasses}`}>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="mt-2 px-5 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none shadow-inner"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className={`mt-6 py-3 rounded-xl font-bold text-white text-lg transition-all duration-500 ${
                isLoading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:translate-y-[-2px]'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div 
          className="flex-1 w-full max-w-md h-[400px] md:h-[500px] lg:h-[550px] 
                     bg-gradient-to-br from-white/5 via-white/10 to-transparent backdrop-blur-xl 
                     rounded-2xl shadow-2xl overflow-hidden flex justify-center items-center 
                     border border-white/20 transform hover:shadow-pink-500/50 transition-shadow duration-500" 
        >
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
            onCreated={({ gl }) => {
              gl.domElement.addEventListener("webglcontextlost", (e) => {
                e.preventDefault();
                console.warn("WebGL Context Lost. Preventing default reload.");
              });
            }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.25, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;