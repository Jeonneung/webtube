export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) =>
  res.render("Watch", { pageTitle: "Watch Videos" });
export const edit = (req, res) =>
  res.render("Edit", { pageTitle: "Edit Videos" });
export const deleteVideo = (req, res) => res.send("Delete");
export const upload = (req, res) => res.send("Upload");
