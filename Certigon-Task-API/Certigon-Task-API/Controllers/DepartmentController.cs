using Certigon_Task_API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Certigon_Task_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly AppDbContext _context;


        public DepartmentController(AppDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public List<Department> GetDepartments()
        {
            return _context.Departments.ToList();
        }


       
    }
}
