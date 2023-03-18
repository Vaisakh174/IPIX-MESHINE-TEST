import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // APIS for career page

  // first banner
  getCareerBanner() {
    return this.http.get<any>(`https://admin-edubex.ipixsolutions.net/api/v1/cms/banner/get?slug=career`)
    // params: slug=career
  }


  //job opening
  getCareerPage() {
    return this.http.get<any>(`https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=career`)
    // params:slug=career
  }


  getWhyUs() {
    return this.http.get<any>(`https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=why-work-with-us`)
  }


  getPerks() {
    return this.http.get<any>(` https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=perks-benefits`)
  }


  getCareerList() {
    return this.http.get<any>(`https://admin-edubex.ipixsolutions.net/api/v1/career/list`)
  }




  // APIS for career-details page




  postCareerDetail(data: any) {
    // data={id:17}
    return this.http.post<any>(`https://admin-edubex.ipixsolutions.net/api/v1/career/detail?id=17`, data)
    // params:id=17
  }



  getCareerListBanner() {
    return this.http.get<any>(`https://admin-edubex.ipixsolutions.net/api/v1/cms/banner/get?slug=career-list`)

    // params: slug=career-list
  }


  applyCareer(data: any) {
    return this.http.post<any>(`https://admin-edubex.ipixsolutions.net/api/v1/career/apply`, data)
    //post
    // params: resume,cover_letter,first_name,last_name,phone,email,linkedin,location,website


  }
}