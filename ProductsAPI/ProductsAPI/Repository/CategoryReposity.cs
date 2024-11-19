using Microsoft.EntityFrameworkCore;
using ProductsAPI.Data;
using ProductsAPI.Models;

namespace ProductsAPI.Repository
{
    public class CategoryReposity : ICategoryRepository
    {
        private readonly ProductContext _dbContext;
        public CategoryReposity(ProductContext dbContext) {
            _dbContext = dbContext;
        }
        public void DeleteCategory(int categoryId)
        {
            var category = _dbContext.Categories.Find(categoryId);

            _dbContext.Categories.Remove(category);

            Save();
        }

        public IEnumerable<Category> GetCategory()
        {
            return _dbContext.Categories.ToList();
        }

        public Category GetCategorytByID(int category)
        {
            return _dbContext.Categories.Find(category);
        }

        public void InsertCategory(Category category)
        {
            _dbContext.Add(category);

            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        public void UpdateCategory(Category category)
        {
            _dbContext.Entry(category).State = EntityState.Modified;

            Save();
        }
    }
}
