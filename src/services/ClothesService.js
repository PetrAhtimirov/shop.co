const useClothesService = () => {
    const sortByDateClothes = async (from = 0, to = 9) => {
        const data = await require('../data/clothes/clothes.json');
        return data
            .sort((a, b) => {
                const aDate = new Date(a.date);
                const bDate = new Date(b.date);
                return bDate - aDate;
            })
            .slice(from, to);
    };

    const sortBySellsClothes = async (from = 0, to = 9) => {
        const data = await require('../data/clothes/clothes.json');
        return data
            .sort((a, b) => {
                return b.sells - a.sells;
            })
            .slice(from, to);
    };

    const getClothes = async (sort, filters = {}, from = 0, to = 9) => {
        let sortedData =
            sort === 'Most Popular'
                ? await sortBySellsClothes(from, to)
                : sort === 'New'
                ? await sortByDateClothes(from, to)
                : [];
        let filteredData = sortedData.filter((obj) => {
            for (const key in filters) {
                if (obj[key] !== filters[key]) {
                    return false;
                }
            }
            return true;
        });

        return filteredData.slice(from, to);
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
        getClothes,
        getSortedByDateClothes,
        getSortedBySellsClothes,
    };
};

export default useClothesService;
