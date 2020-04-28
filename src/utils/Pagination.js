let Pagination = {
    page: String,
    limit: String
}


const PaginationRequest = (request) => {
    return Pagination = {
        page: request.query.page,     
        limit: request.query.limit
    }
}

module.exports = PaginationRequest;