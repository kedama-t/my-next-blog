interface AuthorProps {
  name: string;
  profile: string;
  imageSrc: string;
}

export default function Author(props: AuthorProps) {
  const { name, profile, imageSrc } = props;
  return (
    <div className="card w-4/5 mx-auto bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src={imageSrc} alt={name} />
          </div>
        </div>
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-xs text-center">{profile}</p>
      </div>
    </div>
  );
}
