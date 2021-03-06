﻿using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Server.BusinessLogic.Errors;
using Server.BusinessLogic.Interfaces;
using Server.Models;
using Server.Models.Context;

namespace Server.BusinessLogic.User
{
    public class Login
    {
        public class Query : IRequest<User>
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }

        }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;
            private readonly IJwtGenerator _jwtGenerator;
            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _signInManager = signInManager;
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email);

                if (user == null)
                {
                    throw new RestException(HttpStatusCode.Unauthorized);
                }
                //currently set the lockout as result from failure to false.
                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password ,false);

                if (result.Succeeded)
                {
                    return new User
                    {
                        Fname = user.fName,
                        Lname = user.lName,
                        Token = _jwtGenerator.CreateToken(user),
                        Username = user.UserName,
                        ID = user.Id,
                        Image = null,
                        UserAdmin = user.userAdmin
                    };
                }

                throw new RestException(HttpStatusCode.Unauthorized);
            }
        }
    }
}
