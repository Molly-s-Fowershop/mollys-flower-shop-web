type CategoryPageParams = {
  id: string;
};

type CategoryPageProps = {
  params: CategoryPageParams;
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Category {id}</h1>
    </div>
  );
}
