import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {

  country : any;
  countryId : any;
  constructor(private activatedRoute : ActivatedRoute, private service : CountryService) { }

  ngOnInit(): void {
    this.countryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.country = this.service.countries.find(x => x.id == this.countryId)
  }

}
