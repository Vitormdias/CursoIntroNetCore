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

        [Fact]
        public async Task Test_if_I_can_post_and_find_an_user()
        {
            var user = new User
            {
                Name = "Teste",
                Email = "email@email.com"
            };

            using (var client = _testServer.CreateClient())
            using (var jsonContent = CreateJson(user))
            {
                var result = await client.PostAsync("/api/User", jsonContent);

                var usersResult = await client.GetAsync("/api/User");
                var usersJson = await usersResult.Content.ReadAsStringAsync();

                var users = JsonConvert.DeserializeObject<IEnumerable<User>>(usersJson);

                Assert.Contains(users, u => u.Email == user.Email);
            }
        }
    }
}
