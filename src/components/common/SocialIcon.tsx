import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialIconProps {
  iconName: string;
  className?: string; // Allow us to style it from outside
}

const SocialIcon = ({ iconName, className }: SocialIconProps) => {
  // Simple mapping object
  const icons: Record<string, React.ReactNode> = {
    github: <Github className={className} />,
    linkedin: <Linkedin className={className} />,
    mail: <Mail className={className} />,
    twitter: <Twitter className={className} />,
  };

  // Return the icon, or null if not found
  return <>{icons[iconName.toLowerCase()] || null}</>;
};

export default SocialIcon;