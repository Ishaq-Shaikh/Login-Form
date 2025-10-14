import is from "../images/logo.svg"

const navbar = () => {
  return (
    <>
    <div className="h-[80px]">
    <img src={is} alt="logo" className="h-40 w-fit relative bottom-10 right-4" />
    </div>
    </>
  )
}

export default navbar