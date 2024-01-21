const useClothesService = () => {
    const sortByDateClothes = (data) => {
        return data.sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return bDate - aDate;
        });
    };

    const sortBySellsClothes = (data) => {
        return data.sort((a, b) => {
            return b.sells - a.sells;
        });
    };

    const filterClothes = (data, filters) => {
        return data.filter((obj) => {
            for (const key in filters) {
                if (
                    key !== 'minPrice' &&
                    key !== 'maxPrice' &&
                    key !== 'size'
                ) {
                    if (obj[key] !== filters[key]) {
                        return false;
                    }
                }
            }
            if (filters.maxPrice && +obj.price.slice(1) > +filters.maxPrice) {
                return false;
            }
            if (filters.maxPrice && +obj.price.slice(1) < +filters.minPrice) {
                return false;
            }

            if (filters.size && filters.size.length !== 0) {
                let flag = false;
                filters.size.forEach((filterSize) => {
                    flag = !obj.sizes.includes(filterSize) && flag;
                });
                if (flag) {
                    return false;
                }
            }

            return true;
        });
    };

    const getClothes = async (sort, filters = {}, from = 0, to = 9) => {
        const data = await require('../data/clothes/clothes.json');

        let filteredData = filterClothes(data, filters);

        let sortedData =
            sort === 'Most Popular'
                ? sortBySellsClothes(filteredData, from, to)
                : sort === 'New'
                ? sortByDateClothes(filteredData, from, to)
                : [];

        return sortedData.slice(from, to);
    };

    const getClothesCount = async (filters = {}) => {
        const data = await require('../data/clothes/clothes.json');
        return filterClothes(data, filters).length;
    };

    return {
        getClothes,
        getClothesCount,
    };
};

export default useClothesService;
