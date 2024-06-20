type ListProps = {
  components: React.ReactNode[];
};

function List({ components }: ListProps) {
  return (
    <div className="flex flex-col">
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
}
