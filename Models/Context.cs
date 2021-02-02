using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webshop.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Option>().HasKey(t => t.Id);
            modelBuilder.Entity<Product>().HasKey(t => t.Id);
            modelBuilder.Entity<Option>().HasOne(t => t.Product).WithMany( x=> x.Options).HasForeignKey( y => y.ProductId);
            
      
        }
            
        public DbSet<Product> Products { get; set; }
        public DbSet<Option> Options { get; set; }

        
    }
    public class Product
    {
        public int Id { get; set; }
        public string Description { get; set; }        
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Wheight { get; set; }
        public string Image { get; set; }
        public int Quantity { get; set; }
        public List<Option> Options { get; set; }
    }
    public class Option
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public int ProductId { get; set; }
        public Product Product{ get; set;}
        
    }

}