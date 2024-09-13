using System.Text.Json;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerpage
        , int totalItems, int totalPages)
        {
            var paginationHeader = new
            {
                currentPage,
                itemsPerpage,
                totalItems,
                totalPages
            };
            response.Headers.Append("Pagination", JsonSerializer.Serialize(paginationHeader));
        }
    }
}