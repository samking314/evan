import { Component } from "react";
import { EnergyComponent } from "./EnergyComponent";
import { energyCompData } from "./../mock/energy";

class EnergyForm extends Component {
	render() {
		return (
			<div className="center-component">
				<EnergyComponent energyCompData={energyCompData} />
			</div>
		);
	}
}

export default EnergyForm;
