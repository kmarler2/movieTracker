export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.favorite];
    case "REMOVE_FAVORITE":
      const filteredFavorites = state.filter(favorite => {
        return favorite.movie_id !== action.movie_id;
      });
      return filteredFavorites;
    case "ADD_FAVORITES":
      return action.favorites;
    case "EMPTY_FAVORITES":
      return [];
    default:
      return state;
  }
};
