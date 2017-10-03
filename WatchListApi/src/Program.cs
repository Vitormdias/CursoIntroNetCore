using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace WatchList
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var port = Environment.GetEnvironmentVariable("PORT") ?? "5001";

            Console.WriteLine($"Using Url: {port}");

            BuildWebHost(port, args).Run();
        }

        public static IWebHost BuildWebHost(string port, string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls($"http://*:{port}/")
                .Build();
    }
}
