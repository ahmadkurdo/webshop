using Microsoft.EntityFrameworkCore.Migrations;

namespace webshop.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OptionTypeId",
                table: "Options");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OptionTypeId",
                table: "Options",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
