namespace Certigon_Task_API.ViewModels
{
    public class EmployeeAdd
    {
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public decimal Salary { get; set; }
        public bool Active { get; set; }
       
        public int DepardmentId { get; set; }

    }
}
