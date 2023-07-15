import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const Back = () => {
  return (
    <div className="flex items-center p-10">
      <a href="/" className="hover:text-gray-500">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span className="pl-2 font-bold ">Back</span>
      </a>
    </div>
  );
};
