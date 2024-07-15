import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries = [
    {
      id: 1,
      name: 'Portugal',
      superficie: '345345',
      population: 67000000,
      continent: 'Europe',
      produit_interieur_brut: 2000000,
      imageUrl: 'https://img.freepik.com/vecteurs-libre/illustration-du-drapeau-france_53876-27099.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user',
    },
    {
      id: 2,
      name: 'Germany',
      superficie: '345345',
      population: 83000000,
      continent: 'Europe',
      produit_interieur_brut: 4000000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png',
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
    const index = this.countries.findIndex(c => c.id === updatedCountry.id);
    if (index > -1) {
      this.countries[index] = updatedCountry;
    }
  }

}
