import TopHero from '@/components/TopHero'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white text-black'>
      <TopHero img={'/services/hero.jpg'} name={'Privacy Policy'} />
      <div className='py-20 w-[80%] mx-auto'>

        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Privacy Policy for Tackles</h1>
          <p className='text-xl'>At Tackles, accessible from tackles.ae, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Tackles and how we use it.
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        </div>

        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Log Files</h1>
          <p className='text-xl'>Tackles follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        </div>

        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Google DoubleClick DART Cookie</h1>
          <p className='text-xl'>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL –</p>
        </div>

        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Third Party Privacy Policies</h1>
          <p className='text-xl'>Tackles's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
        </div>

        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Children's Information
          </h1>
          <p className='text-xl'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          Tackles does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        </div>


        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Online Privacy Policy Only

          </h1>
          <p className='text-xl'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Tackles. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </div>


        <div className='py-10 '>
          <h1 className='text-2xl font-bold py-5'>Consent

          </h1>
          <p className='text-xl'>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>

      </div>
    </div>
  )
}
