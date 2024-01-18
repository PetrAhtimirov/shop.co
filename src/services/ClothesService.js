import data from '../data/clothes/clothes.json';

const useClothesService = () => {
    const getFilteredClothes = async (from, to) => {
        return await data.slice(from, to);
    };

    const getNewArrivals = async () => {
        return await data
            .filter((item) => {
                if (item.new) {
                    return item;
                }
            })
            .slice(-5);
    };

    return { getFilteredClothes, getNewArrivals };
};

export default useClothesService;
