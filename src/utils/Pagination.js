let Pagination = {
    page: String,
    limit: String
}


const PaginationRequest = (request) => {

    const reqPage = request.query.page == "" ? 1 : request.query.page;
    const reqLimit = request.query.limit == "" ? 1 : parseInt(request.query.limit);

    return Pagination = {
        page: reqPage,  
        limit: reqLimit
    }
}

module.exports = PaginationRequest;