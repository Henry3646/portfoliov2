import StarBorder from "../Animations/StarBorder/StarBorder";

interface SkillCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    iconBackground: string;
  }
  
  const SkillCard = ({ title, subtitle, icon, iconBackground }: SkillCardProps) => {
    return (
      <StarBorder as="button" color='#74C365' speed="6s">
      <div className="group flex items-start p-2 rounded-xl">
        {/* Icon Container - Always Visible */}
        <div 
          className="flex items-center justify-center p-2 rounded-lg mr-0 md:mr-4"
          style={{ 
            backgroundColor: `${iconBackground}A9`,
          }}
        >
          <div className="w-8 h-8 text-white">
            {icon || (
              <svg 
                className="w-full h-full" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            )}
          </div>
        </div>
    
        {/* Text Content - Hidden on Mobile */}
        <div className="hidden md:block flex-1 text-left">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </StarBorder>
    );
  };
  
  export default SkillCard;