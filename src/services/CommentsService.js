import data from '../data/comments.json';

const useCommentsService = () => {
    const getSlisedComments = async (from, to) => {
        return await data.slice(from, to);
    };

    const getCommentsCount = async () => {
        return await data.length;
    };

    return { getSlisedComments, getCommentsCount };
};

export default useCommentsService;
