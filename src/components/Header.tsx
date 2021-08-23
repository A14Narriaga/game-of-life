import { GoGraph } from "react-icons/go"
import { FaRegEdit, FaRegPlayCircle } from "react-icons/fa"
import { HiOutlineFolderDownload } from "react-icons/hi"

const Header = () => {
  return (
    <header>
      <section className="header-container">
        <h1>Game of life</h1>
        <ul className="options">
          <li>
            <a href="#!">
              <FaRegPlayCircle />
            </a>
          </li>
          <li>
            <a href="#!">
              <HiOutlineFolderDownload />
            </a>
          </li>
          <li>
            <a href="#!">
              <FaRegEdit />
            </a>
          </li>
          <li>
            <a href="#!">
              <GoGraph />
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header
