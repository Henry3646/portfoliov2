import ShinyText from "./TextAnimations/ShinyText/ShinyText";

const Footer = () => {
    return (
      <footer className="py-6 border-t border-[#222] bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">
            Built with <span className="text-[#74C365]">♥</span> by&nbsp;
            </p>
            <ShinyText text="Henry Arlt" disabled={false} speed={2} className="text-sm"/>
            <p className="text-gray-400 text-sm">
             • Powered by <span className="text-[#74C365]">coffee</span> and <span className="text-[#74C365]">code</span> • 
            © {new Date().getFullYear()}
          </p>
        </div>
        <div className="mt-2 flex justify-center items-center space-x-4">
            <a 
              href="https://github.com/Henry3646" 
              className="text-gray-400 hover:text-[#74C365] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/henry-arlt" 
              className="text-gray-400 hover:text-[#74C365] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>
          </div>
      </footer>
    );
  };

export default Footer;