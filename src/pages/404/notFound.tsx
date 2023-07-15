import { Button } from '../../components/button/button';

const NotFound = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="mb-10">Page does not exist!</h1>
      <Button
        location="/"
        priority="primary"
        text="Take me back"
        design="full"
      ></Button>
    </div>
  );
};
export default NotFound;
