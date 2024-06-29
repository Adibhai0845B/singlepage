/*import React from 'react'

function Location() {
  return (
    <div>
      <address>
        Location
      </address>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.677449773394!2d80.33361977507069!3d26.433883576935813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470e70af7863%3A0x7f5e7d44f6dce7a!2sPanchvati%20sarees!5e0!3m2!1sen!2sin!4v1717257136411!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location
*/
import React from 'react';

function Location() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <address className="mb-4 text-4xl font-semibold text-center">
          Location
        </address>
        <div className="overflow-hidden rounded-lg shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.677449773394!2d80.33361977507069!3d26.433883576935813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470e70af7863%3A0x7f5e7d44f6dce7a!2sPanchvati%20sarees!5e0!3m2!1sen!2sin!4v1717257136411!5m2!1sen!2sin"
            width="300"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Location;
