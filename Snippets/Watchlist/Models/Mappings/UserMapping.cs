using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Watchlist.Models.Mappings
{
    public class UserMapping
    {
        public UserMapping (EntityTypeBuilder<User> builder)
        {
            builder
                .ToTable("Users");

            builder
                .HasKey(u => u.Id);
            
            builder
                .Property(u => u.Id)
                .ValueGeneratedOnAdd();

            builder
                .Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(200);
            
            builder
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(255);

            builder
                .HasMany(user => user.Movies)
                .WithOne(movie => movie.User)
                .HasForeignKey(movie => movie.UserId);
        }
    }
}