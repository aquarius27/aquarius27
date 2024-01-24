import React, { useRef, useState } from 'react'
import SocilLinks from './Sociallink';
import { FaLocationDot , FaEnvelope } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
 


const Contacts: React.FC = () => {

 const [name,setName] = useState('');
 const [email,setEmail] = useState('');
 const [message,setMessage] = useState('');

 const TemplateForm={
  to_name: name,
  form_name: email,
  message: message,
 }


  


  function sendEmail(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const SERVICE_ID = "service_d0q1hkv";
    const Template_ID = "template_2pyqgbq";
    const Public_key = "ZMHApN_4NQJUOkrwf"

    emailjs.send(SERVICE_ID,Template_ID,TemplateForm,Public_key)
    .then((result)=>{
      setName('');
      setEmail('');
      setMessage('');
      console.log(result);

    },(error)=>{console.log(error); });




    
  }

  return (
   <div className='text-white md:h-fit  flex sm:justify-center justify-around w-full items-center flex-col  '>

      <div className='sm:flex-col flex w-full   justify-evenly'>
        <div className='box-border p-3'>
        <h1 className='text-green-400 text-3xl font-normal box-border p-2'>Connect with me</h1>
          <span className='flex box-border p-2 items-center'><FaLocationDot/><h1 className='mx-2'>Pune Maharashtra</h1></span>
          <span className='flex box-border p-2 items-center'><FaEnvelope/><h1 className='mx-2'>vitthalkokare777@gmail.com</h1></span>
          <SocilLinks/>
        </div>
        <div>
          <form action="" onSubmit={sendEmail} className='text-black'>
            <h1 className='text-green-400 text-3xl font-normal box-border p-2'>Contact me</h1>
            <span className='flex flex-col'>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Full Name' value={name} required  className='box-border p-2 rounded-2xl'/>
            </span>
            <span className='flex flex-col my-2'>
              <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Your Email' value={email} required className='box-border p-2 rounded-2xl'/>
            </span>
            <span>
              <textarea onChange={(e)=>setMessage(e.target.value)} name="" id=""required placeholder='Your Message' value={message} className='box-border p-2 min-h-[100px] resize-none w-full rounded-lg'></textarea>
            </span>
            <button type='submit'  className='box-border py-2 px-5 bg-blue-500 rounded-2xl'>Submit</button>

          </form>
        </div>
      </div>


<span className='w-[70%] h-1 box-border m-3 bg-white'></span>

   </div>
  )
}

export default Contacts;
