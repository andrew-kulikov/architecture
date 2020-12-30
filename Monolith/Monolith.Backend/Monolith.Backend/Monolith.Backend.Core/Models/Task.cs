using System;

namespace Monolith.Backend.Core.Models
{
    public class Task
    {
        public Task(Guid id, string title, string description)
        {
            Id = id;
            Title = title;
            Description = description;
        }

        public Guid Id { get; private set; }
        public string Title { get; private set; }
        public string Description { get; private set; }
    }
}