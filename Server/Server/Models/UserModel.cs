using System;
using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public class UserModel : IdentityUser<int>
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
    }
}
