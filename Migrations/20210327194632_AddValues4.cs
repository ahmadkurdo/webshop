using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace webshop.Migrations
{
    public partial class AddValues4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Option",
                columns: table => new
                {
                    OptionId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Option", x => x.OptionId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Wheight = table.Column<decimal>(nullable: false),
                    Image = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.CreateTable(
                name: "OptionGroup",
                columns: table => new
                {
                    OptionGroupId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Quantity = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionGroup", x => x.OptionGroupId);
                    table.ForeignKey(
                        name: "FK_OptionGroup_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OptionGroupOption",
                columns: table => new
                {
                    OptionGroupId = table.Column<int>(nullable: false),
                    OptionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionGroupOption", x => new { x.OptionGroupId, x.OptionId });
                    table.ForeignKey(
                        name: "FK_OptionGroupOption_OptionGroup_OptionGroupId",
                        column: x => x.OptionGroupId,
                        principalTable: "OptionGroup",
                        principalColumn: "OptionGroupId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OptionGroupOption_Option_OptionId",
                        column: x => x.OptionId,
                        principalTable: "Option",
                        principalColumn: "OptionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Option",
                columns: new[] { "OptionId", "Name", "Type" },
                values: new object[,]
                {
                    { 1, "S", "Size" },
                    { 2, "M", "Size" },
                    { 3, "L", "Size" },
                    { 4, "41", "ShoeSize" },
                    { 6, "43", "ShoeSize" },
                    { 5, "42", "ShoeSize" },
                    { 7, "44", "ShoeSize" },
                    { 9, "Red", "Color" },
                    { 10, "Yellow", "Color" },
                    { 11, "Blue", "Color" },
                    { 12, "Dark Blue", "Color" },
                    { 13, "Orange", "Color" },
                    { 14, "Jeans", "Material" },
                    { 15, "Cotton", "Material" },
                    { 16, "Silk", "Material" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_OptionGroup_ProductId",
                table: "OptionGroup",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OptionGroupOption_OptionId",
                table: "OptionGroupOption",
                column: "OptionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OptionGroupOption");

            migrationBuilder.DropTable(
                name: "OptionGroup");

            migrationBuilder.DropTable(
                name: "Option");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
