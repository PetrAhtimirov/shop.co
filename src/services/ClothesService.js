// import data from '../data/clothes/clothes.json';

const useClothesService = () => {
    const getFilteredClothes = async (from, to) => {
        const data = await require('../data/clothes/clothes.json');
        return data.slice(from, to);
    };

    const getSortedByDateClothes = async (from = 0, to = 9) => {
        const data = await require('../data/clothes/clothes.json');
        return data
            .sort((a, b) => {
                const aDate = new Date(a.date);
                const bDate = new Date(b.date);
                return bDate - aDate;
            })
            .slice(from, to);
    };

    const getSortedBySellsClothes = async (from = 0, to = 9) => {
        const data = await require('../data/clothes/clothes.json');
        return data
            .sort((a, b) => {
                return b.sells - a.sells;
            })
            .slice(from, to);
    };

    return {
        getFilteredClothes,
        getSortedByDateClothes,
        getSortedBySellsClothes,
    };
};

export default useClothesService;
