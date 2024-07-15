import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries = [
    {
      id: 1,
      name: 'France',
      superficie: 551695,
      population: 67081000,
      continent: 'Europe',
      produit_interieur_brut: 2780000000000,
      imageUrl:
        'https://img.freepik.com/vecteurs-libre/illustration-du-drapeau-france_53876-27099.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user',
    },
    {
      id: 2,
      name: 'Germany',
      superficie: 357386,
      population: 83149300,
      continent: 'Europe',
      produit_interieur_brut: 3846000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png',
    },
    {
      id: 3,
      name: 'Canada',
      superficie: 9984670,
      population: 38008005,
      continent: 'Amérique du nord',
      produit_interieur_brut: 1736000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
    },
    {
      id: 4,
      name: 'Japan',
      superficie: 377975,
      population: 125960000,
      continent: 'Asie',
      produit_interieur_brut: 5070000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
    },
    {
      id: 5,
      name: 'Australia',
      superficie: 7692024,
      population: 25687041,
      continent: 'Océanie',
      produit_interieur_brut: 1541000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
    },
    {
      id: 6,
      name: 'Brazil',
      superficie: 8515767,
      population: 212559417,
      continent: 'Amérique du sud',
      produit_interieur_brut: 1445000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
    },
    {
      id: 7,
      name: 'India',
      superficie: 3287263,
      population: 1393409038,
      continent: 'Asie',
      produit_interieur_brut: 2875000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    },
    {
      id: 8,
      name: 'Russia',
      superficie: 17098242,
      population: 146171015,
      continent: 'Europe',
      produit_interieur_brut: 1693000000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    },
    {
      id: 9,
      name: 'United States',
      superficie: 9833517,
      population: 331893745,
      continent: 'Amérique du nord',
      produit_interieur_brut: 21427700000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    },
  ];

  constructor() {}
  getCountries() {
    return this.countries;
  }

  addCountry(country: any) {
    this.countries.push(country);
  }

  updateCountry(updatedCountry: any) {
    const index = this.countries.findIndex((c) => c.id === updatedCountry.id);
    if (index > -1) {
      this.countries[index] = updatedCountry;
    }
  }
}
