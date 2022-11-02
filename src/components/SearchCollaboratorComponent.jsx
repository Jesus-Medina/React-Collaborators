function SearchCollaboratorComponent({ setSearch }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0">
      <div className="container-fluid py-3 justify-content-center justify-content-sm-between">
        <a className="navbar-brand fs-4" href="www.google.com">
          Collaborators Database
          <img className="ms-3" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/FFFFFF/external-database-cryptocurrency-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="database icon" />
        </a>
        <div className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search collaborators" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
          <img src="https://img.icons8.com/ios/35/FFFFFF/search--v1.png" alt="search icon" />
        </div>
      </div>
    </nav >
  )
}

export default SearchCollaboratorComponent