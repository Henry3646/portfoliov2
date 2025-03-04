const ContactForm = () => {
    return (
      <section id="contact" className="py-20 px-6 bg-[#111] border-t border-[#222]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Lets Connect</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question or want to work together? Drop me a message below!
            </p>
          </div>
  
          {/* Form */}
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#181818] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#74C365] focus:ring-2 focus:ring-[#74C365] outline-none transition-all"
                required
              />
            </div>
  
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-[#181818] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#74C365] focus:ring-2 focus:ring-[#74C365] outline-none transition-all"
                required
              />
            </div>
  
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-[#181818] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#74C365] focus:ring-2 focus:ring-[#74C365] outline-none transition-all"
                required
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#74C365] text-white font-medium rounded-lg hover:bg-[#5AA352] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;