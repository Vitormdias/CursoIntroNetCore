using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Newtonsoft.Json;
using WatchList.Models;
using Xunit;
using System.Linq;

namespace WatchList.Test
{
    public class UserTests
    {
        private TestServer _testServer;

        public UserTests()
        {
            var webHost = new WebHostBuilder().UseStartup<FakeStartup>();
            _testServer = new TestServer(webHost);
        }

        protected HttpContent CreateJson(object objeto)
        {
            var stringPayload = JsonConvert.SerializeObject(objeto);
            var httpContent = new StringContent(stringPayload, Encoding.UTF8, "application/json");
            return httpContent;
        }

        private async Task<int> CreateUser(string name, string email)
        {
            var user = new User
            {
                Name = name,
                Email = email
            };

            using (var client = _testServer.CreateClient())
            using (var jsonContent = CreateJson(user))
            {
                var result = await client.PostAsync("/api/User", jsonContent);
                var idStr = await result.Content.ReadAsStringAsync();
                return Convert.ToInt32(idStr);
            }
        }

        private async Task<int> CreateMovie(int userId, string title, int grade, bool watched, string imagePath)
        {
            var movie = new Movie
            {
                Grade = grade,
                ImagePath = imagePath,
                Title = title,
                Watched = watched
            };

            using (var client = _testServer.CreateClient())
            using (var jsonContent = CreateJson(movie))
            {
                var result = await client.PostAsync($"/api/User/{userId}/Movie", jsonContent);
                var idStr = await result.Content.ReadAsStringAsync();
                return Convert.ToInt32(idStr);
            }
        }

        [Fact]
        public async Task Test_if_I_can_post_and_find_an_user()
        {
            var email = "email@email.com";
            await CreateUser("name", email);

            using (var client = _testServer.CreateClient())
            {
                var usersResult = await client.GetAsync("/api/User");
                var usersJson = await usersResult.Content.ReadAsStringAsync();

                var users = JsonConvert.DeserializeObject<IEnumerable<User>>(usersJson);

                Assert.Contains(users, u => u.Email == email);
            }
        }

        [Fact]
        public async Task Create_User_And_Insert_A_Movie_In_It()
        {
            var userId = await CreateUser("name", "email@email.com");

            var movieTitle = "MyMovie";
            var idMovie = await CreateMovie(userId, movieTitle, 10, true, "");

            using (var client = _testServer.CreateClient())
            {
                var moviesResult = await client.GetAsync($"/api/User/{userId}/Movie");
                var moviesJson = await moviesResult.Content.ReadAsStringAsync();

                var movies = JsonConvert.DeserializeObject<IEnumerable<Movie>>(moviesJson);

                Assert.Contains(movies, u => u.Title == movieTitle);
            }
        }
    }
}
