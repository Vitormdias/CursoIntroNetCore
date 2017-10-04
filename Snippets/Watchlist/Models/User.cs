using System.Collections.Generic;

namespace Watchlist.Models
{
    public class User
    {
        public User ()
        {
            Movies = new List<Movie>();
        }

        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }

        public ICollection<Movie> Movies { get; set; }
    }
}