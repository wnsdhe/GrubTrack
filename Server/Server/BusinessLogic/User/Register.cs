using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server.BusinessLogic.Errors;
using Server.BusinessLogic.Interfaces;
using Server.BusinessLogic.Validators;
using Server.Models;
using Server.Models.Context;

namespace Server.BusinessLogic.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string Fname { get; set; }
            public string Lname { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public Boolean UserAdmin { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Fname).NotEmpty();
                RuleFor(x => x.Lname).NotEmpty();
                RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.Password).Password();

            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly DataContext _context;
            public Handler(DataContext context, UserManager<AppUser> userManager,
                IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.AnyAsync(x=>x.Email == request.Email))
                {
                    throw new RestException(HttpStatusCode.BadRequest, new { Email = "Email already exists" });
                }
                if (await _context.Users.AnyAsync(x => x.UserName == request.Username))
                {
                    throw new RestException(HttpStatusCode.BadRequest, new { Username = "Username already exists" });
                }

                var user = new AppUser
                {
                    fName = request.Fname,
                    lName = request.Lname,
                    Email = request.Email,
                    UserName = request.Username,
                    userAdmin = request.UserAdmin
                };

                var result = await _userManager.CreateAsync(user, request.Password);
                if (result.Succeeded)
                {
                    return new User
                    {
                        Fname = user.fName,
                        Lname = user.lName,
                        Username = user.UserName,
                        UserAdmin = user.userAdmin,
                        Token = _jwtGenerator.CreateToken(user),
                        ID = user.Id,
                        Image = null
                    };
                }
                throw new Exception("Problem Creating User");
            }

        }
    }
}
