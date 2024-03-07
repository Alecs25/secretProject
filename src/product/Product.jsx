import TemplateDemo from "../header/Header";
import "../product/product.css"
export function Product() {
  return (
    <main className=".mainContainer">
      <div>
       <TemplateDemo/>
        <section className=".firstimgsection">
          <img src="https://sm.ign.com/ign_it/screenshot/default/final-fantasy-vii-rebirth-cover_zysw.jpg" alt="sottoNavbar" />
        </section>
        <hr />
        <section>
          <div>
            <h2>{"Gioco.nome"}</h2>
          </div>
        </section>
        <article>
          <img src="" alt="immagine" />
          <img src="" alt="immagine2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quia
            consectetur quisquam repellendus quam corporis fugit quas ea atque
            magni commodi odio nemo! Eos eius cumque rem saepe veritatis id
            voluptatem vitae. Quo, ut architecto? Et aperiam dolores
            reprehenderit nulla nemo perspiciatis minima est qui numquam
            quibusdam dolor architecto, nihil quas natus, voluptatem quaerat
            repellat exercitationem ad excepturi ipsa eaque, sequi assumenda
            voluptatibus! A vitae perferendis est numquam laudantium dicta eos
            enim veritatis similique amet! Officiis, quasi beatae? Dignissimos
            quas fugiat, dolor a incidunt tenetur ipsam enim optio aspernatur,
            minus nostrum necessitatibus cupiditate doloremque autem debitis
            commodi pariatur quasi voluptate illo! Aut voluptates tempora, sunt
            sapiente modi minima excepturi numquam et sit! Architecto fuga sint,
            consequuntur quisquam sunt rerum eos sed distinctio tempora natus
            blanditiis unde veniam laboriosam facere voluptas id incidunt. Animi
            nostrum corrupti iusto itaque accusamus deserunt, sequi ratione
            repellendus temporibus ex vitae dolores nobis architecto tempora{" "}
            <img src="" alt="immagine 3" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
            culpa illum. Corrupti perferendis sequi voluptatum totam enim sed
            necessitatibus magni, neque consequatur quis autem dolorem, harum
            sit dolore sapiente velit aliquid dicta iste cumque aliquam
            explicabo. Quos molestiae atque corporis odit obcaecati similique
            temporibus, perspiciatis error voluptatibus? Ullam, expedita? Earum
            aut corporis quidem recusandae incidunt aliquam necessitatibus,
            natus voluptates dolores repudiandae non tempore at maiores esse
            nihil, quibusdam sint labore consequatur molestias facere
            temporibus, quod odio accusamus nobis. Quae doloribus, aut tempore
            qui dolores sit beatae harum eaque repellendus praesentium, placeat
            dolore. Facere, aliquam illo accusantium adipisci nemo atque esse.{" "}
            <img src="" alt="immagine 4" />
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            impedit nulla reprehenderit quibusdam blanditiis vero odio mollitia
            libero debitis laudantium, facilis assumenda. Eligendi ipsum, ut
            nisi rem aliquid repellendus tempore vel id alias cupiditate atque{" "}
            <img src="" alt="immagine5" />
            doloribus assumenda. Nemo nisi quasi quaerat inventore similique
            earum reiciendis in dicta error ea? Officia!
          </p>
          <img src="" alt="immagine 6" />
        </article>
        <div>
          {/* <ARTICOLISTA /> */}
          <div>
            <p>pubblicato il {"aricolo.data"}</p>
          </div>
        </div>
        <hr />
        <section>SEZIONE COMMENTI</section>
      </div>
    </main>
  );
}
