import { useParams } from 'react-router-dom';

export const DrinkDetails = () => {
  const { drinkId } = useParams();

  return <div>Sorry, this page is under construction. Drink ID: {drinkId} </div>;
};
