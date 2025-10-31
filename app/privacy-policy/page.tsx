import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Questa Privacy Policy (d’ora in avanti “Policy”) descrive i dati personali raccolti o generati (elaborati) quando si utilizzano i siti web del Titolare del trattamento, d’ora in avanti “Siti”). Questa Policy descrive le tipologie di dati personali che vengono raccolti al momento dell’utilizzazione dei nostri Siti e il modo in cui i dati personali vengono raccolti, condivisi e protetti.

 

Titolare del trattamento

Sam Impianti srl con sede in via Via Primo Maggio 87,  20863 Concorezzo (MB) – P.IVA 10314060962 è il Titolare dei trattamenti di dati, effettuati per finalità amministrative e contabili e per permettere di ricontattare tutti gli utenti interessati ai servizi della Sam Impianti srl.

La Sam Impianti srl risponde in solido delle fasi di raccolta e successivo utilizzo dei dati personali e determina:

come saranno conservati i dati
chi potrà avere accesso alle informazioni conservate
quali azioni potranno essere effettuate.
Informazioni più dettagliate sui nominativi dei responsabili del trattamento interni ed esterni potranno essere indirizzate scrivendo a: Sam Impianti srl con sede in via Primo Maggio 87, 20863 Concorezzo (MB)

 

Finalità del trattamento

Potranno essere richiesti alcuni dati personali al fine di fornire i prodotti o i servizi richiesti. Questi dati personali includono:

Dati di contatto inclusi nome, e-mail, numero di telefono e spedizione, indirizzo di fatturazione
Informazioni di accesso e di account, inclusi nome della schermata, passworde ID utente univoco
Le tue preferenze personali tra cui le preferenze in tema di marketinge cookie.
Utilizziamo i dati personali raccolti nei modi seguenti:

Per garantire la migliore funzionalità dei Siti
Per comunicare informazioni sui nostri prodotti, servizi, eventi e per altri fini promozionali
Per svolgere, migliorare e mantenere la nostra attività, i prodotti ed i servizi
Per scopi generali di ricerca e analisi:
Utilizziamo i dati relativi a come i nostri visitatori utilizzano i nostri siti, app e servizi per comprendere il comportamento o le preferenze dei clienti. Ad esempio, possiamo utilizzare le informazioni su come i visitatori dei Siti cercano e trovano prodotti per capire quali possano essere i modi migliori per organizzare e presentare i prodotti.
Altre finalità:
Potremmo anche utilizzare i dati personali in altri modi e al momento della raccolta degli stessi daremo specifica comunicazione e richiederemo il consenso, ove necessario.
 

Condivisione dei dati personali

Il Titolare condivide i tuoi dati personali con:

Fornitori di servizi che elaborano i dati personali per conto del Titolare, ad esempio per elaborare i dati, per l’invio di e-mail, per la ricerca e le analisi, per gestire promozioni di prodotti, nonché amministrare determinati servizi.
Altri terzi nella misura necessaria a: (i) adeguarsi ad una richiesta del governo, un’ordinanza del tribunale o per adempiere a leggi applicabili; (ii) impedire usi illegali dei nostri Siti; (iii) difendersi da rivendicazioni di terzi; e (iv) agevolare la prevenzione di frodi o l’investigazione
Protezione dei dati personali

Crittografia e sicurezza: utilizziamo una varietà di misure tecniche ed organizzative di sicurezza, ivi inclusi strumenti di crittografia e di autenticazione, per mantenere la sicurezza dei dati personali. I dati personali sono contenuti in reti protette e sono accessibili solo da un numero limitato di persone che hanno diritti speciali di accesso a questi sistemi.

Trasferimenti internazionali di dati: i dati personali che raccogliamo o produciamo (elaboriamo) nel contesto dei nostri Siti saranno archiviati esclusivamente in Italia.

Conservazione dei dati: conserviamo i dati personali per il tempo necessario al raggiungimento degli scopi per i quali vengono raccolti, salvo che sia diversamente previsto dalla legge.

Diritti relativi ai dati personali: ha diritto di ottenere dal Titolare del trattamento la conferma che sia o meno in corso un trattamento di dati personali che lo riguardano e in tal caso ha il diritto di:

