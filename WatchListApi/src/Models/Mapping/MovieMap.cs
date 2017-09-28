using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WatchList.Models.Mapping
{
    public class MovieMap
    {
        public MovieMap(EntityTypeBuilder<Movie> builder)
        {
            builder.ToTable("Movies");

            builder.HasKey(m => m.Id);
            builder.Property(m => m.Id).ValueGeneratedOnAdd();

            builder.Property(m => m.Title).IsRequired().HasMaxLength(255);
            builder.Property(m => m.ImagePath).IsRequired().HasMaxLength(255);

            builder.Property(m => m.Grade).HasDefaultValue(3);
            builder.Property(m => m.Watched);

            builder.HasOne(m => m.User).WithMany(u => u.Movies).HasForeignKey(u => u.UserId);
        }
    }
}