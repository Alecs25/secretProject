export function Action ({handleclick,type,className}){
return(
    <div className={className} onClick={handleclick}>
        {type}
    </div>
)
}