ottenere l’accesso ai dati personali, chiedere la rettifica o la cancellazione dei dati personali o la limitazione del trattamento dei dati personali che lo riguardano o di opporsi al loro trattamento;
di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che lo riguardano e ha il diritto di trasmettere tali dati a un altro titolare del trattamento (portabilità dei dati);
essere informato dell’esistenza di un processo decisionale automatizzato, compresa la profilazione;
se espresso revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca;
proporre reclamo all’autorità di controllo.
Cookies

Il Titolare riceve e registra informazioni provenienti dal tuo browser quando si usano i nostri Siti, che possono includere anche dati personali. Utilizziamo i cookie per raccogliere queste informazioni, che possono includere fra le altre anche: (i) indirizzo IP; (ii) unique cookie identifier, informazioni sui cookie e informazioni circa il fatto che il dispositivo disponga di software per accedere a determinate funzionalità; (iii) unique device identifier e tipo di dispositivo; (iv) dominio, tipo di browser e lingua, (v) sistema operativo e impostazioni di sistema; (vi) paese e fuso orario; (vii) siti web precedentemente visitati; (viii) informazioni sulla vostra interazione con i nostri Siti, come i click effettuati, gli acquisti e le preferenze indicate; e (ix) tempi di accesso e URL di riferimento.

Anche terze parti possono raccogliere informazioni dai Siti tramite cookie. Le terze parti raccolgono i dati direttamente dal vostro browser web e l’elaborazione ed il trattamento di questi dati è soggetta alle rispettive privacy policies.

Utilizziamo cookie per monitorare l’utilizzo dei Siti da parte dei nostri clienti e per comprendere le loro preferenze (come le scelte del paese e della lingua). Questo ci consente di fornire servizi ai nostri clienti e migliorare la loro esperienza online. Utilizziamo inoltre cookie per ottenere dati aggregati relativi al traffico del sito e relativi all’interazione sul sito, per identificare le tendenze e ottenere statistiche in modo da poter sempre migliorare i nostri Siti. Esistono essenzialmente tre categorie di cookie utilizzati sui nostri siti:

Funzionali: questi cookie sono necessari per le funzionalità di base del Sito e sono di conseguenza sempre abilitati. Questi includono i cookie che consentono di ricordare gli utenti nel momento in cui si naviga sul Sito in una singola sessione o, se richiesto, da una sessione all’altra. Aiutano a fornire l’assistenza per problemi di sicurezza e di conformità alle normative.

Prestazioni: questi cookie consentono di migliorare la funzionalità dei nostri Siti monitorandone l’utilizzo. In alcuni casi, questi cookie migliorano la velocità di elaborazione delle richieste e consentono di memorizzare le preferenze del sito selezionato. Rifiutare questi cookie può portare a delle indicazioni poco specifiche e ad un funzionamento più lento del sito.

Social media e pubblicità: i cookie relativi ai social media offrono la possibilità di connettersi ai social network e condividere contenuti dei nostri siti attraverso i social media. I cookie pubblicitari (di terze parti) raccolgono informazioni per aiutare ad adattare meglio la pubblicità ai vostri interessi, sia all’interno che all’esterno dei nostri Siti. In alcuni casi, questi cookie comportano il trattamento dei vostri dati personali. Rifiutare questi cookie può comportare la visualizzazione di pubblicità di nessun interesse per te o l’impossibilità di collegarsi in modo efficace con i social network e / o di condividere contenuti sui social media.

Per un riepilogo completo e aggiornato di tutte le terze parti che accedono al web browser, è consigliabile installare un web browser plug-in creato appositamente. Si può anche scegliere che il computer invii un avviso ogni volta che viene inviato un cookie, oppure si può scegliere di disattivare tutti i cookie. Lo si può fare nelle impostazioni del browser su ciascun browser e dispositivo che viene utilizzato. Ogni browser è in parte diverso, quindi si dovrà consultare il menu guida del browser per conoscere il modo corretto di modificare i cookie. Se si disattivano i cookie, si potrebbe non avere accesso a molte funzionalità che rendono i nostri Siti più efficienti e alcuni dei nostri servizi non funzioneranno correttamente.

DOMANDE E FEEDBACKS

Accogliamo con favore domande, commenti e dubbi sulla nostra Policy. Se si desidera fornire un feedback o se si hanno domande o dubbi ovvero si desideri esercitare i propri diritti relativi ai dati personali, preghiamo di contattare i riferimenti riportati nella sezione Titolare del trattamento`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
