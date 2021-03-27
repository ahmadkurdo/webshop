using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webshop.Models;

namespace webshop.EntityConfigurations
{
    internal class OptionGroupOptionConfig : IEntityTypeConfiguration<OptionGroupOption>
    {
        public void Configure(EntityTypeBuilder<OptionGroupOption> entity)
        {
            entity.HasKey(ogo => new { ogo.OptionGroupId, ogo.OptionId });

            entity.HasOne(ogo => ogo.Option)
                .WithMany(p => p.OptionGroupLink)
                .HasForeignKey(pt => pt.OptionId);

            entity.HasOne(pt => pt.OptionGroup)
                .WithMany(t => t.Options)
                .HasForeignKey(pt => pt.OptionGroupId);

            entity.HasData(
                new OptionGroupOption {OptionId = 1,  OptionGroupId = 1},
                new OptionGroupOption {OptionId = 11,  OptionGroupId = 1},
                new OptionGroupOption {OptionId = 15,  OptionGroupId = 1},
                new OptionGroupOption {OptionId = 2,  OptionGroupId = 2},
                new OptionGroupOption {OptionId = 12,  OptionGroupId = 2},
                new OptionGroupOption {OptionId = 16,  OptionGroupId = 2}
            );

    }
}}