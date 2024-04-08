import express from 'express';
import pgPromise from 'pg-promise';
import cors from 'cors';

const app = express();
const port = 3000;
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/card");
app.use(cors());
const creaTabella = async () => {
    try {
        await db.none(`
            CREATE TABLE IF NOT EXISTS oggetti (
                id SERIAL PRIMARY KEY,
                titolo VARCHAR(255),
                immagine VARCHAR(1000),
                descrizione TEXT,
                link VARCHAR(1000)
            )
        `);
        console.log('Tabella ok');
    } catch (err) {
        console.error('Errore', err);
    }
};

const inserisciDati = async () => {
    try {
        await db.none(`DELETE FROM oggetti`);
        await db.none(`ALTER SEQUENCE oggetti_id_seq RESTART WITH 1`);
        await db.none(`
            INSERT INTO oggetti (titolo, immagine, descrizione, link)
            VALUES 
                ('Dragon''s Dogma 2', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXsre1_DAl4H2fNij-Tdv-DJhHCbdTFRpzjWquFmS5FmE3EvpgyhyM9AX5PStCIJWBdR1CuXW-FSw8N09SzJM2CEHNs6o74dk6Gn-KRAE&usqp=CAc', 'Parti per la tua grande avventura, Arisen! Dragon''s Dogma è una serie di GDR per giocatore singolo ricca di azione e narrazione che offre ai giocatori la possibilità di scrivere la propria storia, dall''aspetto del loro Arisen, la sua classe, la sua squadra, l''approccio alle varie situazioni e molto altro.', 'https://www.instant-gaming.com/it/15666-comprare-dragon-s-dogma-2-xbox-series-x-s-xbox-series-x-s-gioco-microsoft-store/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21120682969&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs95BhnYG3UwQM6UtNLiPRlFclg0FS9_Ket9SChG9POjU6P8gUJXXZRoCB9kQAvD_BwE'),
                ('Helldivers 2', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDqeIyPcYoLgl963YuEpwtJh-yks2DTZj5MoN38VwGlMJJWRpS72Nny5ouG318jAlMo8GSz1zm-UUBJPnDT-2s_VPqdBQT9FaiEt9QCKok&usqp=CAc', 'L''ultima linea di attacco della galassia. Unisciti agli Helldiver per combattere in nome della libertà in una galassia ostile in questo frenetico e feroce sparatutto in terza persona. TRASMISSIONE URGENTE - FORZE ARMATE DELLA SUPER TERRALibertà. Pace. Democrazia. I tuoi diritti di nascita sulla Super Terra.', 'https://www.instant-gaming.com/it/9575-comprare-helldivers-2-pc-gioco-steam-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20519197874&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs5mb0-lOxJuyP_dQmZ4pbbJ9mPfqqgcdNshjhRvv8mocYYUufFq3yBoCkxoQAvD_BwE'),
                ('S.T.A.L.K.E.R. 2', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSswbiknH4X-7OqVKvOFdb2MgWK7Qg29gweIMF5DvfYssKgYyHZ-GU4CWuxQRsAWJrFILZtebpse_xWcDMh5-Wn8XdXnteLTZ_2mauWZA9Y81q_zmxMBf2L&usqp=CAc', 'S.T.A.L.K.E.R. 2: Heart of Chernobyl per PC è un gioco di sopravvivenza horror sparatutto in prima persona (FPS), il quarto del famosissimo franchise di S.T.A.L.K.E.R. È un gioco per giocatore singolo che è stato in sviluppo per la maggior parte degli 11 anni, da quando lo studio che lo ha sviluppato, ha dovuto attraversare vari problemi finanziari e legali.', 'https://www.instant-gaming.com/it/5376-comprare-s-t-a-l-k-e-r-2-heart-of-chornobyl-pc-gioco-steam-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20513682663&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs7IbUU1-dBJL8DOYNZlQkIxTO4d2bkL59M-z1BQerDyTiqtJm9UlKxoCaMYQAvD_BwE'),
                ('Elden Ring - Shadow of the Erdtree', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiIx0diTDhi79_iRzHHg00B9R6Jf43U5OI0zaBVhmrcl5W55VRS6KafzP9lZV0ho7Ddgc3FIp2T9sMc1yO1eDYB4IWfH6UYcXevUug_FFi&usqp=CAc', 'Vincitore di centinaia di premi, tra cui quelli per Gioco dell''anno ai Game Awards e ai Golden Joystick Awards, ELDEN RING è l''acclamato GdR d''azione ambientato in un oscuro universo fantasy. Affronta un epico viaggio ed esplora in piena libertà un gigantesco mondo disseminato di avventure.', 'https://www.instant-gaming.com/it/13652-comprare-elden-ring-shadow-of-the-erdtree-pc-gioco-steam-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20513682663&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQsww76fS7-39tOdclTUXuv6D5aEu4WVMjdfPX1X28-wJqmZdvcUc3MBoCa2UQAvD_BwE'),
                ('Avatar: Frontiers of Pandora', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQir-ZooCwPK1NhfaOXmeVoXLH13u6lhBitJBI0A37X9-IqOD4fIzoKQKB0-9E2RvCKUpR5w7snsDanUJU_kgaDq9KGMf935ceC5qFin6hF&usqp=CAc', 'Avatar: Frontiers of Pandora per PC è un gioco d''azione e avventura in prima persona. I giocatori vestono i panni di un orfano Na''vi che è stato adottato dalla RDA (Resources Development Administration - coloni giunti a Pandora per i minerali rari, tra le altre cose) e cresciuto come soldato.', 'https://www.instant-gaming.com/it/9014-comprare-avatar-frontiers-of-pandora-pc-gioco-ubisoft-connect-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20519197568&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs9nmP0_0FIVuhgKt-wh9U0NQeNw_Na50GOtNJLFDsfr8mwahzQUoXBoC79QQAvD_BwE'),
                ('Cyberpunk 2077', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiaTn0Yf3ig49SDRigzb-_h4RzL8chjh_CNqzbIaqkY2NjWSqQCTMmbFdfkhAdm0TASFR5KhpqT6YYT3Z_CNw_2stCFjHJu2_4jCphTgzs&usqp=CAc', 'Cyberpunk 2077 per PC è un gioco sparatutto in prima persona, ma con una differenza. É ambientato in uno stato distopico della California, in cui le regole della nazione e dello stato non si applicano più. Invece, giocando come un mercenario di nome V, il giocatore deve muoversi per la città, raggiungere i propri obiettivi e nel frattempo combattere i nemici.', 'https://www.instant-gaming.com/it/840-comprare-cyberpunk-2077-pc-gioco-gog-com/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20519197568&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs5wVQ3A9wlOHPgKdjJ7hOsQHq3-4rWMn5gUgcykBqhtIg2DJZUXwbRoCmmEQAvD_BwE'),
                ('God of War: Ragnarök PS5', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRv3C_62tYHIjI323kY5Yb6f5lBBangOkzPNr8FHKzoWmUPqR4D9WMDIBloC34obh3YC1A1kRY5pz_Jdv8Pf3VuwYA0vTyGQmFuPrqdOfdo&usqp=CAc', 'È in arrivo dagli sviluppatori di Santa Monica Studio il sequel dell''apprezzatissimo God of War (2018). Unisciti a Kratos e Atreus in un viaggio mitico alla ricerca di risposte prima che sopraggiunga il Ragnarök. Insieme, padre e figlio si spingeranno al limite nel corso del loro viaggio in ognuno dei nove regni.', 'https://www.instant-gaming.com/it/9312-comprare-god-of-war-ragnarok-ps5-playstation-5-gioco-playstation-store-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=21064117133&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs_F-tzEggTXIvmzV44ilrRUo_vzNCsN4yS-3zNO5MUld_XpQgi82uxoCG68QAvD_BwE'),
                ('Hogwarts Legacy', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJpVy-K82y3YNO5UYAXh-RSXAFY8Z7eJFnyjuV0SBhLjUzjBG8rCREzC6nUz8M99tq8Xt9kCS5y0lzHJGgwqGvXzLtMwXFuUFTMhfU0g&usqp=CAc', 'Hogwarts Legacy per PC è un gioco di ruolo d''azione e avventura per giocatore singolo basato sull''universo di Harry Potter, in cui il giocatore assume il ruolo di un nuovo arrivato nel castello incantato tanto amato dai fan dei libri e del franchise cinematografico. ', 'https://www.instant-gaming.com/it/7072-comprare-hogwarts-legacy-pc-gioco-steam-europe/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20519197568&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQsxe01DkHLukyPWFhq-REIRmcwa57bBR9ahj3UC0CnXN3158mW9BlYxoCzQUQAvD_BwE'),
                ('Warhammer Age of Sigmar: Realms of Ruin', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOKRt0ZF16fsx34Oxvfos1W0m--2oRRGLIwX-hrcNkJrDIkyST-7H4i9yP3BiSwro_7FyVf2kmfzsfG-AgjS5vI2zNpvmo3ZwIZ70eRAo&usqp=CAc', 'Uno strategico in tempo reale realizzato da Frontier e ambientato nell''iconico universo di Warhammer. Diventa un generale e guida quattro diverse fazioni per conquistare il selvaggio Regno di Ghur in battaglie cariche di tensione e strategia.', 'https://www.instant-gaming.com/it/14228-comprare-warhammer-age-of-sigmar-realms-of-ruin-pc-gioco-steam/?currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=20519197568&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAjwwr6wBhBcEiwAfMEQs85V7514ENnoJ272AgGSC92eFaMHHxt8bWevk-IpWTL1EqLpJdckSBoCYYkQAvD_BwE'),
                ('Spy Family', 'https://e423jnt9w5t.exactdn.com/wp-content/uploads/2023/09/spy-x-family.jpg?strip=all&lossy=1&ssl=1', 'Spy Family è un appassionante manga/anime che mescola azione, comicità e suspense in un''avventura spionistica unica nel suo genere. Segui la storia di Twilight, un agente segreto, che forma una famiglia improvvisata per una missione importante. Con personaggi eccentrici e situazioni improbabili, Spy Family offre un''esperienza avvincente e divertente che cattura l''attenzione degli spettatori di tutte le età.', 'https://www.mondadoristore.it/spy-x-family/#:~:text=La%20storia%20di%20Spy%20x,piccola%20orfana%20con%20poteri%20psichici.'),
                ('Attack on Titan', 'https://e423jnt9w5t.exactdn.com/wp-content/uploads/2023/09/attack-on-titan.jpg?strip=all&lossy=1&ssl=1', 'Attack on Titan è un acclamato manga e anime che racconta la storia di un mondo devastato da giganteschi esseri umanoidi noti come Titani. In un contesto post-apocalittico, i sopravvissuti umani si rifugiano all''interno di enormi mura per proteggersi. La trama segue Eren Yeager e i suoi amici mentre cercano di sconfiggere i Titani e scoprire la verità dietro la loro esistenza, affrontando oscuri segreti e tradimenti lungo il cammino. Con un mix di azione, dramma e suspense, "Attack on Titan" offre un''avventura avvincente e emozionante che ha catturato milioni di fan in tutto il mondo.', 'https://shingekinokyojin.fandom.com/it/wiki/Shingeki_no_Kyojin'),
                ('Hell''s Paradise', 'https://e423jnt9w5t.exactdn.com/wp-content/uploads/2023/09/hells-paradise.jpg?strip=all&lossy=1&ssl=1', 'Hell''s Paradise è stato una delle rivelazioni di quest''anno. Prodotto dal sempre presente studio MAPPA, è riuscito fin da subito ad incantare il pubblico per le sue ambientazioni dai colori suggestivi e la trama cruenta e misteriosa. L''opera originale è scritta e disegnata da Yuji Kaku, ed è pubblicata dal 2018, completata poi nel 2021.', 'https://www.dimensionefumetto.it/hells-paradise-jigokuraku-un-racconto-darmi-e-di-eroi/#:~:text=%E2%80%9CInferno%20del%20paradiso%E2%80%9D%2C%20un,2021%2C%20composta%20da%2013%20volumi.'),
                ('That time i Got Reincarnated as a Slime', 'https://e423jnt9w5t.exactdn.com/wp-content/uploads/2023/09/that-time-i-got-reincarnated-as-a-slime.jpg?strip=all&lossy=1&ssl=1', 'TenSura (per non ripetere il lunghissimo nome di questo anime) è stato una vera e propria rivelazione. In un panorama dove gli Isekai (genere di anime nel quale il protagonista solitamente si reincarna in un altro mondo fantastico ed ottiene poteri oltre ogni limite) la fanno da padrone, finalmente abbiamo un opera ben scritta, con personaggi interessanti ed una trama non proprio così banale.', 'https://www.animeclick.it/anime/23783/tensei-shitara-slime-datta-ken')
        `);
        console.log('Dati ok');
    } catch (err) {
        console.error('Errore', err);
    }
};

app.get('/api/oggetti', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    try {
        const oggetti = await db.any('SELECT * FROM oggetti');
        res.status(200).json(oggetti);
    } catch (err) {
        console.error('Errore durante il recupero degli oggetti', err);
        res.status(500).send('Errore del server');
    }
});


app.listen(port, async () => {
    console.log(`Server is running on port http://localhost:${port}/api/oggetti`);
    await creaTabella(); 
    await inserisciDati(); 
})