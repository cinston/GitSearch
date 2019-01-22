import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  profile:any[];

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile; 

    });

  }

  ngOnInit() {
  }

}
