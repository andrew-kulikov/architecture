using System;
using System.Collections.Generic;
using Monolith.Backend.Core.Models;
using Monolith.Backend.Core.Requests;

namespace Monolith.Backend.Core.Services
{
    public interface ITasksService
    {
        System.Threading.Tasks.Task<ICollection<Task>> GetAllTasksAsync();
        System.Threading.Tasks.Task<Task> GetTaskByIdAsync(Guid id);
        System.Threading.Tasks.Task<Task> CreateTaskAsync(CreateTaskRequest request);
        System.Threading.Tasks.Task RemoveTaskAsync(Guid id);
    }
}