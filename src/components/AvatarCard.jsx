export const AvatarCard = (props) => {
  return (
    <>
      <div>
        <div className={props.imageContainerClass}>
          <img
            src={props.src}
            alt="Avatar"
            className={props.imageClass}
          />
        </div>
      </div>
    </>
  );
};
