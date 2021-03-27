using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webshop.Models;

namespace webshop.EntityConfigurations
{
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> entity)
        {
            entity.HasData(
                new Product { ProductId = 1, Description = "Bergahus Corbeck jacket in purple/navy", Name = "Bergahus Corbeck jacket in purple/navy", Price = 80, Wheight = 200, Image = "https://images.asos-media.com/products/bergahus-corbeck-jacket-in-purple-navy/23807356-1-purple?$XXL$&wid=513&fit=constrain" },
                new Product { ProductId = 2, Description = "Nike Running Quest 3 trainers in blue", Name = "Nike Running Quest 3 trainers in blue", Price = 100, Wheight = 100, Image = "https://images.asos-media.com/products/nike-running-quest-3-trainers-in-blue/21248700-1-blue?$XXL$&wid=513&fit=constrain" },
                new Product { ProductId = 3, Description = "Nike Running Renew Run 2 trainers in light pink", Name = "Nike Running Renew Run 2 trainers in light pink", Price = 130, Wheight = 250, Image = "https://images.asos-media.com/products/nike-running-renew-run-2-trainers-in-light-pink/21249069-1-pink?$XXL$&wid=513&fit=constrain" },
                new Product { ProductId = 4, Description = "Tommy Jeans high rise mom jean in dark wash", Name = "Tommy Jeans high rise mom jean in dark wash", Price = 96, Wheight = 200, Image = "https://images.asos-media.com/products/tommy-jeans-high-rise-mom-jean-in-dark-wash/21066878-1-tjsavefawbmix?$XXL$&wid=513&fit=constrain" },
                new Product { ProductId = 6, Description = "Tommy Jeans cargo mom jean in lightwash blue", Name = "Tommy Jeans cargo mom jean in lightwash blue", Price = 87, Wheight = 150, Image = "https://images.asos-media.com/products/tommy-jeans-cargo-mom-jean-in-lightwash-blue/21762295-1-savepslbrigdest?$XXL$&wid=513&fit=constrain" },
                new Product { ProductId = 5, Description = "BOSS Athleisure Tee 5 t-shirt in white", Name = "BOSS Athleisure Tee 5 t-shirt in white", Price = 45, Wheight = 80, Image = "https://images.asos-media.com/products/boss-athleisure-tee-5-t-shirt-in-white/23020696-1-white?$XXL$&wid=513&fit=constrain" }
            );

        }
    }

}
