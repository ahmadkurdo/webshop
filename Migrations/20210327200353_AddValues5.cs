using Microsoft.EntityFrameworkCore.Migrations;

namespace webshop.Migrations
{
    public partial class AddValues5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "Description", "Image", "Name", "Price", "Quantity", "Wheight" },
                values: new object[,]
                {
                    { 1, "Bergahus Corbeck jacket in purple/navy", "https://images.asos-media.com/products/bergahus-corbeck-jacket-in-purple-navy/23807356-1-purple?$XXL$&wid=513&fit=constrain", "Bergahus Corbeck jacket in purple/navy", 80m, 0, 200m },
                    { 2, "Nike Running Quest 3 trainers in blue", "https://images.asos-media.com/products/nike-running-quest-3-trainers-in-blue/21248700-1-blue?$XXL$&wid=513&fit=constrain", "Nike Running Quest 3 trainers in blue", 100m, 0, 100m },
                    { 3, "Nike Running Renew Run 2 trainers in light pink", "https://images.asos-media.com/products/nike-running-renew-run-2-trainers-in-light-pink/21249069-1-pink?$XXL$&wid=513&fit=constrain", "Nike Running Renew Run 2 trainers in light pink", 130m, 0, 250m },
                    { 4, "Tommy Jeans high rise mom jean in dark wash", "https://images.asos-media.com/products/tommy-jeans-high-rise-mom-jean-in-dark-wash/21066878-1-tjsavefawbmix?$XXL$&wid=513&fit=constrain", "Tommy Jeans high rise mom jean in dark wash", 96m, 0, 200m },
                    { 6, "Tommy Jeans cargo mom jean in lightwash blue", "https://images.asos-media.com/products/tommy-jeans-cargo-mom-jean-in-lightwash-blue/21762295-1-savepslbrigdest?$XXL$&wid=513&fit=constrain", "Tommy Jeans cargo mom jean in lightwash blue", 87m, 0, 150m },
                    { 5, "BOSS Athleisure Tee 5 t-shirt in white", "https://images.asos-media.com/products/boss-athleisure-tee-5-t-shirt-in-white/23020696-1-white?$XXL$&wid=513&fit=constrain", "BOSS Athleisure Tee 5 t-shirt in white", 45m, 0, 80m }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6);
        }
    }
}
