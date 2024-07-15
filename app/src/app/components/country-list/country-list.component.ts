import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../country.service';
import * as $ from 'jquery';

enum SortableFields {
  Name = 'name',
  Population = 'population',
  Superficie = 'superficie',
  Continent = 'continent',
  ProduitInterieurBrut = 'produit_interieur_brut',
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  editCountryForm!: FormGroup;
  selectedCountry!: any;
  filterName: string = '';
  SortableFields = SortableFields; // Ajout de la propriété SortableFields

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
    this.createEditForm();
    this.showEditModal();
    this.hideEditModal();
  }

  createEditForm() {
    this.editCountryForm = this.fb.group({
      name: ['', Validators.required],
      superficie: [0, [Validators.required, Validators.min(1)]],
      population: [0, [Validators.required, Validators.min(1)]],
      continent: ['', Validators.required],
      produit_interieur_brut: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required],
    });
  }

  openEditModal(country: any) {
    this.selectedCountry = country;
    this.editCountryForm.patchValue(country);
    $('#edit-modal').removeClass('hidden').addClass('flex');
  }

  onEditSubmit() {
    if (this.editCountryForm.valid) {
      const updatedCountry = {
        ...this.selectedCountry,
        ...this.editCountryForm.value,
      };
      this.countryService.updateCountry(updatedCountry);
      this.countries = this.countryService.getCountries(); // Update countries array
      this.hideEditModal();
    }
  }

  showEditModal(): void {
    $(document).ready(() => {
      $('.show-edit-modal-button').on('click', (event) => {
        const countryId = $(event.currentTarget).data('countryId');
        const country = this.countries.find((c) => c.id === countryId);
        if (country) {
          this.openEditModal(country);
        }
      });
    });
  }

  hideEditModal(): void {
    $(document).ready(() => {
      $('[data-modal-toggle="edit-modal"]').on('click', () => {
        $('#edit-modal').removeClass('flex').addClass('hidden');
      });
    });
    $('#edit-modal').removeClass('flex').addClass('hidden');
  }

  sortCountriesBy(field: SortableFields): void {
    this.countries.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
