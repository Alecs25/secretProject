import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "../pages/chiSiamoStyle.css" 

export function ChiSiamo() {
  const header = (
    <img
      alt="Card"
      src="https://media.istockphoto.com/id/1201041782/it/foto/alpaca.jpg?s=612x612&w=0&k=20&c=ASt-Y5H51Xd-YGzG3zj2MdPTynyWT-B_SPoH3PApwwg="
    />
  );

  return (
    <div className="flex flex-column w-11 p-3 gap-3 border-round overflow-hidden align-self-center">
      <section className="flex flex-column justify-content-center align-items-center flex-wrap ">
        <div className=" flex flex-row w-6 p-3  gap-3">
          <p className="text-center font-medium text-xl">
            <h1> Hello world! </h1>
            <h2>Chi siamo ?</h2>
            Benvenuti nel nostro sito, nato dall'incontro di cinque appassionati di videogames nel corso di programmazione di Develhope. 
            Siamo un gruppo di menti creative unite da una sete insaziabile di conoscenza e una passione condivisa per il coding e il cloud computing. 
            Ci siamo incontrati e abbiamo immediatamente capito di essere destinati a diventare più di semplici colleghi: siamo diventati amici.
            L'esperienza con Develhope è stata fondamentale per il nostro percorso di crescita. 
            Grazie ad essa, abbiamo scoperto e coltivato le nostre potenzialità, 
            fino a decidere di metterle in gioco per realizzare un'applicazione web che rappresentasse la nostra visione.
          </p>
        </div>
        <div className="h-5 w-5">
          <img
            src="https://st2.depositphotos.com/1594308/11853/i/450/depositphotos_118532846-stock-photo-business-partnership-concept.jpg"
            alt="fotocollage"
            className="h-full w-full "
          />
        </div>
      </section>

      <hr className="w-3" />

      <section className="flex flex-column justify-content-center align-items-center">
        <div className=" flex flex-column w-6 p-3  gap-3 ">
          <p className="text-center font-medium text-xl chiSiamoStyle">
            <h1>La Nostra "Mission"</h1>
            Immagina un brainstorming tra cinque nerd. 
            Non ci è voluto altro che un'intenso confronto di 10 minuti per decidere il settore su cui concentrarci: i videogiochi. 
            È la nostra passione comune, il terreno su cui ci sentiamo a casa.
            E cosa accomuna ogni videogiocatore degno di questo nome? La sete insaziabile di novità, l'elettrizzante attesa 
            per le prossime grandi uscite. Così è nato il nostro progetto: un'epica avventura nel mondo dei videogiochi, un HUB informativo che vi terrà 
            costantemente aggiornati sulle ultime novità, dai titoli più attesi alle console più innovative.
            Bentornati nel mondo del gaming. Preparatevi ad esplorare, a scoprire e a vivere ogni emozione insieme a noi. ENJOY!!
          </p>
        </div>
        <div className="h-7 w-7 surface-200">
          <img
            src="https://media.gqitalia.it/photos/64800e0d5dd81c9fc9cbdff7/16:9/w_1920,c_limit/100-best-games-hp-b.jpg"
            alt="fotocollage"
            className="h-full w-full "
          />
        </div>
      </section>
      <hr className="w-3 " />

      <section className="flex flex-row w-33 gap-2 flex-wrap justify-content-center">
        <div className="card flex justify-content-center">
          <Card
            title="AleDevel"
            subTitle="Junior Full Stack Developer"
            header={header}
            footer={
              <div className="flex gap-1 justify-content-evenly">
                <Link to="https://github.com/Aledevel">
                  <Button
                    icon="pi pi-github"
                    style={{ background: "white", color: "black" }}
                    rounded
                  />
                </Link>
            
                <Link to="https://www.linkedin.com/in/alessio-di-natale-750095286/">
                  <Button
                    icon="pi pi-linkedin"
                    style={{ background: "white", color: "blue" }}
                    rounded
                  />
                </Link>
              </div>
            }
            className="md:w-25rem"
          ></Card>
        </div>

        <div className="card flex  justify-content-center">
          <Card
            title="JuliusStowe"
            subTitle="Junior Full Stack Developer"
            header={header}
            footer={
              <div className="flex gap-1 justify-content-evenly">
                <Link to="https://github.com/JuliusStowe">
                  <Button
                    icon="pi pi-github"
                    style={{ background: "white", color: "black" }}
                    rounded
                  />
                </Link>
            
                 
                <Link to="https://www.linkedin.com/in/matteo-durso-095554196/">
                  <Button
                    icon="pi pi-linkedin"
                    style={{ background: "white", color: "blue" }}
                    rounded
                  />
                </Link>
              </div>
            }
            className="md:w-25rem"
          ></Card>
        </div>

        <div className="card flex  justify-content-center">
          <Card
            title="SilvioSaccà"
            subTitle="Junior Full Stack Developer"
            header={header}
            footer={
              <div className="flex gap-1 justify-content-evenly">
                <Link to="https://github.com/SilvioSacca">
                  {" "}
                  <Button
                    icon="pi pi-github"
                    style={{ background: "white", color: "black" }}
                    rounded
                  />
                </Link>
               
                <Link to="https://www.linkedin.com/in/silvio-sacc%C3%A0-6a489548/">
                  <Button
                    icon="pi pi-linkedin"
                    style={{ background: "white", color: "blue" }}
                    rounded
                  />
                </Link>
              </div>
            }
            className="md:w-25rem"
          ></Card>
        </div>

        <div className="card flex  justify-content-center">
          {" "}
          <Card
            title="Vitalik"
            subTitle="Junior Full Stack Developer"
            header={header}
            footer={
              <div className="flex gap-1 justify-content-evenly">
                <Link to="https://github.com/vitalikpatapchuk">
                  <Button
                    icon="pi pi-github"
                    style={{ background: "white", color: "black" }}
                    rounded
                  />
                </Link>
                
                <Link to="https://www.linkedin.com/in/vitalik-patapchuk-65aaa12ab/">
                  <Button
                    icon="pi pi-linkedin"
                    style={{ background: "white", color: "blue" }}
                    rounded
                  />
                </Link>
              </div>
            }
            className="md:w-25rem"
          ></Card>
        </div>
        <div className="card flex  justify-content-center">
          {" "}
          <Card
            title="Alecs25"
            subTitle="Junior Full Stack Developer"
            header={header}
            footer={
              <div className="flex gap-1 justify-content-evenly">
                <Link to="https://github.com/Alecs25">
                  <Button
                    icon="pi pi-github"
                    style={{ background: "white", color: "black" }}
                    rounded
                  />
                </Link>
                
                <Link to="https://www.linkedin.com/in/aleeky/">
                  <Button
                    icon="pi pi-linkedin"
                    style={{ background: "white", color: "blue" }}
                    rounded
                  />
                </Link>
              </div>
            }
            className="md:w-25rem"
          ></Card>
        </div>
      </section>
    </div>
  );
}
