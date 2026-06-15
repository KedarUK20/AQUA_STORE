// import {
//   Truck,
//   RotateCcw,
//   ShieldCheck,
//   BadgeCheck,
//   Headphones,
// } from "lucide-react";

// const features = [
//   {
//     icon: Truck,
//     title: "FREE SHIPPING",
//     desc1: "On all orders over $99",
//     desc2: "Fast & reliable delivery",
//   },
//   {
//     icon: RotateCcw,
//     title: "30 DAYS RETURNS",
//     desc1: "Hassle free returns",
//     desc2: "No questions asked",
//   },
//   {
//     icon: ShieldCheck,
//     title: "SECURE PAYMENT",
//     desc1: "100% secure checkout",
//     desc2: "Multiple payment options",
//   },
//   {
//     icon: BadgeCheck,
//     title: "PREMIUM QUALITY",
//     desc1: "Carefully selected products",
//     desc2: "For healthy aquariums",
//   },
//   {
//     icon: Headphones,
//     title: "SUPPORT 24/7",
//     desc1: "We are here to help",
//     desc2: "Anytime, anywhere",
//   },
// ];

// export default function FeatureBar() {
//   return (
//     <section className="mt-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-cyan-900 rounded-2xl overflow-hidden bg-[#071923]">
//         {features.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="flex items-center gap-4 p-6 border-r border-cyan-900 last:border-r-0 hover:bg-[#0b2432] transition-all"
//             >
//               <div className="w-16 h-16 rounded-full border-2 border-cyan-500 flex items-center justify-center">
//                 <Icon
//                   size={32}
//                   className="text-cyan-400"
//                 />
//               </div>

//               <div>
//                 <h3 className="font-bold text-white text-sm">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-300 text-sm mt-1">
//                   {item.desc1}
//                 </p>

//                 <p className="text-gray-500 text-xs">
//                   {item.desc2}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }