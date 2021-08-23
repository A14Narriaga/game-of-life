import { FaUserCircle } from "react-icons/fa"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <h3>By Alan Arriaga</h3>
        <ul className="options">
          <li>
            <AiFillGithub />
          </li>
          <li>
            <FaUserCircle />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
