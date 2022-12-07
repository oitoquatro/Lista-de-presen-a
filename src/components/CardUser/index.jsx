import './style.css';
import { TrashSimple } from 'phosphor-react';

export function CardUser(props) { 

  function deleteUser(idUser){ // criando uma função de delete
    props.onDeleteStudent(idUser);
  }
  
  return (  // criei um evento de click no button com a funçao de delete e chamei o idStudent la do CardUser no Home
    <div className='container-card'>
    <p style={{color: "white"}}>{props.name}</p>   
    <button onClick={() => deleteUser(props.idStudent)}> 
      <TrashSimple size={32} weight="bold" />
    </button>
  </div>
  )
}