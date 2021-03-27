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

            // var q = (from p in _context.Options
            //          where p.Id == id
            //          from z in _context.Products
            //          where id == z.Id
            //          select new
            //          {
            //              product = p

            //          }).ToList();

            var x = _context.Products.Include( p => p.OptionGroup).ThenInclude( o => o.OptionLink).ThenInclude( k => k.Option);
            return Ok(x);

        }
    }


}