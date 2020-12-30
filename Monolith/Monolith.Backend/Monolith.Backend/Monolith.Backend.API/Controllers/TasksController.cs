using System;
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


        //GET api/v1/tasks/ec652bad-db2e-4389-9a4c-b0cc09600534
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetTask([FromRoute] Guid id)
        {
            // TODO: add optional return
            var task = await _tasksService.GetTaskByIdAsync(id);

            return new OkObjectResult(task);
        }

        //POST api/v1/tasks
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateTask([FromBody] CreateTaskRequest request)
        {
            var task = await _tasksService.CreateTaskAsync(request);

            return new OkObjectResult(task);
        }

        //POST api/v1/tasks
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteTask([FromRoute] Guid id)
        {
            await _tasksService.RemoveTaskAsync(id);

            return NoContent();
        }
    }
}