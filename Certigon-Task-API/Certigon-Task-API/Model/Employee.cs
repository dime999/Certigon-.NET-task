using System.ComponentModel.DataAnnotations.Schema;

namespace Certigon_Task_API.Model
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public decimal Salary { get; set; }
        public bool Active { get; set; }
        [ForeignKey(nameof(Department))]
        public int DepardmentId { get; set; }

        public Department Department { get; set; }

    }
}
