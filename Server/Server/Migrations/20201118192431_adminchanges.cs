using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class adminchanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "userAdmin",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userAdmin",
                table: "AspNetUsers");
        }
    }
}
