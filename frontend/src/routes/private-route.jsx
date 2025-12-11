import { Navigate } from "react-router-dom"
import { Header } from "../components"
import paths from "../constants/paths"

export default function PrivateRoute({ children, isAdmin }) {
  const user = localStorage.getItem("codeburguer:userData")
  if (!user) {
    return <Navigate to={paths.Login} />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.Home} />
  }
  return (
    <>
      {!isAdmin && <Header />}
      {children}
    </>
  )
}
