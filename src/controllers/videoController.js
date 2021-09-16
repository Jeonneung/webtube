export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      ratinf: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 22,
      id: 1,
    },
    {
      title: "Second Video",
      ratinf: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 22,
      id: 1,
    },
    {
      title: "Third Video",
      ratinf: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 22,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home" });
};
export const see = (req, res) => res.render("Watch");
export const edit = (req, res) => res.render("Edit");
export const deleteVideo = (req, res) => res.send("Delete");
export const upload = (req, res) => res.send("Upload");
export const search = (req, res) => res.send("Search");
