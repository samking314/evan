import { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { EnergyComponent } from "./EnergyComponent";
import { energyCompData } from "./mock/energy";

export default class EnergyCalculator extends Component {
	render() {
		return (
			<div>
				<EnergyComponent energyCompData={energyCompData} />
			</div>
		);
	}
}
