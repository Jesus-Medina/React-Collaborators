
import "../stylesheet/CollaboratorsList.css"
import { Table } from "react-bootstrap"

function AddCollaboratorListComponent({results}) {
  return (
    <div className="container collaborators_table">
      <Table className="shadow table_form" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="culumn-1">#</th>
            <th className="culumn-2 text-wrap">Name</th>
            <th className="culumn-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map(
              (result) => {
                return (
                  <tr key={result.id}>
                    <td className="culumn-4" key={result.id}>{result.id}</td>
                    <td className="culumn-5 text-wrap" key={result.name}>{result.name}</td>
                    <td className="culumn-6 text-wrap" key={result.email}>{result.email}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default AddCollaboratorListComponent