type ListArticlesProps = {
  id: number;
  createdAt: string;
  title: string;
  author: string;
  onDelete: (id: number) => void;
};

export const ListArticles = ({
  id,
  title,
  author,
  createdAt,
  onDelete,
}: ListArticlesProps) => {
  return (
    <div className="card w-96 bg-base-100 card-xs shadow-sm p-4 flex flex-row items-center">
      <div className="card-body">
        <h2 className="card-title">Titre de l&apos;article : {title}</h2>
        <p>Créer par : {author}</p>
        <p>Créer le : {createdAt}</p>
      </div>
      <div className="card-actions">
        <button className="btn btn-warning" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
