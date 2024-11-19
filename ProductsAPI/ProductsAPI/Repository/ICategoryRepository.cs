using ProductsAPI.Models;

namespace ProductsAPI.Repository
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetCategory();

        Category GetCategorytByID(int category);

        void InsertCategory(Category category);

        void DeleteCategory(int categoryId);

        void UpdateCategory(Category category);

        void Save();
    }
}
