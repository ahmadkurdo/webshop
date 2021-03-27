using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webshop.Models;

namespace webshop.EntityConfigurations
{
    public class OptionGroupConfig : IEntityTypeConfiguration<OptionGroup>
    {
        public void Configure(EntityTypeBuilder<OptionGroup> entity)
        {
            entity.HasOne(p => p.Product).WithMany(p => p.OptionGroup).HasForeignKey(p => p.ProductId);
            entity.HasData(
                new OptionGroup { OptionGroupId = 1, Quantity = 10, ProductId = 1 },
                new OptionGroup { OptionGroupId = 2, Quantity = 10, ProductId = 1 }

            );

        }
    }

}

