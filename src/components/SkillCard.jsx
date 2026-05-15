const SkillCard = ({ image, title }) => {
  return (
    <div className="flex justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-xl bg-acc4 inset-shadow-sm/50 hover:scale-125 transition-all duration-400 ease-in-out">
      <img src={image} alt={title} className="w-18 lg:w-28" />
    </div>
  );
};

export default SkillCard;
