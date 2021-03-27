using Microsoft.EntityFrameworkCore.Migrations;

namespace webshop.Migrations
{
    public partial class Jemoeder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "OptionGroup",
                columns: new[] { "OptionGroupId", "ProductId", "Quantity" },
                values: new object[] { 2, 1, 10 });

            migrationBuilder.InsertData(
                table: "OptionGroupOption",
                columns: new[] { "OptionGroupId", "OptionId" },
                values: new object[,]
                {
                    { 2, 2 },
                    { 2, 12 },
                    { 2, 16 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 2, 12 });

            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 2, 16 });

            migrationBuilder.DeleteData(
                table: "OptionGroup",
                keyColumn: "OptionGroupId",
                keyValue: 2);
        }
    }
}
