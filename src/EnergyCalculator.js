import { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EnergyForm from "./components/EnergyForm";

export default class EnergyCalculator extends Component {
	render() {
		return (
			<div>
				<EnergyForm />
			</div>
		);
	}
}
