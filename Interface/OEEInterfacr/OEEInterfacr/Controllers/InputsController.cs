using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OEEInterfacr.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OEEInterfacr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InputsController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public InputsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public IActionResult ConvertStringToArray([FromBody] Inputs model)
        {
            if (model == null || string.IsNullOrEmpty(model.Input))
            {
                return BadRequest("Invalid input.");
            }

            // Split the input string into an array of strings
            string[] values = model.Input.Split(',');

            // Convert the array of strings to an array of integers
            int[] numbers = Array.ConvertAll(values, int.Parse);

            // Return the array of integers as a JSON response
            return new JsonResult(numbers);
        }

        [HttpGet]
        public JsonResult Get(string numberList)
        {
            DataTable resultTable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERP_OEEAppCon");

            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand("GetRowsByNumbers", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@NumberList", numberList);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        resultTable.Load(reader);
                    }
                }

                connection.Close();
            }

            return new JsonResult(resultTable);
        }




    }
}
