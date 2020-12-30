using Microsoft.AspNetCore.Mvc;

namespace Monolith.Backend.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/tasks")]
    [ApiController]
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