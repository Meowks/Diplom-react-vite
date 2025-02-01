interface TTitle {
mainText:string,
}

export const Title = ({mainText}:TTitle) => {
  return <h1>{mainText}</h1>;
};