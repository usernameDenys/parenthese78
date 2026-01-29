import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import { StaticImageData } from "next/image";

export interface TestimonialsItems {
  id: number;
  name: string;
  date: string;
  image?: StaticImageData;
  imageAlt?: string;
  comment: string;
}
export const testimonials: TestimonialsItems[] = [
  {
    id: 1,
    name: "Carolyn D.",
    date: "Jan 12, 2024",
    image: img1,
    imageAlt: "testimonial image 1",
    comment:
      "Je suis ravie de mon expérience avec ce service. Je recommande vivement !",
  },
  {
    id: 2,
    name: "Marc L.",
    date: "Feb 5, 2024",
    image: img2,
    imageAlt: "testimonial image 2",
    comment:
      "Un service exceptionnel et une équipe très professionnelle. Merci !",
  },
  {
    id: 3,
    name: "Sophie T.",
    date: "Mar 20, 2024",
    image: img3,
    imageAlt: "testimonial image 3",
    comment:
      "J'ai été impressionnée par la qualité et la rapidité du service fourni.",
  },
  {
    id: 4,
    name: "Antoine R.",
    date: "Apr 15, 2024",
    image: img4,
    imageAlt: "testimonial image 4",
    comment: "Une expérience client inoubliable. Je reviendrai certainement !",
  },
  {
    id: 5,
    name: "Isabelle M.",
    date: "May 8, 2024",
    image: img5,
    imageAlt: "testimonial image 5",
    comment:
      "Le service a dépassé mes attentes. Je suis très satisfaite du résultat.",
  },
  {
    id: 6,
    name: "Julien P.",
    date: "Jun 2, 2024",
    image: img6,
    imageAlt: "testimonial image 6",
    comment:
      "Professionnalisme et efficacité au rendez-vous. Je recommande sans hésiter !",
  },
];
