import { Component } from "react";
import { EnergyComponent } from "./EnergyComponent";
import { energyCompData } from "./../mock/energy";

class EnergyForm extends Component {
	render() {
		return (
			<div style={{ flex: 1, display: 'flex', flexDirection: "row", justifyContent: "center", alignContent: "center"}}>
				<EnergyComponent energyCompData={energyCompData} />
			</div>
		);
	}
}

export default EnergyForm;
