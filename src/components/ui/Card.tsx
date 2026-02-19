import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  style?: React.CSSProperties; // Style support add kiya
}

interface SubComponentProps {
  children: ReactNode;
  className?: string;
}

// Main Card: bg-white ko default rakha hai par className se override ho sakta hai
const Card = ({ children, variant = 'vertical', size = 'md', className = '', style }: CardProps) => {
  const sizeClasses: Record<string, string> = {
    sm: "max-w-xs", md: "max-w-md", lg: "max-w-xl", xl: "max-w-3xl", full: "w-full"
  };
  const layoutClasses = variant === 'horizontal' ? 'flex-row items-center' : 'flex-col';

  return (
    // Yahan se 'bg-white' hata kar default class mein dala hai taaki override ho sake
    <div 
      style={style}
      className={`border border-transparent rounded-2xl shadow-sm overflow-hidden flex ${sizeClasses[size]} ${layoutClasses} ${className}`}
    >
      {children}
    </div>
  );
};

const Body = ({ children, className = "" }: SubComponentProps) => (
  <div className={`p-5 flex-1 ${className}`}>{children}</div>
);

// Title: Default text-gray-900 hataya taaki parent ka color le sake
const Title = ({ children, className = "" }: SubComponentProps) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

// Text: Default text-gray-600 hataya
const Text = ({ children, className = "" }: SubComponentProps) => (
  <div className={`mt-2 leading-relaxed ${className}`}>{children}</div>
);

Card.Media = ({ src, alt, className = "" }: {src:string, alt:string, className?:string}) => (
  <div className={`overflow-hidden flex-shrink-0 ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;