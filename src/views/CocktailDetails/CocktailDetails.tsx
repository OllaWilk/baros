import { useParams } from 'react-router-dom';

export const CocktailDetails = () => {
  const { coctailId } = useParams();

  return <div>Sorry, this page is under construction. Coctail ID: {coctailId} </div>;
};
