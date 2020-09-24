using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class TempValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "Amountlbs", "Date", "Flag", "FoodWaste", "Pickup", "Status" },
                values: new object[] { 1, 50, new DateTime(2015, 12, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), true, true, true, "temp" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
