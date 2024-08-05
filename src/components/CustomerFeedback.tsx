import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const userFeedbacks = [
  {
    avatar: "/images/user2.jpg",
    user: "Jenny Wilson",
    rating: 4,
    comment:
      "The food was excellent ans so was the service. I had mushroom risotte with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    avatar: "/images/user4.jpg",
    user: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed teh Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    avatar: "/images/user5.jpg",
    user: "Devon Lane",
    rating: 4,
    comment:
      "Just had an amazing meal! The tomato basil soup was rich and flavorful, with a perfect hint of basil. The grilled chicken sandwich was juicy and well-seasoned, complemented by fresh toppings and a delicious aioli sauce. The sweet potato fries were crispy and sweet, rounding out a fantastic dining experience. Highly recommend!",
  },
  {
    avatar: "/images/user1.jpg",
    user: "Robert Watson",
    rating: 4,
    comment:
      "The meal was fantastic! The mushroom risotto was creamy and full of earthy flavors, perfectly cooked with a hint of parmesan. The pan-seared salmon was tender and flaky, served with a delightful lemon butter sauce. The side of roasted vegetables added a nice crunch and freshness. Highly satisfying and delicious!",
  },
  {
    avatar: "/images/user3.jpg",
    user: "Sasha Williams",
    rating: 5,
    comment:
      "Just had a wonderful meal! The beef stroganoff was tender and savory, with a rich, creamy sauce that was absolutely mouthwatering. The garlic mashed potatoes on the side were smooth and flavorful, making for a comforting and satisfying dish. Definitely recommend!",
  },
  {
    avatar: "/images/user6.jpg",
    user: "Sarah Roberts",
    rating: 5,
    comment:
      "Enjoyed a delightful lunch today! The spinach and feta stuffed chicken was cooked to perfection, juicy and packed with flavor. The quinoa salad served alongside was fresh and vibrant, with a light lemon vinaigrette that tied everything together beautifully. A truly refreshing and tasty meal!",
  },
];
export default function CustomerFeedback() {
  return (
    <ul
      className="grid gap-5 overflow-y-auto h-[460px] flex-grow scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-w-2 
     scrollbar-thumb-slate-400 scrollbar-track-slate-200
    dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-700"
    >
      {userFeedbacks.map((feedback) => (
        <li className="grid gap-2" key={feedback.user}>
          <div className="flex space-x-3 items-center">
            <Avatar className=" h-9 w-9">
              <AvatarImage src={feedback.avatar} alt="Avatar" loading="lazy" />
              <AvatarFallback>
                {feedback.user.split(" ")[0][0] +
                  feedback.user.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <h4 className=" font-semibold">{feedback.user}</h4>
          </div>
          <div className="flex">
            {new Array(feedback.rating).fill(1).map((_, i) => (
              <Star
                key={i}
                fill="yellow"
                strokeWidth={0.5}
                className="size-5"
              />
            ))}
            {new Array(5 - feedback.rating).fill(1).map((_, i) => (
              <Star key={i} strokeWidth={0.5} fill="white" className="size-5" />
            ))}
          </div>
          <p className="text-sm">{feedback.comment}</p>
          <hr className="my-2 dark:border-slate-500 border-slate-300" />
        </li>
      ))}
    </ul>
  );
}
