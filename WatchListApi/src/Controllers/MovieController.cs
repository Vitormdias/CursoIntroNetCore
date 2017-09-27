using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WatchList.Models;

namespace WatchList.Controllers
{
    [Route("api/[controller]")]
    public class MovieController
    {
        private readonly MovieContext _ctx;

        public MovieController(MovieContext ctx)
        {
            _ctx = ctx;
        }

        private User GetUser(int id) => _ctx.Users.FirstOrDefault(u => u.Id == id);

        [HttpGet("{userId}")]
        public IEnumerable<Movie> Get(int userId)
        {
            return GetUser(userId).Movies;
        }

        [HttpGet("{userId}/{id}")]
        public Movie Get(int userId, int id)
        {
            return GetUser(userId).Movies.FirstOrDefault(m => m.Id == id);
        }

        [HttpPost("{userId}")]
        public void Post(int userId, [FromBody]Movie movie)
        {
            movie.UserId = userId;
            _ctx.Movies.Add(movie);
            _ctx.SaveChanges();
        }

        [HttpPut("{userId}/{id}")]
        public void Put(int userId, int id, [FromBody]Movie value)
        {
            var movie = Get(userId, id);
            movie.Grade = value.Grade;
            movie.ImagePath = value.ImagePath;
            movie.Title = value.Title;
            movie.Watched = value.Watched;

            _ctx.Entry(movie).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        [HttpDelete("{userId}/{id}")]
        public void Delete(int userId, int id)
        {
            var movie = Get(userId, id);
            _ctx.Movies.Remove(movie);
            _ctx.SaveChanges();
        }
    }
}