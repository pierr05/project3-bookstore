const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Entrepreneurship' },
        { name: 'Sports' },
        { name: 'Education' },
        { name: 'Kids' },
        { name: 'Fantasy' }
      ]);
      console.log('categories seeded');

      await Product.deleteMany();

      const products = await Product.insertMany([
        {
            name: "The Entrepreneur Mind: 100 Essential Beliefs, Characteristics, and Habits of Elite Entrepreneurs",
            description:
            "What Every Successful Entreprenuer Knows, But Won't Tell You -- Cover.",
            image: 'https://images.isbndb.com/covers/97/08/9780988479708.jpg',
            category: categories[0]._id,
            price: 5.55,
            quantity: 5,
            author: "Johnson, Kevin D."
        },
        {
            name: "Mini Habits: Smaller Habits, Bigger Results (Volume 1)",
            description:
            "What Every Successful Entreprenuer Knows, But Won't Tell You -- Cover.",
            image: "https://images.isbndb.com/covers/22/73/9781494882273.jpg",
            category: categories[0]._id,
            price: 12.99,
            quantity: 5
        },
        {
            name: "Mini Habits: Smaller Habits, Bigger Results (Volume 1)",
            description:
            "What Every Successful Entreprenuer Knows, But Won't Tell You -- Cover.",
            image: "https://images.isbndb.com/covers/22/73/9781494882273.jpg",
            category: categories[0]._id,
            price: 12.99,
            quantity: 5,
            author: "Guise, Stephen"
        },
        {
            name: "Sports Law",
            description:
            "The goal of this text is to provide easy access to legal issues involved in sport and the sport industry. The book's target audience is the nonlawyer and the non-law student, particularly sport management, legal studies, and paralegal students. Some chapters, such as a chapter on sports contracts, introduce the reader to skill sets, while others, such as the one on sports torts, present a more general view of that area of the law. Special attention is given to the needs of students who might study law only once during their academic career. Cases, chapter questions, and summaries are included. Epstein is chair of the Legal Studies Department at South College. Annotation c. Book News, Inc.,Portland, OR",
            image: "https://images.isbndb.com/covers/32/42/9780766823242.jpg",
            category: categories[1]._id,
            price: 95.95,
            quantity: 5,
            author: "Epstein, Adam"
        },
        {
            name: "Sports Marketing",
            description:
            "Understand the business of sports through a practitioner’s perspective.",
            image: "https://images.isbndb.com/covers/54/67/9780132135467.jpg",
            category: categories[1]._id,
            price: 162.99,
            quantity: 5,
            author: "Fetchko, Michael"
        },
        {
            name: "Exceptional Children: An Introduction to Special Education (10th Edition)",
            description:
            "Exceptional Children: An Introduction to Special Education has always been known for its innovation, strong research base and accessibility. The tenth edition has all of those strengths, but has a greater focus on highly effective, research-based practices that are described in a very step-by-step, applied manner.",
            image: "https://images.isbndb.com/covers/61/63/9780132626163.jpg",
            category: categories[2]._id,
            price: 135.00,
            quantity: 5,
            author: "Heward, William L."
        },
        {
            name: "Historical and Philosophical Foundations of Education: A Biographical Introduction",
            description:
            "Structured around major movements in world history, the lives of leading educators, and the philosophies and ideologies that resulted from their ideas.",
            image: "https://images.isbndb.com/covers/27/35/9780137152735.jpg",
            category: categories[2]._id,
            price: 138.00,
            quantity: 5,
            author: "Gutek, Gerald"
        },
        {
            name: "Why Are All the Black Kids Sitting Together in the Cafeteria: And Other Conversations About Race",
            description:
            "With A Discussion Guide And A New Epilogue By The Author, This Is The Fifth Anniversary Edition Of The Bestselling Work On The Development Of Racial Identity.",
            image: "https://images.isbndb.com/covers/36/19/9780465083619.jpg",
            category: categories[3]._id,
            price: 16.99,
            quantity: 5,
            author: "Beverly Daniel Tatum"
        },
        {
            name: "Art Lab for Kids: 52 Creative Adventures in Drawing, Painting, Printmaking, Paper, and Mixed Media-For Budding Artists of All Ages (Lab for Kids (1))",
            description:
            "Art Lab for Kids is a well-thought-out guide, making it easy to introduce art into children's lives.",
            image: "https://images.isbndb.com/covers/76/55/9781592537655.jpg",
            category: categories[3]._id,
            price: 15.00,
            quantity: 5,
            author: "Phillips, Kenneth H."
        },
        {
            name: "Power, Faith, and Fantasy: America in the Middle East: 1776 to the Present",
            description:
            "This best-selling history is the first fully comprehensive history of America’s involvement in the Middle East from George Washington to George W. Bush.",
            image: "https://images.isbndb.com/covers/03/04/9780393330304.jpg",
            category: categories[4]._id,
            price: 13.36,
            quantity: 5,
            author: "Oren, Michael B."
        },
        {
            name: "Legends: Stories By The Masters of Modern Fantasy",
            description:
            "Robert Silverberg, one of the field's most distinguished editors and authors, has put together an incredible anthology that no fantasy fanatic will be able to live without.",
            image: "https://images.isbndb.com/covers/03/55/9780765300355.jpg",
            category: categories[4]._id,
            price: 22.99,
            quantity: 5,
            author: "Robert Silverberg."
        }
      ]);
      console.log('products seeded');

      await User.deleteMany();

      await User.create({
        firstName: 'ash',
        lastName: 'ash',
        email: 'example@gmail.com',
        password: 'password12345',
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id]
          }
        ]
      });
      console.log('users seeded');
      
      process.exit();    
}); 