using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Server.Models.Context
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {

            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        fName = "Chaeyoon",
                        lName = "Lee",
                        UserName = "hellohello",
                        Email = "hellohello@gmail.com"
                    },
                    new AppUser
                    {
                        fName = "youtube",
                        lName = "Video",
                        UserName = "youtube",
                        Email = "youtube@gmail.com"
                    },
                    new AppUser
                    {
                        fName = "Facebook",
                        lName = "Login",
                        UserName = "Facebook",
                        Email = "Facebook@gmail.com"
                    },
                    new AppUser
                    {
                        fName = "Instagram",
                        lName = "Something",
                        UserName = "Instagram",
                        Email = "Instagram@gmail.com"
                    },
                    new AppUser
                    {
                        fName = "Legendof",
                        lName = "Zelda",
                        UserName = "Nintendo",
                        Email = "Nintendo@gmail.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            //if (!context.Transactions.Any())
            //{
            //    var transactions = new List<Transactions>
            //    {
            //        new Transactions
            //        {
            //            Id = 1,
            //            Date = new DateTime(2015, 12, 25),
            //            FoodWaste = true,
            //            Pickup = true,
            //            Amountlbs = 50,
            //            Status = "temp",
            //            Flag = true
            //        },
            //        new Transactions
            //        {
            //            Id = 2,
            //            Date = DateTime.Now,
            //            FoodWaste = false,
            //            Pickup = true,
            //            Amountlbs = 50,
            //            Status = "Hello",
            //            Flag = false
            //        },
            //        new Transactions
            //        {
            //            Id = 3,
            //            Date = DateTime.Now.AddDays(5),
            //            FoodWaste = true,
            //            Pickup = true,
            //            Amountlbs = 50,
            //            Status = "Hello",
            //            Flag = false
            //        }
            //    };
            //    context.Transactions.AddRange(transactions);
            //    context.SaveChanges();
            //}
        }
    }
}
