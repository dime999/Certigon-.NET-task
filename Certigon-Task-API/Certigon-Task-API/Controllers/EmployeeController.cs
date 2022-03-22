using Certigon_Task_API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Certigon_Task_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public List<Employee> GetEmployees()
        {
            return _context.Employees.ToList();
        }

        [HttpGet("{id}")]
        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.SingleOrDefault(x=>x.Id== id);
        }

        


        [HttpGet("{true|false:bool}")]
        public List<Employee> GetActiveEmployees(bool active)
        {
            if (active == true)
            {
                return _context.Employees.Where(x => x.Active == true).ToList();
            }
            else
            {
                return _context.Employees.Where(x => x.Active == false).ToList();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var e = _context.Employees.SingleOrDefault(x=> x.Id==id);

            if(e==null)
            {
                return NotFound("Wrong ID");
            }
            _context.Employees.Remove(e);
            _context.SaveChanges();
            return Ok("Employee deleted");
        }

        [HttpPost]
        public IActionResult AddEmployee(Employee e)
        {
            _context.Employees.Add(e);
            _context.SaveChanges();
            return Created("api/employees/"+e.Id, e);
        }

        [HttpGet("/department/{departmentId:int}/employees")]
        public List<Employee> GetDepartmentsEmployees(int id,bool active)
        {
            if (active == true)
            {
                return _context.Employees.Where(x => x.DepardmentId == id && x.Active==true).ToList();

            }
            else
            {
                return _context.Employees.Where(x => x.DepardmentId == id && x.Active == false).ToList();
            }
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id,Employee employee)
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
