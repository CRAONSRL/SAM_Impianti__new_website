'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { Suspense, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import contactImage from '@/app/images/contatti/contatti.jpeg';
import logoSfumato from '@/app/images/chi-siamo/logo-sfumato.png';

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormFields>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Errore durante l'invio del messaggio");
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Si è verificato un errore inatteso',
      );
    }
  };

  return (
    <>
      <Suspense>
        <Header currentPage="/contatti" />
      </Suspense>

      <section className="w-full bg-white h-full">
        <div className="flex w-full flex-col overflow-hidden lg:flex-row h-full">
          <div className="relative w-full overflow-hidden lg:w-2/5">
            <Image
              src={contactImage}
              alt="Tecnici al lavoro"
              className="h-full w-full -scale-x-100 object-cover"
              priority
            />
            {/* backdrop-blur bg-white/85 */}
            <div className="absolute bottom-10  right-10  p-6 text-[#024050] bg-white/60 text-right">
              <h2 className="text-2xl font-semibold text-[#00586C]">
                SAM impianti srl
              </h2>
              <p className="mt-3 text-md leading-relaxed">
                Via I° Maggio, 87,
                <br />
                Concorezzo
                <br />
                20863 (MB) Italia
              </p>
              <p className="mt-4 text-md leading-relaxed">
                039/649 07 434
                <br />
                segreteria@samimp.it
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between bg-[#004B5F] px-8 py-12 text-white lg:w-3/5 lg:px-16 lg:py-40">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-light tracking-wide text-white/80"
                  >
                    Nome
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    required
                    className="mt-2 w-full border-b border-white/60 bg-transparent pb-2 text-lg font-light text-white outline-none transition focus:border-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-light tracking-wide text-white/80"
                  >
                    Cognome
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    required
                    className="mt-2 w-full border-b border-white/60 bg-transparent pb-2 text-lg font-light text-white outline-none transition focus:border-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-light tracking-wide text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    className="mt-2 w-full border-b border-white/60 bg-transparent pb-2 text-lg font-light text-white outline-none transition focus:border-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-light tracking-wide text-white/80"
                  >
                    Oggetto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange('subject')}
                    required
                    className="mt-2 w-full border-b border-white/60 bg-transparent pb-2 text-lg font-light text-white outline-none transition focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-light tracking-wide text-white/80"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange('message')}
                  required
                  rows={4}
                  className="mt-2 w-full border-b border-white/60 bg-transparent pb-2 text-lg font-light text-white outline-none transition focus:border-white"
                />
              </div>

              <div className="flex flex-col items-center gap-6 pt-6 sm:flex-row sm:justify-end">
                <Image
                  src={logoSfumato}
                  alt="Logo SAM Impianti"
                  className="h-16 w-16 object-contain"
                  priority
                />
                <button
                  type="submit"
                  className="rounded-full border border-white px-10 py-2 text-lg font-light lowercase tracking-wide text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'invio...' : 'invia'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-center text-sm text-emerald-200 sm:text-right">
                  Messaggio inviato con successo.
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p className="text-center text-sm text-rose-200 sm:text-right">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
