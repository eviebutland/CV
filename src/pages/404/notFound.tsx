import { Button } from "../../components/button/button"

export const NotFound =() => {
  return (
    <div>Page does not exist!
      <Button location="/"
      text="Take me back" onClick={() => console.log('go back in history')} style="full"></Button>
    </div>
  )
}