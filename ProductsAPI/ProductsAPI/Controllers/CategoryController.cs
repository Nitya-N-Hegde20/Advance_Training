using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Models;
using ProductsAPI.Repository;
using System.Transactions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _catRepository;
        public CategoryController(ICategoryRepository catRepository)

        {

            _catRepository = catRepository;

        }
        // GET: api/<CategoryController>
        [HttpGet]
        public IActionResult Get()
        {
            var products = _catRepository.GetCategory();

            return new OkObjectResult(products);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}", Name = "Gett")]
        public IActionResult Get(int id)

        {

            var product = _catRepository.GetCategorytByID(id);

            return new OkObjectResult(product);

        }

        // POST api/<CategoryController>
        [HttpPost]
        public IActionResult Post([FromBody] Category cat)

        {

            using (var scope = new TransactionScope())

            {

                _catRepository.InsertCategory(cat);

                scope.Complete();

                return CreatedAtAction(nameof(Get), new { id = cat.Id }, cat);

            }

        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Category cat)
        {
            if (cat != null)

            {

                using (var scope = new TransactionScope())

                {

                    _catRepository.UpdateCategory(cat);

                    scope.Complete();

                    return new OkResult();

                }

            }

            return new NoContentResult();
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)

        {

            _catRepository.DeleteCategory(id);

            return new OkResult();

        }
    }
}
