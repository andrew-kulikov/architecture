using System;
using System.Collections.Generic;
using Monolith.Backend.Core.Models;

namespace Monolith.Backend.Core.Repositories
{
    public interface ITasksRepository
    {
        System.Threading.Tasks.Task<ICollection<Task>> GetAllTasksAsync();
        System.Threading.Tasks.Task<Task> GetTaskByIdAsync(Guid id);
        System.Threading.Tasks.Task<Task> CreateTaskAsync(Task task);
        System.Threading.Tasks.Task RemoveTaskAsync(Guid id);
    }
}