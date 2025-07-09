import React from 'react';
import { motion } from 'framer-motion';
import about from "../assets/about.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="about">
        <motion.div
          className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div className="w-full md:w-1/2" variants={fadeIn}>
            <img src={about} alt="About" className="w-full h-auto" />
          </motion.div>

          <motion.div className='md:w-3/5 w-full text-center md:text-left' variants={fadeIn}>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum...
            </p>
            <button className='btn-primary'>Learn More</button>
          </motion.div>
        </motion.div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <motion.div
          className='flex flex-col md:flex-row justify-between items-center gap-8'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div className='md:w-1/2 text-center md:text-left' variants={fadeIn}>
            <h2 className='text-4xl text-neutralDGrey font-semibold md:w-2/3'>
              Helping a local
            </h2>
            <h2 className='text-brandPrimary text-4xl font-semibold mb-4 md:w-2/3'>
              business reinvent itself
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </motion.div>

          {/* stats */}
          <motion.div
            className='md:w-1/2 w-full flex flex-wrap justify-around gap-12 mt-8 md:mt-0'
            variants={fadeIn}
          >
            {/* Group 1 */}
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/members.png" alt="members" className='w-12 h-12' />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/event.png" alt="events" className='w-12 h-12' />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/club.png" alt="clubs" className='w-12 h-12' />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src="/src/assets/icons/payment.png" alt="payments" className='w-12 h-12' />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
