using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using webshop.EntityConfigurations;

namespace webshop.Models
{
    public class Context : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public Context(DbContextOptions<Context> options) : base(options) { }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfiguration(new OptionGroupOptionConfig());       //#B
            modelBuilder.ApplyConfiguration(new OptionConfig());
            modelBuilder.ApplyConfiguration(new OptionGroupConfig());
            modelBuilder.ApplyConfiguration(new ProductConfig());

        }


    }
    public class Product
    {
        public int ProductId { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Wheight { get; set; }
        public string Image { get; set; }
        public List<OptionGroup> OptionGroup { get; set; }
    }
    public class Option
    {
        public int OptionId { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        [Newtonsoft.Json.JsonIgnore]
        public List<OptionGroupOption> OptionGroupLink { get; set; }

    }
    public class OptionGroupOption
    {
        [Newtonsoft.Json.JsonIgnore]

        public int OptionGroupId { get; set; }
        public int OptionId { get; set; }
        public Option Option { get; set; }
        public OptionGroup OptionGroup { get; set; }

    }


    public class OptionGroup
    {
        public int OptionGroupId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public List<OptionGroupOption> OptionLink { get; set; }


    }


}