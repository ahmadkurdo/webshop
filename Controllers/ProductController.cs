using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using webshop.Models;


namespace webshop.Controllers
{

    [Route("/products/")]
    public class ProductController : Controller
    {
        private readonly Context _context;
        public ProductController(Context context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        [Produces("application/json")]
        public IActionResult products(int id)
        {

            var x = _context.Products.Include(p => p.OptionGroup).ThenInclude(o => o.Options).ThenInclude(k => k.Option);
            return Ok(x);

        }
    }


}