using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using OEEInterfacr.Models;

namespace OEEInterfacr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MachineController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERP_OEEAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand("GetAllList", myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@TableName", "M_Machines");

                    using (SqlDataReader myReader = myCommand.ExecuteReader())
                    {
                        table.Load(myReader);
                    }
                }

                myCon.Close();
            }

            return new JsonResult(table);
        }


        [HttpPost]

        public JsonResult Post(Machine obj)
        {
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ERP_OEEAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand("AddMachine", myCon))
                {
                    myCommand.CommandType = CommandType.StoredProcedure;

                    // Add parameters to the stored procedure if needed
                    myCommand.Parameters.AddWithValue("@ch_name", obj.ch_name);
                    myCommand.Parameters.AddWithValue("@ch_shortname", obj.ch_shortname);
                    myCommand.Parameters.AddWithValue("@ch_ulogin", obj.ch_ulogin);
                    myCommand.Parameters.AddWithValue("@ch_usession", obj.ch_usession);
                    // Add more parameters as required

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            //return new JsonResult("Added Successfully!");
            return new JsonResult(new { message = "Machine Added Successfully!" });
        }




        /*        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["PlayerAppDB"].ConnectionString);

                public string Post(Machine clu)
                {

                    string msg = "";

                    if (clu != null)
                    {
                        SqlCommand cmd = new SqlCommand("AddMachine", con);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@ch_name", clu.ch_name);
                        cmd.Parameters.AddWithValue("@ch_shortname", clu.ch_shortname);
                        cmd.Parameters.AddWithValue("@ch_ulogin", clu.ch_ulogin);
                        cmd.Parameters.AddWithValue("@ch_usession", clu.ch_usession);

                        con.Open();
                        int i = cmd.ExecuteNonQuery();
                        con.Close();

                        if (i > 0)
                        {
                            msg = "Player Added successfully!";
                        }
                        else
                        {
                            msg = "Don't lose hope yet...";
                        }
                    }

                    return msg;

                }*/


    }
}
