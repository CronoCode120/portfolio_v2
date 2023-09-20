import { FormEvent, useState } from "react"
import { send } from '@emailjs/browser'
import toast from 'react-hot-toast'

const initValue = {
  name: '',
  email: '',
  subject: '',
  body: ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initValue)

  const handleChange = (e: React.ChangeEvent) => {
    const element = e.target
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      const key = element.name
      const value = element.value
      setFormData(prevData => ({ ...prevData, [key]: value }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    toast.loading('Sending...')
    send('contact', 'contact-template', formData, '6yqKyhuV6fyMzlF56')
      .then(() => {
        toast.dismiss()
        setFormData(initValue)
        toast.success('Sent successfully!')
      })
      .catch(error => {
        console.log(error)
        toast.error('Something went wrong, please try again!')
      })
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="w-full max-w-[500px] flex flex-col items-center gap-[20px] bg-gray-300 p-5 rounded-2xl border-[3px] border-gray-400">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-semibold text-sm mb-1">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={e => handleChange(e)}
          placeholder="Full Name"
          maxLength={50}
          required
          className="h-8 px-3 rounded-[0_1rem_1rem_1rem] font-light"
        ></input>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="font-semibold text-sm mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={e => handleChange(e)}
          placeholder="Email"
          maxLength={50}
          required
          className="h-8 px-3 rounded-[0_1rem_1rem_1rem] font-light"
        ></input>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="subject" className="font-semibold text-sm mb-1">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={e => handleChange(e)}
          placeholder="Subject"
          maxLength={80}
          required
          className="h-8 px-3 rounded-[0_1rem_1rem_1rem] font-light"
        ></input>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="body" className="font-semibold text-sm mb-1">Message</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={e => handleChange(e)}
          placeholder="Write your message here"
          maxLength={400}
          required
          rows={10}
          cols={30}
          className="resize-none rounded-[0_1rem_1rem_1rem] font-light px-3 py-1"
        ></textarea>
      </div>
      <button
        type="submit"
        className="p-2 w-[160px] border-[2px] border-black rounded-lg bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
