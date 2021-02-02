using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace webshop.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Options_OptionTypes_OptionTypeId",
                table: "Options");

            migrationBuilder.DropTable(
                name: "OptionTypes");

            migrationBuilder.DropIndex(
                name: "IX_Options_OptionTypeId",
                table: "Options");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Options",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Options");

            migrationBuilder.CreateTable(
                name: "OptionTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Type = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Options_OptionTypeId",
                table: "Options",
                column: "OptionTypeId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Options_OptionTypes_OptionTypeId",
                table: "Options",
                column: "OptionTypeId",
                principalTable: "OptionTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
