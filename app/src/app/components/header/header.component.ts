import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef; // Ajout de ViewChild pour récupérer l'élément input

  addCountryForm!: FormGroup;
  inputFields = [
    'name',
    'population',
    'continent',
    'superficie',
    'produit_interieur_brut',
    'imageUrl',
  ];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.showAddModal();
    this.hideAddModal();
  }

  createForm() {
    this.addCountryForm = this.fb.group({
      name: ['', Validators.required],
      superficie: [0, [Validators.required, Validators.min(1)]],
      population: [0, [Validators.required, Validators.min(1)]],
      continent: ['', Validators.required],
      produit_interieur_brut: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addCountryForm && this.addCountryForm.valid) {
      const newCountry = {
        id: this.countryService.countries.length + 1,
        name: this.addCountryForm.value.name,
        superficie: this.addCountryForm.value.superficie,
        population: this.addCountryForm.value.population,
        continent: this.addCountryForm.value.continent,
        produit_interieur_brut:
          this.addCountryForm.value.produit_interieur_brut,
        imageUrl: this.addCountryForm.value.imageUrl,
      };
      this.countryService.addCountry(newCountry);
      this.resetForm();
      this.hideAddModal();
    } else {
      this.markFormTouched(this.addCountryForm);
    }
  }

  markFormTouched(formGroup: FormGroup | null) {
    if (formGroup) {
      Object.values(formGroup.controls).forEach((control) => {
        control.markAsTouched();
        if (control instanceof FormGroup) {
          this.markFormTouched(control);
        }
      });
    }
    this.setValidationBorders(); // Appel de la méthode pour définir les bordures de validation
  }

  resetForm() {
    if (this.addCountryForm) {
      this.addCountryForm.reset({
        name: '',
        superficie: 0,
        population: 0,
        continent: '',
        produit_interieur_brut: 0,
        imageUrl: '',
      });
      this.resetBorders();
    }
  }

  resetBorders() {
    this.inputFields.forEach((field) => {
      const element = document.getElementById(field);
      if (element) {
        element.classList.remove('border-red-500');
      }
    });
  }

  setValidationBorders() {
    this.inputFields.forEach((field) => {
      const element = document.getElementById(field);
      if (element && this.addCountryForm.get(field)?.invalid) {
        element.classList.add('border-red-500');
      } else if (element) {
        element.classList.remove('border-red-500');
      }
    });
  }

  showAddModal(): void {
    $(document).ready(() => {
      $('.show-add-modal-button').on('click', () => {
        $('#add-modal').removeClass('hidden').addClass('flex');
      });
    });
  }

  hideAddModal(): void {
    $(document).ready(() => {
      $('[data-modal-toggle="add-modal"]').on('click', () => {
        $('#add-modal').removeClass('flex').addClass('hidden');
        this.resetBorders();
      });
    });
  }
}
