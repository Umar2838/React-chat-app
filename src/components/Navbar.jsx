import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar bg-sky-500  fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">UA Group Chat</a>
        {currentUser ? <button className="hover:bg-sky-900 p-2 rounded-md"  onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar