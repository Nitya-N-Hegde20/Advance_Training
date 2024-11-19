namespace AuthAPI.Models.Dto
{
    public class LoginResponseDto
    {
        public UserDto UserName { get; set; }
        public string Token { get; set; }
    }
}
