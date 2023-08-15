import { Component, OnInit } from "@angular/core";
import { AccountDataModel } from "src/app/model/accountDataModel";
import { CardsService } from "src/app/services/cards.service";

@Component({
	selector: "app-card-box",
	templateUrl: "./card-box.component.html",
	styleUrls: ["./card-box.component.css"],
})
export class CardBoxComponent implements OnInit {
	ngOnInit(): void {
		this.getAccountData();
	}

	getAccountData() {
		this.service.getCard().subscribe(data => {
			this.accountData.name = data.name
			this.accountData.account.agency = data.account.agency;
			this.accountData.card.limit = data.card.limit
			this.accountData.account.number = data.account.number;
			this.accountData.card.number = data.card.number.split(" ")[3];
		});
	}
	
	constructor(private service: CardsService) {}

	accountData: AccountDataModel = {
		name: "Bruce Wayne",
		account: {
			agency: "1857",
			number: "00.001939-3",
		},
		card: {
			limit: 15000,
			number: "0005",
		},
	};


}
