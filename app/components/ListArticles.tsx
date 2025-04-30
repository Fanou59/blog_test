type ListArticlesProps = {
  id: number;
  createdAt: string;
  title: string;
  author: string;
  onDelete: (id: number) => void;
  children?: React.ReactNode;
};

export const ListArticles = ({
  id,
  title,
  author,
  createdAt,
  onDelete,
  children,
}: ListArticlesProps) => {
  return (
    <div className="card w-96 bg-base-100 card-xs shadow-sm p-4 flex flex-row items-center">
      <div className="card-body">
        <h2 className="card-title">
          Titre de l&apos;article :<span>{title}</span>
        </h2>
        <p>Créer par : {author}</p>
        <p>Créer le : {createdAt}</p>
      </div>
      <div className="card-actions">
        <button className="btn btn-warning" onClick={() => onDelete(id)}>
          {children}
        </button>
      </div>
    </div>
  );
};
