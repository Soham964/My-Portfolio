import { useState, useEffect } from 'react';

const roles = [
  'Full-Stack Developer',
  'Tech Enthusiast',
  'Code Craftsman',
  'Problem Solver'
];

export const useTypingAnimation = (typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentRole.slice(0, prev.length + 1);
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}; 