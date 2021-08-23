type PropsType = {
  children: React.ReactNode;
};

const ComFilho = (props: PropsType) => {
  return (
    <div>
      <h2>Os Filhos:</h2>
      <div>{props.children}</div>
    </div>
  );
};

export default ComFilho;
