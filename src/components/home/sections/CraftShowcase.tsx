// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// import { craftSteps } from "../../../data/home";

// const galleryImages = [
//   {
//     src: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=1200&q=85",
//     alt: "Minimal planted aquascape with stones",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
//     alt: "Lush planted aquarium environment",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
//     alt: "Premium aquarium with tropical fish",
//   },
// ];

// export default function CraftShowcase() {
//   return (
//     <section id="craft" className="bg-[#04111f] py-28">
//       <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
//         <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
//           <div>
//             <p className="text-xs uppercase tracking-[0.36em] text-[#6fffe9]">
//               Craft Beauty
//             </p>
//             <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
//               Dramatic landscapes, captured inside your space.
//             </h2>
//           </div>
//           <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
//             From the first stone placement to the final plant trim, every
//             aquascape is planned for depth, shadow, movement, and effortless
//             long-term upkeep.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
//           <div className="grid gap-5 sm:grid-cols-2">
//             <div className="premium-card relative min-h-[520px] overflow-hidden sm:col-span-2">
//               <Image
//                 src={galleryImages[0].src}
//                 alt={galleryImages[0].alt}
//                 fill
//                 sizes="(min-width: 1024px) 60vw, 100vw"
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#02080d]/80 via-transparent to-transparent" />
//               <div className="absolute bottom-0 left-0 max-w-xl p-7">
//                 <p className="text-xs uppercase tracking-[0.28em] text-[#6fffe9]">
//                   Signature Layout
//                 </p>
//                 <h3 className="mt-3 font-serif text-4xl text-white">
//                   Iwagumi restraint with planted softness.
//                 </h3>
//               </div>
//             </div>

//             {galleryImages.slice(1).map((image) => (
//               <div
//                 key={image.alt}
//                 className="premium-card relative min-h-[260px] overflow-hidden"
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   sizes="(min-width: 640px) 50vw, 100vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-[#02080d]/20" />
//               </div>
//             ))}
//           </div>

//           <div className="premium-card p-7 md:p-9">
//             <div className="flex items-center justify-between border-b border-white/10 pb-6">
//               <div>
//                 <p className="text-xs uppercase tracking-[0.28em] text-[#6fffe9]">
//                   Studio Method
//                 </p>
//                 <h3 className="mt-3 font-serif text-3xl text-white">
//                   Built with patience.
//                 </h3>
//               </div>
//               <ArrowUpRight className="h-6 w-6 text-[#14b8a6]" />
//             </div>

//             <div className="mt-8 space-y-8">
//               {craftSteps.map((item) => (
//                 <div key={item.step} className="grid grid-cols-[64px_1fr] gap-5">
//                   <span className="text-sm text-[#6fffe9]">{item.step}</span>
//                   <div>
//                     <h4 className="text-xl font-medium text-white">
//                       {item.title}
//                     </h4>
//                     <p className="mt-2 leading-7 text-slate-400">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 border-t border-white/10 pt-6">
//               <p className="font-serif text-2xl leading-9 text-white">
//                 Water, stone, wood, glass, and time working together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
