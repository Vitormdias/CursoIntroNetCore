using System.Collections.Generic;

namespace WatchList.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }

        public User()
        {
            Movies = new List<Movie>();
        }
    }
}