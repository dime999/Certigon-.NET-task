using Certigon_Task_API.Model;
using Certigon_Task_API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Certigon_Task_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly AppDbContext _context;
        private readonly ILogger<EmployeeController> _logger;


        public EmployeeController(AppDbContext context,ILogger<EmployeeController>logger)
        {
            this._context = context;
            this._logger = logger;
        }

        [HttpGet]
        public ActionResult<List<Employee>> GetAll()
        {
            var data = _context.Employees
                .Include(s => s.Department)
                .OrderByDescending(s => s.Id)
                .AsQueryable();
            return data.Take(100).ToList();
        }

        [HttpGet("{id}")]
        public ActionResult GetEmployeeById(int id)
        {
            _logger.LogInformation("GetEmployeeById: {id}", id);
            return Ok(_context.Employees.Include(e => e.Department).FirstOrDefault(s => s.Id == id));

        }




            [HttpGet("{true|false:bool}")]
        public ActionResult<List<Employee>> GetActiveEmployees(bool active)
        {
            if (active == true)
            {
                 return Ok(_context.Employees.Where(x => x.Active == true).ToList());
            }
            else
            {
                return Ok(_context.Employees.Where(x => x.Active == false).ToList());
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            

               
                var e = _context.Employees.SingleOrDefault(x => x.Id == id);

                if (e == null)
                {
                _logger.LogInformation("Wrong ID: {id}",id);
                return NotFound("Wrong ID");
                }
                _context.Employees.Remove(e);
                _context.SaveChanges();
                _logger.LogInformation("Delete");
                _logger.LogInformation("DeleteEmployeById: {id}", id);
                return Ok("Employee deleted");

           
           
        }

        [HttpPost]
        public ActionResult<Employee> AddEmployee([FromBody] EmployeeAdd e)
        {
            Employee em = new Employee
            {
                Name = e.Name,
                Gender = e.Gender,
                Salary = e.Salary,
                Active = e.Active,
                Age=e.Age,
                DepardmentId = e.DepardmentId,
            };
            _context.Employees.Add(em);
            _context.SaveChanges();
            return em;
        }

        [HttpGet("/department/{departmentId:int}/employees")]
        public ActionResult<List<Employee>> GetDepartmentsEmployees(int id,bool active)
        {
            if (active == true)
            {
                return Ok(_context.Employees.Where(x => x.DepardmentId == id && x.Active==true).ToList());

            }
            else
            {
                return Ok(_context.Employees.Where(x => x.DepardmentId == id && x.Active == false).ToList());
            }
        }


        [HttpPut("{id}")]
        public ActionResult Update(int id,Employee employee)
        {
            var e = _context.Employees.SingleOrDefault(x => x.Id == id);

            if (e == null)
            {
                return NotFound("Wrong ID");
            }

            if(employee.Name!=null)
            {
                e.Name = employee.Name;
            }

            if (employee.Gender != null)
            {
                e.Gender = employee.Gender;
            }

            if (employee.Age!= 0)
            {
                e.Age = employee.Age;
            }

            if (employee.Salary!= 0)
            {
                e.Salary = employee.Salary;
            }

            if (employee.DepardmentId != 0)
            {
                e.DepardmentId = employee.DepardmentId;
            }

            e.Active= employee.Active;

            _context.Update(e);
            _context.SaveChanges();
            return Ok("Employee is updated!");

        }

       


    }
}
