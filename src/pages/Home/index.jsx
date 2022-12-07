import { useState } from 'react';
import './style.css';
import { Plus } from 'phosphor-react';
import { CardUser } from '../../components/CardUser';

export function Home() { // Temos que exportar essa função. EXPORT FUNCTION  deve ser importado com chaves, vemos isso no app.jsx é utilizado para componentes mais simples
  const [studentName, setStudentName] = useState(''); // variável onde vai ser armazenado o metodo useState, no caso o digito do input
  const [students, setStudents] = useState([]); // variável onde serão armazenados todos os nomes digitados no input e salvos através do button

  function handleAddStudent() {
    if(studentName !== ''){
      const newStudent = {   //criando um objeto para capturar um nome
        name: studentName
      }
  
      setStudents([...students, newStudent]);  // estou setando o digito do input e mostarndo na tela e com ...students vou manter o digito salvo anteriormente e aplicar o novo digito junto a ele
  
      setStudentName(''); // para limpar o input automaticamente junto com o value inserido no input
    }else{
      alert('Digite um nome')
    }
    
  }

  function handleRemoveStudent(idStudent){
    setStudents(students.filter((e, index) => index !== idStudent)); // vai retornar todos os estudantes que o indice dele for diferente do id que eu quero remover
  }

  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder=" Nome "
          onChange={e => setStudentName(e.target.value)}  // esse comando onChange serve para capturar o que for digitado no input
          value={studentName}   // aqui estou informando que o input sempre vai ter o valor digitado, utilizei para sempre que clicar no botao de add o input ficar vazio automaticamente, unto com setStudentName('') logo acima
        />

        <button title="Adicionar nome" onClick={handleAddStudent}>
          <Plus 
          size={26} 
          weight="bold" 
          color='#fff' />
        </button>
      </div>
      <div className="container-list">
        {
          students.map((student, index) => <CardUser 
          key={index} 
          name={student.name} 
          idStudent={index} 
          onDeleteStudent={handleRemoveStudent} />
          ) // aqui estou mapeando toda a minha lista e o index é para correção de erro de id, estou inserindo uma propriedade de id e uma de delete
        }
      </div>
    </div>
  )
}