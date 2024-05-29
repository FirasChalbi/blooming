'use client'
import React from 'react';
import { BiPaperPlane } from "react-icons/bi";
import { Flex } from '@chakra-ui/react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact2() {
  const { register, handleSubmit } = useForm<FormData>();
  
  function onSubmit(data: FormData) {
    sendEmail(data)
    
  }
  
  return (
    <>
    <ToastContainer />
      <section className="w3l-contact-main pt-[50px]" id="contact">
        <div className="contact-infhny py-5">
          <div className="container py-md-5 ContactPageForm">
            <div className="title-content text-center mb-3">
              <h6 className="title-subw3hny"> Envoyez-nous un message </h6>
              <h3 className="title-w3l mx-lg-5 text-black"> Restez En Contact Avec Nous. </h3>
              <p className="text-para mt-2"> N'hésitez pas à nous contacter pour toute question, commentaire ou demande d'informations que vous pourriez avoir. Nous sommes là pour vous aider et impatients de vous entendre ! </p>
            </div>
            <div className="top-map">
              <div className="map-content-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-top1">
                    <div className="form-top">
                      <div className="form-top-righ">
                      <textarea className="w-full p-2 border rounded-md" id="Message" placeholder="Message*" {...register('message', { required: true })}></textarea>
                      </div>
                      <div className="form-top-left">
                        <input className="w-full p-2 mb-2 border rounded-md" type="text" id="w3lName" placeholder="Nom" {...register('name', { required: true })}/>
                        <input className="w-full p-2 mb-2 border rounded-md" type="tel" name="w3lPhone" placeholder="Votre numéro de téléphone" />
                        <input className="w-full p-2 mb-2 border rounded-md" type="email" id="w3lSender" placeholder="Email*" {...register('email', { required: true })}/>
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <button type="submit" className="btn btn-style btn-primary bg-[#46C7C7] "><Flex gap={10} color="white">Envoyer Maintenant <BiPaperPlane className="text-xl mt-[-2px]"/></Flex></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-contact-main pt-[10px]" id="contact">
        <div className="container ContactPageMap">
          <div className="map pt-lg-3">
            <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528736.411358302!2d9.413343061630347!3d34.85161209659349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ef44783e1f73d1%3A0x3d62aae3b53d8199!2sTunisia!5e0!3m2!1sen!2sin!4v1570181661801!5m2!1sen!2sin" ></iframe>
          </div>
        </div>
      </section>

      <section className="w3l-contact-main w3l-contact-info py-5 pb-10" id="contact">
        <div className="midd-w3 py-md-5">
          <div className="container ContactPageDetails">
            <div className="row3 contact-infos pt-lg-4">
              <div className="col-lg-4 col-md-6 pe-lg-5">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-map-marked-alt"><FaMapLocationDot /></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2 text-black">Localisation</h3>
                    <p>Blooming, Route de gabes km 1.5 Sfax 3000, Tunisie.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 ">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-envelope-open-text"><FaPhoneVolume /></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2 text-black">Numéros</h3>
                    <p>
                      <a href="tel:+12 403-11-22-69">+216 58 417 803</a>
                    </p>
                    <p>
                      <a href="tel:+12 304-11-22-79">+216 52 962 066</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-blender-phone"><MdEmail /></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2 text-black">Emails</h3>
                    <p>
                      <a href="mailto:company@gmail.com">direction@blooming-agriafrica.tn</a>
                    </p>
                    <p>
                      <a href="mailto:support@gmail.com">commercial@blooming-agriafrica.tn</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
