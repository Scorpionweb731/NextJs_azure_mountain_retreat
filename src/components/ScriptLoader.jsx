"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScriptLoader = () => {
  const path = usePathname(); // Get the current path

  const ScriptFiles = [
    'js/jquery.min.js',
    'js/jquery-migrate-3.0.1.min.js',
    'js/popper.min.js',
    'js/bootstrap.min.js',
    'js/jquery.easing.1.3.js',
    'js/jquery.waypoints.min.js',
    'js/jquery.stellar.min.js',
    'js/owl.carousel.min.js',
    'js/jquery.magnific-popup.min.js',
    'js/aos.js',
    'js/jquery.animateNumber.min.js',
    'js/bootstrap-datepicker.js',
    'js/scrollax.min.js',
    'js/main.js'
  ];

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `/${src}`; // Corrected template string
        script.async = false; // Load scripts synchronously
        script.onload = () => resolve(src); // Resolve when the script is loaded
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`)); // Corrected template string
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      for (const src of ScriptFiles) {
        if (!document.querySelector(`script[src="/${src}"]`)) { // Corrected syntax for querySelector
          await loadScript(src);
        }
      }
    };

    // Load the scripts when the path changes
    loadScripts();

    // Cleanup: Remove the scripts when the component unmounts or the path changes
    return () => {
      ScriptFiles.forEach((src) => {
        const existingScript = document.querySelector(`script[src="/${src}"]`); // Corrected syntax for querySelector
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      });
    };
  }, [path]); // Run whenever the path changes

  return null; // No UI needed for this component
};

export default ScriptLoader;
