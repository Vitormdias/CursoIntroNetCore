using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WatchList.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }

        public User()
        {
            Movies = new List<Movie>();
        }
    }
}