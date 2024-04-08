import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import "../Cards/cardapi.css"

function fetcher(url) {
    return fetch(url).then(res => res.json());
}

export function Cardgrande() {
    const { data, error } = useSWR('https://apicard-52c6424e8c80.herokuapp.com/api/oggetti', fetcher);
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const handleScroll = () => {
                setScrollPosition(containerRef.current.scrollLeft);
            };
            containerRef.current.addEventListener('scroll', handleScroll);
            return () => {
                containerRef.current.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.scrollWidth);
        }
    }, [data]);

    const handleScroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = 800; 
            if (direction === 'left') {
                containerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });
            } else if (direction === 'right') {
                containerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    if (error) return <div>Errore nella richiesta...</div>;
    if (!data) return <div>Caricamento...</div>;
    if (!data.length) return <div>Nessun dato trovato</div>;

    return (
        <div className="card-buttons-container">
            
            <div className="card-container123 flex gap-3 overflow-scroll" ref={containerRef}>
                {data.map((oggetto, index) => (
                    <a key={index} className="card-link123" href={oggetto.link} target="_blank" rel="noopener noreferrer">
                        <div className="card123" style={{ backgroundImage: `url(${oggetto.immagine})` }}>
                            <div className="card-content123">
                                <h2 className="card-title123">{oggetto.titolo}</h2>
                                <p className="card-description123">{oggetto.descrizione}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <button className='button123' onClick={() => handleScroll('left')} >{"<"}</button>
            <button className='button1234' onClick={() => handleScroll('right')} >{">"}</button>
        </div>
    );
}

