using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Monolith.Backend.API.Swagger;
using Monolith.Backend.Core.Repositories;
using Monolith.Backend.Core.Services;
using Monolith.Backend.Infrastructure.Repositories;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Monolith.Backend.API
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddApiVersioning(options => { options.ReportApiVersions = true; });

            services.AddVersionedApiExplorer(options =>
            {
                options.GroupNameFormat = "'v'VVV";
                options.SubstituteApiVersionInUrl = true;
            });

            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();
            services.AddAppSwaggerGen();

            services.AddTransient<ITasksService, TasksService>();
            services.AddSingleton<ITasksRepository, FakeTasksRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
        {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();

            app.UseRouting();

            app.UseAppSwagger(provider);

            app.UseApiVersioning();

            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}