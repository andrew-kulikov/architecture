using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Monolith.Backend.Core.Requests;
using Monolith.Backend.Core.Services;

namespace Monolith.Backend.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/tasks")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITasksService _tasksService;

        public TasksController(ITasksService tasksService)
        {
            _tasksService = tasksService;
        }

        //GET api/v1/tasks
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetTasks()
        {
            var tasks = await _tasksService.GetAllTasksAsync();

            return new OkObjectResult(tasks);
        }

        //POST api/v1/tasks
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateTask([FromBody] CreateTaskRequest request)
        {
            var task = await _tasksService.CreateTaskAsync(request);

            return new OkObjectResult(task);
        }
    }
}