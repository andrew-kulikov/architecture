using System;
using System.Collections.Generic;
using Monolith.Backend.Core.Models;

namespace Monolith.Backend.Core.Services
{
    public interface ITasksService
    {
        System.Threading.Tasks.Task<ICollection<Task>> GetAllTasksAsync();
        System.Threading.Tasks.Task<Task> GetTaskByIdAsync(Guid id);
        System.Threading.Tasks.Task RemoveTaskAsync(Guid id);
    }
}