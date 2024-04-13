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
    <div className="flex flex-column w-11 bg-pink-400 p-3 gap-3 border-round overflow-hidden align-self-center">
      <section className="flex flex-row flex-wrap ">
        <div className=" flex flex-row w-6 p-3  gap-3 bg-blue-400 shadow-8 ">
          <p className="text-center font-medium text-xl">
            <h1> Hello world! </h1>
            <h2>Chi siamo ?</h2>
            Siamo 5 amici che si sono conosciuti in un corso di programmazione, ovvero{" "}
            <strong>Develhope</strong>. 
            Ciò che ci ha fatto intraprendere quest'esperienza è una gran voglia di conoscenza. 
            Abbiamo il cuore nel coding e la testa nel cloud, non potevamo non
            diventare amici. 
            Il percorso con Develhope ci ha aiutato tanto e ci
            ha fatto scoprire molte potenzialità in ogniuno di noi,
            fino a cimentarci nel realizzare quest'applicazione web.
          </p>
        </div>
        <div className="h-6 w-6 ">
          <img
            src="https://st2.depositphotos.com/1594308/11853/i/450/depositphotos_118532846-stock-photo-business-partnership-concept.jpg"
            alt="fotocollage"
            className="h-full w-full "
          />
        </div>
      </section>

      <hr className="w-3" />

      <section className="flex flex-row flex-wrap">
        <div className=" flex flex-row w-6 p-3  gap-3 ">
          <p className="text-center font-medium text-xl chiSiamoStyle">
            <h1>La Nostra "Mission"</h1>
            Per creare questo sito ci siamo confrontati un interminabile tempo
            di 10 minuti. Siamo tutti e 5 dei nerd quindi la scelta del
            settore sul quale sviluppare il progetto è stata abbastanza
            facile...
            <strong>I Videogames</strong>
            <br />
            E cosa accomuna tutti i videogiocatori ?
            La Curiosità verso le nuove uscite. <br /> Di recente E3 ha chiuso  i battenti 
            quindi abbiamo deciso di creare un HUB informativo sui videogames, che riporti tutte le news
            sui giochi più attesi e le console più innovative!
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
      <hr className="w-3 " />

      <section className="flex gap-4 flex-wrap justify-content-evenly">
        <div className="card flex  justify-content-center">
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
