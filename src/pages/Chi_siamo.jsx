
import 'primeicons/primeicons.css';
        
export function ChiSiamo() {
  return (
    <div className="flex flex-column w-11 bg-bluegray-400 p-3 gap-3 border-round overflow-hidden align-self-center">
      <section className="flex flex-row flex-wrap ">
        <div className=" flex flex-row w-6 p-3  gap-3 bg-purple-400 shadow-8 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            est! Dolores saepe iste consequatur quis. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Explicabo nemo quidem pariatur a
            architecto ea incidunt ab voluptatum, odit asperiores tenetur porro
            facilis aperiam commodi! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nostrum quas, ipsam obcaecati culpa tempora
            voluptatibus ullam mollitia odit esse architecto fugit sed itaque
            soluta delectus quia. Voluptatum atque blanditiis harum. SUCA
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            est! Dolores saepe iste consequatur quis. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Explicabo nemo quidem pariatur a
            architecto ea incidunt ab voluptatum, odit asperiores tenetur porro
            facilis aperiam commodi! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nostrum quas, ipsam obcaecati culpa tempora
            voluptatibus ullam mollitia odit esse architecto fugit sed itaque
            soluta delectus quia. Voluptatum atque blanditiis harum. SUCA X2
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
