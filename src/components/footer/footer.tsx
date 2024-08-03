import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="mx-5 md:mx-15 lg:mx-20 mb-5 md:my-10">
      <div className="border-t pt-3 md:flex md:justify-between">
        <ul className="md:justify-start mb-3 p-0 flex items-center flex-wrap space-x-3">
          <li>
            <a
              className="hover:border-b border-black"
              href="https://www.fiverr.com/evieperren"
            >
              Fiverr
            </a>
          </li>
        </ul>
        <ul className="justify-end md:justify-start mb-3 p-0 flex items-center flex-wrap space-x-3">
          <li>
            <a
              href="mailto:evie.butland@gmail.com"
              className="hover:border-b border-black"
            >
              Email
            </a>
          </li>
          <li>
            <a className="hover:border-b border-black" href="tel:07720764111">
              Call
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/evie-butland-432a33170"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b border-black"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="md:m-0">&copy; Evie Perren {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
