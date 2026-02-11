import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Instagram, Facebook, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ingqqie', 'template_wax7oof', form.current, 'veGcaoYYcJ4pT0lNw')
      .then((result) => {
          alert("¡Mensaje enviado con éxito! 🍔");
          form.current.reset();
      }, (error) => {
          alert("Error al enviar: " + error.text);
      });
  };

  return (
    <div className="bg-fondo-light min-h-screen flex items-center justify-center p-5 md:p-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">

        <div className="bg-fondo-dark rounded-3xl p-6 md:p-10 w-full lg:w-1/2 shadow-2xl/30 order-2 lg:order-1">
          <h1 className="text-fondo-light font-bold text-2xl md:text-3xl text-center lg:text-left">Envíanos un mensaje</h1>

          
          <form ref={form} onSubmit={sendEmail}>
            <div className='text-fondo-light mt-5'>
              <label htmlFor="user_name" className="block mb-1">Nombre:</label>
              <input 
                name="user_name" 
                className='w-full p-2 rounded-lg bg-fondo-light text-fondo-dark focus:ring-2 focus:ring-primary outline-none' 
                type="text" 
                id="user_name" 
                placeholder="Ingresa tu nombre" 
                required 
              />
            </div>

            <div className='text-fondo-light mt-5'>
              <label htmlFor="user_email" className="block mb-1">Correo Electrónico:</label>
              <input 
                name="user_email"
                className='w-full p-2 rounded-lg bg-fondo-light text-fondo-dark focus:ring-2 focus:ring-primary outline-none' 
                type="email" 
                id="user_email" 
                placeholder="Ingresa tu correo electrónico" 
                required 
              />
            </div>

            <div className='text-fondo-light mt-5'>
              <label htmlFor="message" className="block mb-1">Mensaje:</label>
              <textarea 
                name="message"
                className='w-full h-32 p-2 rounded-lg bg-fondo-light text-fondo-dark focus:ring-2 focus:ring-primary outline-none resize-none' 
                id="message" 
                placeholder="¿Qué tienes para decirnos?" 
                required
              ></textarea>
            </div>

            <button type="submit" className='w-full md:w-auto bg-primary text-white px-8 py-3 rounded-lg mt-5 font-bold hover:bg-secondary transition-all'>
              Enviar
            </button>
          </form>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2'>

          <h1 className='text-fondo-dark text-3xl md:text-4xl font-bold text-center lg:text-left'> Nuestra información </h1>

          <div className='flex flex-col sm:flex-row lg:flex-col gap-4 mt-8'>

            <div className='flex items-center p-4 md:p-5 gap-6 rounded-3xl shadow-xl bg-white/50 w-full'>
              <Phone size={30} className="text-primary"/>
              <p className='text-fondo-dark font-semibold text-sm md:text-base'>+58 412-216-5962</p>
            </div>

            <div className='flex items-center p-4 md:p-5 gap-6 rounded-3xl shadow-xl bg-white/50 w-full'>
              <Mail size={30} className="text-primary"/> 
              <p className='text-fondo-dark font-semibold text-sm md:text-base break-all'>fastfoodcontrol@gmail.com</p>
            </div>
          </div>

      <div className="mt-10">
        <h1 className='text-fondo-dark text-xl md:text-2xl font-bold text-center lg:text-left'>
          Síguenos en nuestras redes sociales
        </h1>
        <div className='flex items-center gap-6 mt-5 bg-fondo-dark p-5 rounded-3xl shadow-2xl/30 justify-center'>
          <a href="https://www.facebook.com" className='text-fondo-light hover:text-primary transition-all scale-110'><Facebook /></a>
          <a href="https://www.instagram.com" className='text-fondo-light hover:text-primary transition-all scale-110'><Instagram /></a>
          <a href="https://www.twitter.com" className='text-fondo-light hover:text-primary transition-all scale-110'><Twitter /></a>
          <a href="https://www.github.com" className='text-fondo-light hover:text-primary transition-all scale-110'><Github /></a>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}
