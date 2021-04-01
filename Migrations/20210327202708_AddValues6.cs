using Microsoft.EntityFrameworkCore.Migrations;

namespace webshop.Migrations
{
    public partial class AddValues6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "OptionGroup",
                columns: new[] { "OptionGroupId", "ProductId", "Quantity" },
                values: new object[] { 1, 1, 10 });

            migrationBuilder.InsertData(
                table: "OptionGroupOption",
                columns: new[] { "OptionGroupId", "OptionId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 11 },
                    { 1, 15 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 1, 11 });

            migrationBuilder.DeleteData(
                table: "OptionGroupOption",
                keyColumns: new[] { "OptionGroupId", "OptionId" },
                keyValues: new object[] { 1, 15 });

            migrationBuilder.DeleteData(
                table: "OptionGroup",
                keyColumn: "OptionGroupId",
                keyValue: 1);
        }
    }
}
