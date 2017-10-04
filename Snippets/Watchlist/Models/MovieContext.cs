using Microsoft.EntityFrameworkCore;

namespace Watchlist.Models
{
    public class MovieContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }

        public MovieContext(DbContextOptions<MovieContext> options)
            :base(options)
        {
        }
    }
}