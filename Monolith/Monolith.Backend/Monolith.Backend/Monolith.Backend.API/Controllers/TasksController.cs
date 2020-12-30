using Microsoft.AspNetCore.Mvc;

namespace Monolith.Backend.API.Controllers
{
    [Route("api/tasks")]
    public class TasksController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public IActionResult GetTasks()
        {
            return Ok();
        }
    }
}