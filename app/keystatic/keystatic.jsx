"use client";

import { makePage } from "@keystatic/next/ui/app";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import config from "../../keystatic.config";

const KeystaticPage = makePage(config);

export default function KeystaticWithRevalidation() {
  useEffect(() => {
    // Listener per eventi di salvataggio (se disponibili)
    const handleKeystaticSave = () => {
      toast.success("Contenuto salvato! Il sito verrà aggiornato automaticamente.");
    };

    // Questo è un esempio - Keystatic potrebbe non esporre questi eventi
    document.addEventListener('keystatic:save', handleKeystaticSave);
    
    return () => {
      document.removeEventListener('keystatic:save', handleKeystaticSave);
    };
  }, []);

  return <KeystaticPage />;
}