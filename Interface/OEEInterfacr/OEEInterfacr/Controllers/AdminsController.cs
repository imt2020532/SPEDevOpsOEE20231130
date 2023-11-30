using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OEEInterfacr.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OEEInterfacr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly string _connectionString;

        public AdminsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ERP_OEEAppCon");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Admins model)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                string query = "SELECT COUNT(*) FROM dbo.Admins WHERE Username = @Username AND Password = @Password";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Username", model.Username);
                command.Parameters.AddWithValue("@Password", model.Password);

                int count = (int)await command.ExecuteScalarAsync();

                if (count > 0)
                {
                    // Successful authentication
                    return Ok(new { message = "Login successful" });
                }
                else
                {
                    // Invalid credentials
                    return Unauthorized(new { message = "Invalid username or password" });
                }
            }
        }
    }
}

