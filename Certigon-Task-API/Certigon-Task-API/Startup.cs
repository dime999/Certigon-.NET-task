using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Certigon_Task_API.Model;

namespace Certigon_Task_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    var frontendURL = Configuration.GetValue<string>("frontend_url");
                    builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
                });
            });

            services.AddDbContext<AppDbContext>(option => option.UseInMemoryDatabase(Configuration.GetConnectionString("Db")));
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Certigon_Task_API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Certigon_Task_API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            var scope = app.ApplicationServices.CreateScope();
            var context = scope.ServiceProvider.GetService<AppDbContext>();
            SeedData(context);
        }

        public static void SeedData(AppDbContext context)
        {
           Department dep1 = new Department { Id = 1,Name="Development" };
           Department dep2 = new Department { Id = 2,Name="Menagment" };
           Department dep3 = new Department { Id = 3,Name="HR" };

            Employee emp1 = new Employee { Id = 1, Name = "Adem", Age = 20, Gender = "Male", Salary = 1000, Active = false, DepardmentId = 1 };
            Employee emp2 = new Employee { Id = 2, Name = "Edhem", Age = 30, Gender = "Male", Salary = 5000, Active = true, DepardmentId = 2 };
            Employee emp3 = new Employee { Id = 3, Name = "Amila", Age = 20, Gender = "Female", Salary = 1000, Active = true, DepardmentId = 3 };





            context.Departments.Add(dep1);
            context.Departments.Add(dep2);
            context.Departments.Add(dep3);

            context.Employees.Add(emp1);
            context.Employees.Add(emp2);
            context.Employees.Add(emp3);

            context.SaveChanges();  
        }
    }
}
