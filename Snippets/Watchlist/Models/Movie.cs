namespace Watchlist.Models
{
    public class Movie
    {
        public int Id { get; set; }

        public string Title   {get;set;}
        public bool   Watched   {get;set;}
        public string Image   {get;set;}
        public int    Grade   {get;set;}
        
        public int UserId { get; set; }
        public User User { get; set; }
    }
}