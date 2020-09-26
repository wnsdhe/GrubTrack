using System;
using Server.Models;

namespace Server.BusinessLogic.Interfaces
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }

}
