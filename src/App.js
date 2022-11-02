import './App.css'
import { useState, useRef } from 'react'
import { CollaboratorsDTBS } from './database/Collaborators'
import AddCollaboratorComponent from './components/AddCollaboratorComponent'
import CollaboratorsListComponent from './components/CollaboratorListComponent'
import SearchCollaboratorComponent from './components/SearchCollaboratorComponent'
import FooterComponent from './components/FooterComponent'
import Swal from 'sweetalert2'

function App() {

  const [collaborators, setCollaborators] = useState([...CollaboratorsDTBS])
  const nameRef = useRef()
  const emailRef = useRef()
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("")

  //FUNCION QUE HACE EL SEARCH EN EL ARREGLO!
  //el operador !search (distinto de search) osea distinto de un string vacio ("") osea texto en la variable, la condicion sera falsa 
  //y se procedera a hacer el filtro del arreglo colaboradores para buscar coincidencias, de lo contrario si el usuario no ingresa
  //valores en el input ("") la condicon se cumpliria por lo que el arreglo results seria igual al arreglo original sin modificar
  //que es el colaborators, ya que recordemos que el metodo filter nos devuelve un arreglo nuevo sin modificar el original
  //por eso se lo estamos asignando como condicion a results para no alterar el arreglo original de colaborators  

  function resultados() {
    return !search ? collaborators : collaborators.filter((dato) => dato.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || dato.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  function newCollaborator(e) {
    e.preventDefault()
    setCollaborators([...collaborators, { name: nameRef.current.value, email: emailRef.current.value, id: Date.now() % 1000 },])
    nameRef.current.value = ""
    emailRef.current.value = ""
    Swal.fire(
      'Success!',
      'New Collaborator Added!',
      'success'
    )
  }

  return (
    <div className="App">
      <div className="main_container">
        <SearchCollaboratorComponent setSearch={setSearch} />
        <AddCollaboratorComponent
          nameRef={nameRef}
          emailRef={emailRef}
          open={open}
          setOpen={setOpen}
          newCollaborator={newCollaborator}
        />
        <h1 className="mt-3">Collaborators Table</h1>
        <CollaboratorsListComponent
          results={resultados()}
        />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
