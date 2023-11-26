const checkAdmin = () => (next) => (action) => {
  if (action.type === "admin/getAdmin/pending") {
    const logged = localStorage.getItem("adminLogged")
    if (logged === "true") {
      return
    }
  }
  next(action)
}

export default checkAdmin