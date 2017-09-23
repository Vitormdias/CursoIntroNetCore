namespace WatchList.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImagePath { get; set; }
        public int Grade { get; set; }
        public bool Watched { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}