import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-poppins">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 text-sm md:text-base">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-8">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/address.png"
                alt="Address icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-8">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/phone.png"
                alt="Phone icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Phone</h3>
              <div className="text-gray-600 space-y-1">
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-8">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/time.png"
                alt="Time icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Working Time</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm">Message</label>
              <textarea
                rows={4}
                placeholder="Hi! I'd like to ask about"
                className="w-full p-3 border rounded-lg resize-none"
              />
            </div>

            <button 
              className="w-full bg-[#B88E2F] hover:bg-[#9d7829] text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

