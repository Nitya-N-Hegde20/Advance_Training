﻿using AuthAPI.Data;
using AuthAPI.Models;
using AuthAPI.Models.Dto;
using Microsoft.AspNetCore.Identity;

namespace AuthAPI.Service.IService
{
    public class AuthService: IAuthService
    {
        private readonly AppDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IJwtTokenGenerator _jwtTokenGenerator;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AuthService(AppDbContext db, UserManager<ApplicationUser> userManager, IJwtTokenGenerator jwtTokenGenerator, RoleManager<IdentityRole> roleManager)
        {
            _db = db;
            _userManager = userManager;
            _jwtTokenGenerator = jwtTokenGenerator;
            _roleManager = roleManager;
        }

        

        public async Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto)
        {
            var user=_db.ApplicationUsers.FirstOrDefault(u=>u.UserName.ToLower()==loginRequestDto.
            UserName.ToLower());
            bool isValid=await _userManager.CheckPasswordAsync(user,loginRequestDto.Password);
            var token=_jwtTokenGenerator.GenerateToken(user);
            if (user == null || isValid == false)
            {
                return new LoginResponseDto() { UserName = null, Token = "" };
            }
            UserDto userDto = new()
            {
                Email = user.Email,
                ID = user.Id,
                Name = user.Name,
                PhoneNumber=user.PhoneNumber

            };
            LoginResponseDto loginResponseDto = new LoginResponseDto()
            {
                UserName = userDto,
                Token = token
            };
            return loginResponseDto;
        }

       
        public async Task<string> Register(RegistrationRequestDto registrationRequestDto)

        {

            ApplicationUser user = new()

            {

                UserName = registrationRequestDto.Email,

                Email = registrationRequestDto.Email,

                NormalizedEmail = registrationRequestDto.Email.ToUpper(),

                Name = registrationRequestDto.Name,

                PhoneNumber = registrationRequestDto.PhoneNumber

            };

            try

            {

                var result = await _userManager.CreateAsync(user, registrationRequestDto.Password);

                if (result.Succeeded)

                {

                    var userToReturn = _db.ApplicationUsers.First(u => u.UserName == registrationRequestDto.Email);

                    UserDto userDto = new()

                    {

                        Email = userToReturn.Email,

                        ID = userToReturn.Id,

                        Name = userToReturn.Name,

                        PhoneNumber = userToReturn.PhoneNumber

                    };

                    return "";

                }

                else

                {

                    return result.Errors.FirstOrDefault().Description;

                }

            }

            catch (Exception ex)

            {

            }

            return "Error Encountered";

        }

        public async Task<bool> AssignRole(string email, string rolename)
        {
            var user = _db.ApplicationUsers.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if (user != null)
            {
                if (!_roleManager.RoleExistsAsync(rolename).GetAwaiter().GetResult())
                {
                    _roleManager.CreateAsync(new IdentityRole(rolename)).GetAwaiter().GetResult();
                }
                await _userManager.AddToRoleAsync(user, rolename);
                return true;
            }
            return false;
        }

    }
}
