using System;
using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public class AppUser : IdentityUser
    {
        public string fName { get; set; }
        public string lName { get; set; }
    }
}
