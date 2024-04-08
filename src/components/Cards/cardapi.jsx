import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(res => res.json());
}

export function Cardgrande() {
    const { data, error } = useSWR('http://localhost:3000/api/oggetti', fetcher);
    console.log(data)

    if (error) return <div>Errore nella richiesta...</div>;
    if (!data) return <div>Caricamento...</div>;
    if (!data.length) return <div>Nessun dato trovato</div>;

    return (
        
            <div className="card-container123">
            {data.map((oggetto, index) => (
                <div key={index} className="card123" style={{ backgroundImage: `url(${oggetto.immagine})` }}>
                    <div className="card-content123">
                        <h2 className="card-title123">{oggetto.titolo}</h2>
                        <p className="card-description123">{oggetto.descrizione}</p>
                        <a className="card-link123" href={oggetto.link} target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            ))}
            </div>
        
    );
}
