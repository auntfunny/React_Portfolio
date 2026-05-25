const SocialLinks = () => {
  const links = [
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/auntfunny",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103001/frontend_mentor_logo_fighf6.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/auntfunny",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103001/Github_logo_yuge7q.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anthony-black-51578b377/",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103002/Linkedin_logo_phlmso.png",
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0183fa4e3f5dc2fb75",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103003/upwork_logo_tmuzdr.png",
    },
  ];

  return (
    <main className="min-h-124 relative flex flex-wrap gap-6 justify-evenly items-center p-6 bg-acc4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="flex justify-center items-center w-lg p-4 rounded-2xl bg-acc1 shadow-2xl hover:shadow-[0px_4px_12px_#335145f4] hover:bg-acc2 hover:scale-105 transition-all duration-300"
        >
          <img
            src={link.image}
            alt={`${link.name} Logo`}
            className={`w-full rounded-2xl bg-white ${(link.name === "Upwork" || link.name === "LinkedIn") && "p-6"}`}
          />
        </a>
      ))}
    </main>
  );
};

export default SocialLinks;
