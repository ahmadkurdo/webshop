using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webshop.Models;

namespace webshop.EntityConfigurations

{
    internal class OptionConfig : IEntityTypeConfiguration<Option>
    {
        public void Configure(EntityTypeBuilder<Option> entity)
        {
            entity.HasData(
                new Option { OptionId = 1, Type = "Size", Name = "S" },
                new Option { OptionId = 2, Type = "Size", Name = "M" },
                new Option { OptionId = 3, Type = "Size", Name = "L" },
                new Option { OptionId = 4, Type = "ShoeSize", Name = "41" },
                new Option { OptionId = 6, Type = "ShoeSize", Name = "43" },
                new Option { OptionId = 5, Type = "ShoeSize", Name = "42" },
                new Option { OptionId = 7, Type = "ShoeSize", Name = "44" },
                new Option { OptionId = 9, Type = "Color", Name = "Red" },
                new Option { OptionId = 10, Type = "Color", Name = "Yellow" },
                new Option { OptionId = 11, Type = "Color", Name = "Blue" },
                new Option { OptionId = 12, Type = "Color", Name = "Dark Blue" },
                new Option { OptionId = 13, Type = "Color", Name = "Orange" },
                new Option { OptionId = 14, Type = "Material", Name = "Jeans" },
                new Option { OptionId = 15, Type = "Material", Name = "Cotton" },
                new Option { OptionId = 16, Type = "Material", Name = "Silk" }

            );

        }
    }

}
