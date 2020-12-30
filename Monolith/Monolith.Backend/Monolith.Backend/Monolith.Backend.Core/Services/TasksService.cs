using System;
using System.Collections.Generic;
using Monolith.Backend.Core.Models;
using Monolith.Backend.Core.Repositories;

namespace Monolith.Backend.Core.Services
{
    public class TasksService : ITasksService
    {
        private readonly ITasksRepository _repository;

        public TasksService(ITasksRepository repository)
        {
            _repository = repository;
        }

        public async System.Threading.Tasks.Task<ICollection<Task>> GetAllTasksAsync()
        {
            return await _repository.GetAllTasksAsync();
        }

        public async System.Threading.Tasks.Task<Task> GetTaskByIdAsync(Guid id)
        {
            return await _repository.GetTaskByIdAsync(id);
        }

        public async System.Threading.Tasks.Task RemoveTaskAsync(Guid id)
        {
            await _repository.RemoveTaskAsync(id);
        }
    }
}