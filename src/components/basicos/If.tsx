type PropsType = {
  children: React.ReactNode;
  test: boolean
};

export default function If(props: PropsType) {
  if (props.test) {
    return props.children as JSX.Element;
  }
  return <></>;
}
