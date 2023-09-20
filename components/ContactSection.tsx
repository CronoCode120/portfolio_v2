import { ContactForm } from "."

const ContactSection = () => {
  return (
    <section id="contact" className="h-full lg:h-screen w-full pt-14" >
      <h2 className="text-5xl font-semibold w-full text-center mb-8">Contact me</h2>
      <div className="w-full flex max-lg:flex-col justify-evenly items-center max-lg:gap-[40px] lg:items-start">
        <ContactForm />
        <div className="p-4 flex flex-col gap-[40px]">
          <div>
            <p className="font-semibold text-lg mb-1">Email</p>
            <a href="mailto:ctaverafernandez@gmail.com" className="border-b-[2px] border-black lg:border-transparent lg:hover:border-black lg:transition-all lg:duration-300">ctaverafernandez@gmail.com</a>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Phone Number</p>
            <a href="tel:+34601351466" className="border-b-[2px] border-black lg:border-transparent lg:hover:border-black lg:transition-all lg:duration-300">+34 601 351 466</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
