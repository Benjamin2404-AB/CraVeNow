import '../Styles/Button.css'


function PButton({name,id,func}:{name:any,id:string,func:any}) {
  return (
    <>
    <button onClick={func} className='Primary' id = {id}>
        {name}
    </button>
    
    </>
  )
}

export default PButton