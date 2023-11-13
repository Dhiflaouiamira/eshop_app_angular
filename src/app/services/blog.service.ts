import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BLOGS = [
    {
      id: 1,
      title: "Un Voyage dans l'Histoire et la Culture",
      views: 0,
      comments: [],
      image: "assets/images/blog-01.jpg",
      author: "Dhiflaoui AMIRA",
      date: new Date("2023-07-15T17:30"),
      content: "Découvrez l'histoire et la culture de la Tunisie à travers ses vêtements traditionnels emblématiques. Plongez dans la diversité des costumes portés lors des célébrations et des événements spéciaux. Explorez l'évolution de la mode tunisienne moderne en fusionnant tradition et créativité. Appréciez l'artisanat exceptionnel derrière ces tenues uniques, témoins d'un riche patrimoine culturel."
    },
    {
      id: 2,
      title: "Le botox facial ",
      views: 0,
      comments: [],
      image: "assets/images/blog-02.jpg",
      author: "CYRINE HOSNI",
      date: new Date("2023-06-15T17:30"),
      content: "Révélez une peau éclatante et jeune. Découvrez les bienfaits de ce traitement pour atténuer les rides et les ridules. Une approche sûre et efficace pour une peau d'apparence plus lisse. Prenez soin de votre peau avec le botox facial et retrouvez une confiance radieuse."
    },
    {
      id: 2,
      title: "La Femme Tunisienne",
      views: 0,
      comments: [],
      image: "assets/images/blog-03.jpg",
      author: "foulen ben foulen",
      date: new Date("2023-07-15T17:30"),
      content: "La Femme Tunisienne : Un pilier essentiel de la société tunisienne, portant avec grâce le fardeau de l'histoire et de la modernité Histoires inspirantes de femmes tunisiennes : Leur détermination, leur courage et leur contribution à l'évolution du pays Émancipation et égalité  L'ascension de la femme tunisienne vers de nouveaux horizons."
    }
  ]

  constructor() { }
}
