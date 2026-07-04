"use client";
import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { FaInstagram } from "react-icons/fa";



import {
  Phone,
  Mail,
  MapPin,


  MessageCircle,
} from "lucide-react";

export default function ContactPage() {

  const [name, setName] = useState("");

const [mobile, setMobile] = useState("");

const [email, setEmail] = useState("");

const [subject, setSubject] = useState("");

const [message, setMessage] = useState(""); 

const [nameError, setNameError] = useState("");
const [mobileError, setMobileError] = useState("");
const [, setEmailError] = useState("");
const [subjectError, setSubjectError] = useState("");
const [messageError, setMessageError] = useState("");

const handleWhatsAppSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form Submitted");
  // Clear previous errors
setNameError("");
setMobileError("");
setEmailError("");
setSubjectError("");
setMessageError("");

let hasError = false;

if (!name.trim()) {
  setNameError("Please enter your name.");
  hasError = true;
}

if (!mobile.trim()) {
  setMobileError("Please enter your mobile number.");
  hasError = true;
} else if (!/^[6-9]\d{9}$/.test(mobile)) {
  setMobileError("Enter a valid 10-digit mobile number.");
  hasError = true;
}
{/*}
if (!email.trim()) {
  setEmailError("Please enter your email.");
  hasError = true;
} else if (!/\S+@\S+\.\S+/.test(email)) {
  setEmailError("Please enter a valid email address.");
  hasError = true;
} */}

if (!subject.trim()) {
  setSubjectError("Please select an inquiry type.");
  hasError = true;
}

if (!message.trim()) {
  setMessageError("Please enter your message.");
  hasError = true;
}

if (hasError) {
  console.log("Validation Failed");
  return;
}
  const text = `*New Contact Form Inquiry*

 Name:  ${name}

 Mobile:  ${mobile}

 Email: ${email}

 Subject:  ${subject}

 Message:
  ${message}`;

  const whatsappUrl = `https://wa.me/918788953747?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

       {/* ===========================================
              HERO
        =========================================== */}

        <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-28">

        {/* Background Glow */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

  </div>

        <div className="container-custom text-center">

    <p className="section-tag">
      CONTACT THE DRIP
    </p>

    <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">

      We&apos;d Love to
      <br />
      Welcome You.

    </h1>

    <p className="mx-auto mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

      Whether you&apos;re planning your next coffee break,
      meeting friends or simply exploring our menu,
      our team is always ready to help you.
      Visit us and experience freshly brewed coffee,
      refreshing boba drinks, delicious sandwiches,
      creamy shakes and kulfi.

    </p>

  </div>

</section>

        {/* ===========================================
    CONTACT DETAILS + FORM
=========================================== */}

<section className="pb-16">

  <div className="container-custom">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

      {/* ===========================
          LEFT SIDE
      =========================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Phone */}

        <div className="group rounded-[20px] border border-white/10 bg-[#151515] p-6 lg:p-8 transition-all duration-500 hover:border-[#C8A96A]">

          <Phone className="w-6 h-6 text-[#C8A96A]" />

          <h3 className="mt-6 text-xl font-semibold">
            Call Us
          </h3>

          <p className="mt-2 text-gray-400">
            +91 87889 53747
          </p>

        </div>

        {/* Email */}

      <div className="group rounded-[32px] border border-white/10 bg-[#151515] p-6 transition-all duration-500 hover:border-[#C8A96A]">

          <Mail className="w-6 h-6 text-[#C8A96A]" />

          <h3 className="mt-6 text-xl font-semibold">
            Email
          </h3>

          <p className="mt-2 text-gray-400">
            thedripbykulficlub@gmail.com
          </p>

        </div>

        {/* Address */}

       <div className="group rounded-[24px] border border-white/10 bg-[#151515] p-6 transition-all duration-500 hover:border-[#C8A96A]">

          <MapPin className="w-6 h-6 text-[#C8A96A]" />

          <h3 className="mt-6 text-xl font-semibold">
            Visit Us
          </h3>

          <p className="mt-2 text-gray-400 leading-8">
            Anand Nagar Bhagya Nagar Road
            Beside Shreeved Bank
            <br />
            Nanded,
            Maharashtra - 431605
          </p>

        </div>
      
        {/* Instagram */}

        <a
              href="https://www.instagram.com/thedrip_kulfi_club?igsh=N2s0dXppZXF4MDR2"
              target="_blank"
              rel="noopener noreferrer"
        
       className="group rounded-[24px] border border-white/10 bg-[#151515] p-6 lg:p-8 transition-all duration-500 hover:border-[#C8A96A]">

        <FaInstagram className="w-6 h-6 text-[#C8A96A]" />

          <h3 className="mt-6 text-xl font-semibold">
              Instagram
          </h3>

          <p className="mt-2 text-gray-400">
            @thedrip_kulfi_club
          </p>

</a>

      {/* WhatsApp */}

        <a
         href="https://wa.me/918788953747"
           target="_blank"
            rel="noopener noreferrer"
            >

     < div className="group rounded-[24px] border border-white/10 bg-[#151515] p-6 lg:p-8 transition-all duration-500 hover:border-[#C8A96A]">

      <MessageCircle className="w-6 h-6 text-[#C8A96A]" />

        <h3 className="mt-6 text-2xl font-semibold">
         WhatsApp
       </h3>

        <p className="mt-2 text-gray-400">
            +91 87889 53747
         </p>

          </div>
          </a>
          {/*operating hours*/}
           <div className="group rounded-[24px] border border-white/10 bg-[#151515] p-6 lg:p-8 transition-all duration-500 hover:border-[#C8A96A]">

      <MessageCircle className="w-6 h-6 text-[#C8A96A]" />

        <h3 className="mt-6 text-2xl font-semibold">
         Time to Visit
       </h3>

        <p className="mt-2 text-gray-400">
            11 Am - 11 Pm
         </p>

          </div>
            
 
        {/* Google Maps */}
<div className="sm:col-span-2 mt-6 lg:mt-8">
  <div className="rounded-[24px] overflow-hidden border border-white/10 bg-[#151515]">
    <iframe
      src="https://www.google.com/maps?q=19.1383,77.3210&z=15&output=embed"
      width="100%"
      height="200"
      loading="lazy"
      style={{ border: 0 }}
    />
  </div>

  <div className="text-center mt-5">
    <a
      href="https://maps.app.goo.gl/9jjMJQotXzxgn8P77?g_st=ac"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-300 transition"
    >
      Open in Google Maps
    </a>
  </div>
</div>

      </div>

      {/* ===========================
          CONTACT FORM
      =========================== */}

      <div className="rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10 h-fit">
       <h2 className="text-2xl sm:text-3xl font-bold">
          Send us a Message
        </h2>

        <p className="mt-3 max-w-lg text-gray-400 leading-7">
         Have a question, feedback, collaboration request, or franchise inquiry?
         Fill out the form below and we&apos;ll get back to you as soon as possible.
</p>

        <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
<label className="block mb-2 text-gray-300">
    Details 
  </label>

          <input
             type="text"
               value={name}
                 onChange={(e) => setName(e.target.value)}
                   placeholder="Enter your full name"
                  className="w-full rounded-2xl bg-[#101010] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-[#C8A96A]"
/>
                    {nameError && (
  <p className="mt-2 text-sm text-red-500">
    {nameError}
  </p>
)}
            <input
             type="tel"
               value={mobile}
               onChange={(e) => setMobile(e.target.value)}
                  placeholder=" Enter Your Mobile Number"
                   className="w-full rounded-2xl bg-[#101010] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-[#C8A96A]"
            />

                      {mobileError && (
  <p className="mt-2 text-sm text-red-500">
    {mobileError}
  </p>
)}
                <input
            type="email"
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
                placeholder=" Enter Your Email (Optional)"
               className="w-full rounded-2xl bg-[#101010] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-[#C8A96A]"
              />
   {/*{emailError && (
  <p className="mt-2 text-sm text-red-500">
    {emailError}
  </p>
)} */}

                  <div>
  <label className="block mb-2 text-gray-300">
    Subject
  </label>

  <input
    type="text"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    placeholder="How can we help you?"
    className="w-full rounded-2xl bg-[#101010] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-[#C8A96A]"
  />

          {subjectError && (
  <p className="mt-2 text-sm text-red-500">
    {subjectError}
  </p>
)}
</div>
         <label className="block mb-2 text-gray-300">
    Message
  </label>

         
          <textarea
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Tell us how we can help..."
  className="w-full rounded-2xl bg-[#101010] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 outline-none resize-none focus:border-[#C8A96A]"
/>
        {messageError && (
  <p className="mt-2 text-sm text-red-500">
    {messageError}
  </p>
)}
 <button
  type="submit"
  className="btn-primary w-full justify-center"
>
  📩 Drop Us a Message
</button>
<div className="mt-5 text-center">

  <p className="text-sm font-medium text-white">
    Business Hours
  </p>

  <p className="mt-1 text-sm text-gray-400">
    Monday – Sunday • 11:00 AM – 11:00 PM
  </p>

  <p className="mt-3 text-sm text-[#C8A96A]">
    💬 We usually reply instantly on WhatsApp.
  </p>

</div>
        </form>

      </div>

    </div>

  </div>

</section>


      </main>

      <Footer />
    </>
  );
}