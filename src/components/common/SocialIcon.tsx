import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialIconProps {
  iconName: string;
  className?: string;
}

const SocialIcon = ({ iconName, className }: SocialIconProps) => {
  const icons: Record<string, React.ReactNode> = {
    github: <Github className={className} />,
    linkedin: <Linkedin className={className} />,
    mail: <Mail className={className} />,
    twitter: <Twitter className={className} />,
  };
  return <>{icons[iconName.toLowerCase()] || null}</>;
};

export default SocialIcon;