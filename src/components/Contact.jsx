import React from 'react';
import '../assets/styles/components/Contact.scss';
import Networks from './Networks';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact__container'>
        <div className='contact__container-networks'>
          <Networks />
        </div>
        <div className='contact__container-info'>
          <p>
            Developed by <strong>@nasterboost</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
