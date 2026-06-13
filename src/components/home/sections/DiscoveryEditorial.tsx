// import Image from "next/image";

// import { discoveryChapters } from "../../../data/home";

// export default function DiscoveryEditorial() {
//   return (
//     <section id="discover" className="relative py-28">
//       <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
//         <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
//           <div className="self-start lg:sticky lg:top-28">
//             <p className="text-xs uppercase tracking-[0.36em] text-[#6fffe9]">
//               Discover
//             </p>
//             <h2 className="mt-5 max-w-xl font-serif text-5xl leading-tight text-white md:text-6xl">
//               Learn from nature. Then design with restraint.
//             </h2>
//             <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
//               Built around the quiet discipline of nature aquascaping, this
//               studio experience focuses on the relationship between landscape,
//               glass, light, and long-term care.
//             </p>

//             <div className="premium-card mt-10 p-6">
//               <p className="font-serif text-2xl leading-9 text-white">
//                 &ldquo;A premium aquarium should feel discovered, not
//                 decorated.&rdquo;
//               </p>
//               <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">
//                 Aquarium Nature Studio
//               </p>
//             </div>
//           </div>

//           <div className="space-y-8">
//             {discoveryChapters.map((chapter, index) => (
//               <article
//                 key={chapter.title}
//                 className="premium-card overflow-hidden"
//               >
//                 <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
//                   <div
//                     className={`relative min-h-[360px] ${
//                       index % 2 === 1 ? "lg:order-2" : ""
//                     }`}
//                   >
//                     <Image
//                       src={chapter.image}
//                       alt={chapter.title}
//                       fill
//                       sizes="(min-width: 1024px) 50vw, 100vw"
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#02080d]/60 via-transparent to-transparent" />
//                   </div>

//                   <div className="flex flex-col justify-center p-7 md:p-10">
//                     <p className="text-xs uppercase tracking-[0.3em] text-[#6fffe9]">
//                       {chapter.eyebrow}
//                     </p>
//                     <h3 className="mt-5 font-serif text-4xl leading-tight text-white">
//                       {chapter.title}
//                     </h3>
//                     <p className="mt-5 text-base leading-8 text-slate-300">
//                       {chapter.text}
//                     </p>

//                     <div className="mt-8 flex flex-wrap gap-2">
//                       {chapter.meta.map((item) => (
//                         <span
//                           key={item}
//                           className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
//                         >
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
