using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Server.Models.Context
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Transactions> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Transactions>().HasData(
                    new Transactions
                    {
                        Id = 1,
                        Date = new DateTime(2015, 12, 25),
                        FoodWaste = true,
                        Pickup = true,
                        Amountlbs = 50,
                        Status = "temp",
                        Flag = true
                    });
        }
    }
}
