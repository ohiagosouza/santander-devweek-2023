import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "../environments/environments";

@Injectable({
	providedIn: "root",
})

export class CardsService {
	private apiURL = enviroment.API_URL;
	

	constructor(private http: HttpClient) { }

	getCard(): Observable<any> {
		return this.http.get<any>(this.apiURL)
	}
}
