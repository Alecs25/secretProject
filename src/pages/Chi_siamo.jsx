
import 'primeicons/primeicons.css';
        
export function ChiSiamo() {
  return (
    <div className="flex flex-column w-11 bg-bluegray-400 p-3 gap-3 border-round overflow-hidden align-self-center">
      <section className="flex flex-row flex-wrap ">
        <div className=" flex flex-row w-6 p-3  gap-3 bg-purple-400 shadow-8 ">
          <p className='text-center font-medium text-xl'>
           <h1> Hello world! </h1>
           <h2>Chi siamo ?</h2>
           siamo 5 amici conosciutisi in un corso di programmazione, ovvero <strong>Develhope</strong>.
           ciò che ci ha fatto intraprendere quest'esperienza è una gran voglia di conoscenza.
           Siamo 5 ragazzi con il cuore nel coding e la testa nel cloud, non potevamo non diventare amici.
           Il percorso con Develhope ci ha aiutato tanto e ci ha fatto scoprire molte potezialità, in ognuno di noi.
           Ovviamente non è stato facile ma ce l' abbiamo fatta!

          </p>
        </div>
        <div className="h-6 w-6 ">
          <img
            src="https://img.freepik.com/free-photo/friends-having-fun-their-reunion_23-2149215801.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais"
            alt="fotocollage"
            className="h-full w-full "
          />
        </div>
      </section>

      <hr className="w-3" />

      <section className="flex flex-row flex-wrap">
        <div className=" flex flex-row w-6 p-3  gap-3 ">
          <p className='text-center font-medium text-xl'>
           <h1>La Nostra "Mission"</h1>
           <h2>Un Bisogno comune</h2>
           Per creare questo sito ci siamo confrontati un interminabile tempo di 10 minuti.
           Dato che siamo tutti e 5 dei nerd la scelta del settore sul quale sviluppare il progetto è stata abbastanza facile...
           <strong>I Videogames</strong>, un mondo fantastico in cui perdersi.
           E cosa accomuna tutti i videogiocatori ?
           <strong>La Curiosità</strong> verso le nuove uscite.
           Dato che però di recente hanno eliminato L' <strong>E3</strong> abbiamo deciso di creare un Giornale.
           Un giornale che riporti tutte le news sui giochi più attesi, e console più innovative !
           <h3>ENJOY!</h3>

          </p>
        </div>
        <div className="h-6 w-6 surface-200">
          <img
            src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs="
            alt="fotocollage"
            className="h-full w-full "
          />
        </div>
      </section>
      <hr className='w-3'/>
      <section className=" w-full">

        <div className="flex flex-row justify-content-evenly">
          
<i className="pi pi-discord" style={{ color: 'purple' }}>Discord</i>
<i className="pi pi-github" style={{ color: 'purple' }}>Github</i>
<span className="pi pi-linkedin" style={{color: 'purple' }}>Linkedin</span>
<span className="pi pi-user" style={{ color: 'purple' }}>Staff</span>

        </div>


      </section>
    </div>
  );
}