export function Conteiner({children, title}){
    return(
        <div className="conteiner">
            
            <h1>{title}</h1>
            <hr/>
           
            <div>{children}</div>
        </div>
        
    )
}