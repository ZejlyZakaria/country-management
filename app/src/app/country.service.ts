import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries = [
    {
      id: 1,
      name: 'dddd',
      superficie: '33333',
      population: 333333,
      continent: 'Europe',
      produit_interieur_brut: 2000000,
      imageUrl:
        'https://img.freepik.com/vecteurs-libre/illustration-du-drapeau-france_53876-27099.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user',
    },
    {
      id: 2,
      name: 'ccccc',
      superficie: '11111',
      population: 1111111,
      continent: 'Europe',
      produit_interieur_brut: 4000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png',
    },
    {
      id: 3,
      name: 'aaaa',
      superficie: '8888888',
      population: 222222,
      continent: 'Europe',
      produit_interieur_brut: 4000000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png',
    },
  ];

  constructor() {}
  getCountries() {
    return this.countries;
  }

  addCountry(country: any) {
    this.countries.push(country); // Ajoutez le pays à l'array
  }

  updateCountry(updatedCountry: any) {
    const index = this.countries.findIndex((c) => c.id === updatedCountry.id);
    if (index > -1) {
      this.countries[index] = updatedCountry;
    }
  }
}
