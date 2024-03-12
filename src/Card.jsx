import { FtechData1 } from "./FetchUser";

export function Card(){
    const {data, error, isLoading} = FtechData1()
    console.log(data)
    return (
        <div>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          
          {data && (
            <ul>
              {data.map((item, index) => (
                <li key={index}><h1>{item.first_name},{item.last_name}</h1><h1>{item.email}</h1><h1>{item.address.city}</h1><h1>{item.address.state}</h1><img src={item.avatar} width={200}></img></li>
              ))}
            </ul>
          )}
        </div>
    )
}