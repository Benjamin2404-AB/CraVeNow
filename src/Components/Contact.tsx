
import { Label } from '@mui/icons-material'
import '../Styles/Contact.css'
import Footer from './Footer'
import PButton from './PButton'

function Contact() {
  return (
    <>
    <div className='contact'>
     

    <form action="" className='mailForm'>
    <h1>Contact Us</h1>
      <div className='formGroup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <label htmlFor='nameInput'>Name</label>
        <input type='text' id='nameInput' name='name' placeholder='Enter your name' required />
      </div>

      <div className='formGroup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <label htmlFor='mInput'>Email</label>
        <input type='email' id='mInput' name='email' placeholder='Enter your email address' required />
      </div>

      <div className='formGroup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <label htmlFor='phoneInput'>Phone Number</label>
        <input type='tel' id='phoneInput' name='phone' placeholder='Enter your phone number' />
      </div>

      <div className='formGroup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <label htmlFor='inquiryType'>Inquiry Type</label>
        <select id='inquiryType' name='inquiryType' required>
          <option value='reservation'>Reservation Inquiry</option>
          <option value='general'>General Question</option>
          <option value='feedback'>Feedback/Complaint</option>
          <option value='catering'>Catering Request</option>
          <option value='partnership'>Partnership Inquiry</option>
        </select>
      </div>


      <div className='formGroup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' placeholder='Enter your message' required></textarea>
      </div>






      <PButton func={'emp'}  id='sub' name='Send'/>
      {/* <button type='submit'>Submit</button> */}
    </form>
    </div>
    <section>
    <Footer />
    </section>
    
    
    </>
  )
}

export default Contact