using System;
using System.Collections.Generic;
using System.Linq;
using Monolith.Backend.Core.Models;
using Monolith.Backend.Core.Repositories;

namespace Monolith.Backend.Infrastructure.Repositories
{
    public class FakeTasksRepository : ITasksRepository
    {
        private readonly ICollection<Task> _tasks;

        public FakeTasksRepository()
        {
            _tasks = new List<Task>
            {
                new Task(Guid.NewGuid(), "Work Out", "Work Out Today"),
                new Task(Guid.NewGuid(), "Clean Up", "Clean Up Tomorrow"),
                new Task(Guid.NewGuid(), "Celebrate NY", "Woooow holidays woooow")
            };
        }

        public System.Threading.Tasks.Task<ICollection<Task>> GetAllTasksAsync()
        {
            return System.Threading.Tasks.Task.FromResult(_tasks);
        }

        public System.Threading.Tasks.Task<Task> GetTaskByIdAsync(Guid id)
        {
            return System.Threading.Tasks.Task.FromResult(
                _tasks.Single(t => t.Id == id));
        }

        public System.Threading.Tasks.Task RemoveTaskAsync(Guid id)
        {
            var taskToRemove = _tasks.FirstOrDefault(t => t.Id == id);

            if (taskToRemove != null) _tasks.Remove(taskToRemove);

            return System.Threading.Tasks.Task.CompletedTask;
        }
    }
}