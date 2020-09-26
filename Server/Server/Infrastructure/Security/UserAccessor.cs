using System;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Server.BusinessLogic.Interfaces;

namespace Server.Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        public string GetCurrentUsername()
        {
            var username = _httpContextAccessor.HttpContext.User?.Claims?.FirstOrDefault(x =>
            x.Type == ClaimTypes.NameIdentifier)?.Value;

            return username;
        }
    }
}
