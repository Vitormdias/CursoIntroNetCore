using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WatchList.Models;

namespace WatchList.Controllers
{
    [Route("api/User")]
    public class MovieController
    {
        private readonly MovieContext _ctx;

        public MovieController(MovieContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("{userId}/Movie")]
        public IEnumerable<Movie> Get(int userId)
        {
            return _ctx.Movies.Where(m => m.UserId == userId).ToList();
        }

        [HttpGet("{userId}/Movie/{id}")]
        public Movie Get(int userId, int id)
        {
            return _ctx.Movies.FirstOrDefault(m => m.UserId == userId && m.Id == id);
        }

        [HttpPost("{userId}/Movie")]
        public int Post(int userId, [FromBody]Movie movie)
        {
            movie.UserId = userId;
            _ctx.Movies.Add(movie);
            _ctx.SaveChanges();

            return movie.Id;
        }

        [HttpPut("{userId}/Movie/{id}")]
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

        [HttpDelete("{userId}/Movie/{id}")]
        public void Delete(int userId, int id)
        {
            var movie = Get(userId, id);
            _ctx.Movies.Remove(movie);
            _ctx.SaveChanges();
        }
    }
}