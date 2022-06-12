import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Filter = ({ filterByStatus }) => {
	return (
		<div>
			<FormControl sx={{ m: "15px 2px", minWidth: 220 }}>
				<InputLabel id="demo-simple-select-helper-label">
					Filter By Status
				</InputLabel>
				<Select
					onChange={filterByStatus}
					labelId="demo-simple-select-helper-label"
          label="Filter By Status"
					id="demo-simple-select-helper"
          >
					<MenuItem value="">None</MenuItem>
					<MenuItem value="pending">Pending</MenuItem>
					<MenuItem value="approved">Approved</MenuItem>
					<MenuItem value="funded">Funded</MenuItem>
					<MenuItem value="closed">Closed</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Filter;
