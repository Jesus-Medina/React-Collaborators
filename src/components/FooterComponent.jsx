import { useState, useEffect } from "react";

function FooterComponent() {

  let icon

  const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])

    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    return width
  };

  if (useScreenSize() > 453) {
    icon = "https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png"
  } else {
    icon = "https://img.icons8.com/material/50/FFFFFF/down2--v2.png"
  }

  return (
    <footer className="mt-5 p-4 bg-dark d-flex flex-column align-items-center justify-content-center ">
      <img src="https://img.icons8.com/external-semi-solid-chattapat-/64/FFFFFF/external-meeting-business-management-semi-solid-chattapat-.png" alt="a group of people icon"/>
      <p className="m-0">2022</p>
      <p className="mb-2">Collaborators Database</p>
      <hr style={{ width: "60%" }} />
      <p className="mt-2 mb-0">el codigo fuente de esta pagina se distribuye bajo licencia <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank" rel="noreferrer">GNU Affero General Public License</a></p>
      <p className="mb-0">Grab the source code here
        <img className="m-2" src={icon} alt="arrow icon" />
        <a href="https://github.com/Jesus-Medina/React-Collaborators" target="_blank" rel="noreferrer" className="btn btn-primary px-2 py-0">
          source code
          <img src="https://img.icons8.com/windows/32/FFFFFF/github.png" alt="github icon" />
        </a>
      </p>
    </footer>
  )
}

export default FooterComponent