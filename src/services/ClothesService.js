import data from '../data/clothes/clothes.json';

const useClothesService = () => {
    const getFilteredClothes = async (from, to) => {
        return await data.slice(from, to);
    };

    const getNewArrivals = async () => {
        return await data;
    };

    return { getFilteredClothes, getNewArrivals };
};

export default useClothesService;
